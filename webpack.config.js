const path = require('path');


const page = {
  title: 'Wyatt Portfolio',
  chunks: ['index'],
  meta: {
    description: 'About Me: Student and ambitious developer concentrated in '
      + 'creating intuitive web applications',
  },
  favicon: path.resolve(__dirname, 'src/images/favicon.ico'),
};

module.exports = require('webpack-boiler')({
  entry: {
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
