import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'ducks';
import App from './AppContainer';

function render (Component) {
	ReactDOM.render(
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<Component />
			</PersistGate>
		</Provider>,
		document.getElementById('root')
	);
}

render(App);

module.hot && module.hot.accept('app', () => {
	render(require('app').default);
});
