const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

const DEV = process.env.NODE_ENV !== 'production';

const PATHS = {};
PATHS.dist = path.resolve(__dirname, 'dist');
PATHS.src = path.resolve(__dirname, 'src');
PATHS.template = path.resolve(PATHS.src, 'boilerplate.pug');
PATHS.static = path.resolve(PATHS.src, 'static');
PATHS.assetName = 'asset/[name].[ext]';
PATHS.entry = './src/index.js';
PATHS.resumeEntry = './src/resume.js';
  
const baseConfig = {

  mode: process.env.NODE_ENV,

  context: __dirname,
  
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
        }],
        include: PATHS.src,
      }, {
        test: /\.pug$/,
        loader: 'pug-loader',
        include: PATHS.src,
      }, {
        test: /\.s?css$/,
        use: [
          DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              autoprefixer: false,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [ autoprefixer() ],
            },
          },
          'sass-loader',
        ],
        include: PATHS.css,
      }, {
        test: /\.(gif|jpe?g|png|svg|ttf|eot|woff|woff2)(\?\w+=[\d.]+)?$/,
        use: [ {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: PATHS.assetName,
          },
        } ],
        // include: PATHS.images, PATHS.fonts
      }, {
        // test: /\.()(\?\w+=[\d.]+)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
        include: PATHS.static,
      },
    ],
  },
};

const sharedPlugins = [

  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),

  new MiniCssExtractPlugin({
    filename: DEV ? '[name].css' : '[name].[hash].css',
    allChunks: true,
  }),

  new HtmlWebpackPlugin({
    template: PATHS.template, // required
    inject: false, // required
    chunks: ['main'],
    filename: 'index.html',
    title: 'Wyatt Ades Portfolio',
    meta: [{
      name: 'description',
      content: 'About Me: Student and ambitious developer concentrated in ' +
                'creating intuitive web applications',
    }],
    mobile: true,
    // cache: false,
    favicon: path.resolve(PATHS.src, 'images/favicon.ico'),
    appMountId: 'react-root',

    ...(process.env.NODE_ENV === 'production' ? {
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
        minifyJS: true,
      },
      googleAnalytics: 'UA-105229811-1',
    } : {}),
  }),

  new HtmlWebpackPlugin({
    template: PATHS.template, // required
    inject: false, // required
    chunks: ['resume'],
    filename: 'resume.html',
    title: 'Wyatt Ades Resume',
    mobile: false,
    appMountId: 'react-root',
  }),
  
];

if (process.env.NODE_ENV === 'production') { // PRODUCTION CONFIG

  module.exports = {
    
    entry: {
      main: PATHS.entry,
      resume: PATHS.resumeEntry,
    },

    output: {
      path: PATHS.dist,
      publicPath: '/',
      filename: '[name].[chunkhash].js',
    },

    plugins: [

      new CleanWebpackPlugin([ 'dist' ]),

      ...sharedPlugins,
            
      new webpack.optimize.OccurrenceOrderPlugin(),

      new UglifyJsPlugin({
        parallel: true,
      }),

      new OptimizeCssAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } },
      }),
      
    ],

    ...baseConfig,
  };

} else if (process.env.NODE_ENV === 'development') { // DEVELOPMENT CONFIG

  module.exports = {

    devtool: 'eval-source-map',

    output: {
      publicPath: '/',
    },

    devServer: {
      hot: true,
      historyApiFallback: true,
      port: 8080,
    },

    entry: {
      main: PATHS.entry,
      resume: PATHS.resumeEntry,
    },

    plugins: [

      ...sharedPlugins,

      new webpack.NamedModulesPlugin(),

      new webpack.HotModuleReplacementPlugin(),
    ],
    
    ...baseConfig,
  };

} else {
  throw new Error('Please set NODE_ENV environment variable to "production" or "development"');
}
