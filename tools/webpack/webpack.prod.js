import merge from 'webpack-merge';
import MinifyPlugin from 'babel-minify-webpack-plugin';
import commonConfig from './webpack.common.js';

const config = {

	mode: 'production',

	plugins: [
		new MinifyPlugin()
	]

};

export default merge(commonConfig, config);
