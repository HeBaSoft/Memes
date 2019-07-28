import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import commonConfig from './webpack.common.js';

const port = process.env.PORT || 8080;
const contentBase = path.join(`http://localhost:${port}/`, 'dist');

const config = {

	mode: 'development',

	devtool: 'source-map',

	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		port: port,
		host: '0.0.0.0',
		compress: true,
		inline: true,
		hot: true,
		contentBase: contentBase,
		historyApiFallback: true,
		headers: {
			'Access-Control-Allow-Origin': '*'
		},
		watchOptions: {
			ignored: /node_modules/,
			aggregateTimeout: 300,
			poll: 100
		}
	}

};

export default merge(commonConfig, config);
