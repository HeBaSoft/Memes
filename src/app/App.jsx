import React from 'react';
import PropTypes from 'prop-types';

import './integration/moment';
import './integration/axios';
import 'normalize.css';
import 'bulma/css/bulma.css';

import './styles/global.css';
import './styles/app.css';

import Themer from './Themer.jsx';
import Header from 'components/Header';
import Timeline from 'components/Timeline';
import ReturnButton from 'components/ReturnButton';

const App = ({ activeTheme }) => {
	return (
		<React.Fragment>
			<Themer activeTheme={activeTheme} />
			<Header />
			<Timeline />
			<ReturnButton />
		</React.Fragment>
	);
};

App.propTypes = {
	activeTheme: PropTypes.string
};

export default App;
