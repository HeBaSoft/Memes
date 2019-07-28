import { connect } from 'react-redux';

import { setTheme } from 'ducks/config';
import ThemeMenu from './ThemeMenu.jsx';

const mapStateToProps = (state) => {
	const { theme } = state.config;

	return {
		activeTheme: theme.active,
		availableThemes: theme.options,
		isOpen: theme.isOpen
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setTheme: (themeName) => dispatch(setTheme(themeName))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeMenu);
