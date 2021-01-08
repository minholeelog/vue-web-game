const VueLoaderPlugin = require("vue-loader/lib/plugin");
const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".vue"],
  },
  entry: {
    app: path.join(__dirname, "main.js"),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    publicPath: "/dist",
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
};
