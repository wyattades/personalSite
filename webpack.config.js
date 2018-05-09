const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

const PATHS = {};
PATHS.dist = path.resolve(__dirname, 'dist');
PATHS.src = path.resolve(__dirname, 'src');
PATHS.template = path.resolve(PATHS.src, 'boilerplate.pug');
PATHS.assetName = 'asset/[name].[ext]';
PATHS.entry = './src/index.js';
  
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
        loaders: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
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
        }),
        include: PATHS.css,
      }, {
        test: /\.(gif|jpe?g|png|svg)(\?\w+=[\d.]+)?$/,
        use: [ {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: PATHS.assetName,
          },
        } ],
        // include: PATHS.images,
      }, {
        test: /\.(ttf|eot|woff|woff2)(\?\w+=[\d.]+)?$/,
        loader: 'url-loader',
        options: {
          name: PATHS.assetName,
          limit: 10000,
        },
        // include: PATHS.fonts,
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

  new ExtractTextPlugin({
    filename: '[name].[md5:contenthash:hex:20].css',
    allChunks: true,
    disable: process.env.NODE_ENV !== 'production',
  }),

  new HtmlWebpackPlugin({
    template: PATHS.template, // required
    inject: false, // required
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
  
];

if (process.env.NODE_ENV === 'production') { // PRODUCTION CONFIG

  module.exports = {
    
    entry: {
      main: PATHS.entry,
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

      // CommonsChunkPlugin: vendor must come before runtime
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor',
      //   minChunks: ({ resource }) => /node_modules/.test(resource),
      // }),
      
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'runtime',
      // }),

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

    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8080',
      'webpack/hot/only-dev-server',
      PATHS.entry,
    ],

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
