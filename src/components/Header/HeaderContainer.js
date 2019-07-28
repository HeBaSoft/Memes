import { connect } from 'react-redux';

import { toggleThemeMenu, toggleFilterMenu } from 'ducks/config';
import Header from './Header.jsx';

const mapStateToProps = (state) => {
	const { theme, filter } = state.config;
	
	return {
		isThemeMenuOpen: theme.isOpen,
		isFilterMenuOpen: filter.isOpen
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		toggleThemeMenu: () => dispatch(toggleThemeMenu()),
		toggleFilterMenu: () => dispatch(toggleFilterMenu())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
