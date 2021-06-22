// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const srcDir        = path.join(__dirname,"./src")
const distDir       = path.join(__dirname,"./build") // pode usar a dist
const entry         = path.join(srcDir, "scripts/index.js" )
const srcHtmlLayout = path.join(__dirname, "./src/views/index.html")


const config = {
  entry: entry,
  target: "node",
  output: {
    filename: "bundle.js",
    path: distDir,
    library: "my-library",
    libraryTarget: "umd"
  },
  devServer: {
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: srcHtmlLayout,
      chunksSortMode: "none"
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/i,
//         loader: "babel-loader",
//       },
//       {
//         test: /\.css$/i,
//         use: [stylesHandler, "css-loader"],
//       },
//       {
//         test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
//         type: "asset",
//       },

//       // Add your rules for custom modules here
//       // Learn more about loaders from https://webpack.js.org/loaders/
//     ],
//   },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  devServer: {
    host: "0.0.0.0",
    port: process.env.PORT || 8085,
    hot: true,
    inline: true,
  }
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
