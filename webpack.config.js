const path = require('path');


const page = {
  filename: 'index.html',
  chunks: ['main'],
  title: 'Wyatt Ades Portfolio',
  meta: [{
    name: 'description',
    content: 'About Me: Student and ambitious developer concentrated in '
            + 'creating intuitive web applications',
  }],
  favicon: path.resolve(__dirname, 'src/images/favicon.ico'),
};

module.exports = require('webpack-boiler')({
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    resume: path.resolve(__dirname, './src/resume.js'),
  },
  react: true,
  url: 'https://wyattades.com',
  googleAnalytics: 'UA-105229811-1',
  pages: [page, {
    ...page,
    filename: 'resume.html',
    chunks: ['resume'],
  }],
});
