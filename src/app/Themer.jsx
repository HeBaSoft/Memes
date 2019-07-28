/* eslint-disable import/no-webpack-loader-syntax */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import lightTheme from '!!raw-loader!./themes/light.css';
import darkTheme from '!!raw-loader!./themes/dark.css';

export const themes = {
	dark: darkTheme,
	light: lightTheme
};

const Themer = ({ activeTheme }) => {
	return (
		<Helmet>
			<style type="text/css">
				{themes[activeTheme]}
			</style>
		</Helmet>
	);
};

Themer.propTypes = {
	activeTheme: PropTypes.string
};

export default Themer;
