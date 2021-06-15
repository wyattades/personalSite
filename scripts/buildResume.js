const fs = require('fs');
const { pipeline } = require('stream');
const { promisify } = require('util');

const prettier = require('prettier');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fetch = require('node-fetch');

const streamPipeline = promisify(pipeline);

const callOpenHtmlToPdf = async (type, html, outFile) => {
  const res = await fetch(`https://sandbox.openhtmltopdf.com/post-${type}`, {
    method: 'POST',
    body: new URLSearchParams({
      'upload-area': html,
    }),
  });

  if (!res.ok)
    throw new Error(`post-${type}: unexpected response ${res.statusText}`);

  if (type === 'logs') {
    const logs = await res.text();

    console.log('LOG OUTPUT:\n\n', logs);

    fs.writeFileSync(outFile, logs, 'utf8');

    if (/\bunhandled exception\b/i.test(logs))
      throw new Error('Logs contained fatal error');
  } else {
    await streamPipeline(res.body, fs.createWriteStream(outFile));
  }
};

const getHtml = async (outFile) => {
  // NOTE: make sure xlaunch is running if using WSL2
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  // NOTE: make sure the dev server is running
  await page.goto('http://localhost:3000/resume');

  const pageHtml = await page.evaluate(
    () => document.documentElement.outerHTML,
  );

  await browser.close();

  const $ = cheerio.load(pageHtml);

  // remove unnecessary elements
  $(
    'next-route-announcer, script, link, noscript, #__next-build-watcher, [data-next-hide-fouc]',
  ).remove();

  $('style')
    .contents()
    .each((_, el) => {
      if (el.type === 'text') {
        // remove <style> tag containing font-awesome, it breaks the renderer :/ Also we don't use it in the resume html
        if (el.data.includes('//fontawesome.io/license')) $(el.parent).remove();
        // remove source-map comments
        else el.data = el.data.replace(/\/\*# sourceMappingURL=.*?\*\/$/, '');
      }
    });

  // remove all HTML comments
  $.root()
    .find('*')
    .contents()
    .filter((_, n) => n.type === 'comment')
    .remove();

  const outHtml = prettier.format($.html(), { parser: 'html' });

  fs.writeFileSync(outFile, outHtml, 'utf8');

  return outHtml;
};

(async () => {
  const outHtml = await getHtml('tmp/resume.html');

  await callOpenHtmlToPdf('logs', outHtml, 'tmp/build-resume-logs.txt');
  await callOpenHtmlToPdf('pdf', outHtml, 'public/resume.pdf');
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
