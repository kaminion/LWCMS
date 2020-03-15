const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: "./views/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname + "/client/views")
	},
	mode: "none",
	module:
	{
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: "/node_modules",
			use: ['babel-loader'],
		}, {
			test: /\.html$/,
			use: [{
				loader: 'html-loader',
				options: {minimize: true}
			}]
		},{
			test: /\.css$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader']
		}]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './client/test.html',
			filename: 'index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'style.css'
		})
	]
};