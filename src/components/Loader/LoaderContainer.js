import { connect } from 'react-redux';

import Loader from './Loader.jsx';

const mapStateToProps = (state) => {
	return {
		activeTheme: state.config.theme.active
	};
};

export default connect(mapStateToProps)(Loader);
