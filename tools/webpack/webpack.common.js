import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const entryDirecotry = path.resolve(__dirname, '../../src/app');
const outputDirectory = path.resolve(__dirname, '../../dist');

export default {

	entry: entryDirecotry,

	target: 'web',

	output: {
		path: outputDirectory,
		filename: 'memes.bundle.js'
	},

	resolve: {
		alias: {
			app: path.resolve(__dirname, '../../src/app'),
			ducks: path.resolve(__dirname, '../../src/ducks'),
			components: path.resolve(__dirname, '../../src/components')
		}
	},

	module: {
		rules: [
			{
				test: /\.js$|.jsx/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							modules: true,
							importLoaders: 1
						}
					},
					{
						loader: 'svg-transform-loader/encode-query'
					}
				]
			},
			{
				test: /\.css$/,
				include: /node_modules/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|jpg|json)$/,
				use: [
					{
						loader: 'file-loader'
					}
				]
			},
			{
				test: /\.svg(\?.*)?$/, // match .svg and .svg?param=value
				use: [
					'svg-url-loader',
					'svg-transform-loader'
				]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(entryDirecotry, 'index.html')
		})
	]
};
