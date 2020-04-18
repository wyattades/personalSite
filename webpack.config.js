const page = {
  title: 'Wyatt Portfolio',
  chunks: ['index'],
  meta: {
    description:
      'About Me: Student and ambitious developer concentrated in ' +
      'creating intuitive web applications',
  },
  favicon: 'src/images/favicon.ico',
};

module.exports = require('webpack-boiler')({
  entry: {
    index: './src/index.js',
    resume: './src/resume.js',
    screensaver: './src/screensaver.js',
  },
  react: true,
  url: 'https://wyattades.com',
  googleAnalytics: 'UA-105229811-1',
  pages: [
    { ...page },
    {
      ...page,
      filename: 'resume.html',
      chunks: ['resume'],
    },
    {
      ...page,
      filename: 'screensaver.html',
      chunks: ['screensaver'],
    },
  ],
});
