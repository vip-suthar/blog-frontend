const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./index.tsx", // Entry file
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[hash].bundle.js",
    clean: true, // Clean dist folder before build
    publicPath: "/"
  },
  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, "src/*")
    },
    extensions: [".tsx", ".ts", ".js"], // Resolve these file types
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // Apply loader to TS/TSX files
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // Load CSS files
        use: ["style-loader", "css-loader", 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // Load images
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML template
    }),
  ],
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, "public"), // Serve static file
    hot: true,
    historyApiFallback: true, // Support React Router
  },
  mode: "development", // Change to 'production' for production builds
};
