import { connect } from 'react-redux';

import App from './App.jsx';

const mapStateToProps = (state) => {
	return {
		activeTheme: state.config.theme.active
	};
};

export default connect(mapStateToProps)(App);
