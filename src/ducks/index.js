import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createFilter } from 'redux-persist-transform-filter';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import timelineReducer from 'ducks/timeline.js';
import configReducer from 'ducks/config.js';

const configPersistConfig = {
	key: 'config',
	storage,
	stateReconciler: autoMergeLevel2,
	transforms: [
		createFilter(
			'theme',
			['active']
		),
		createFilter(
			'filter',
			['active']
		)
	]
};

const rootReducer = combineReducers({
	timeline: timelineReducer,
	config: persistReducer(configPersistConfig, configReducer)
});

const middlewares = applyMiddleware(
	promiseMiddleware(),
	thunk
);

// For more about ducks see: https://github.com/erikras/ducks-modular-redux
export const store = createStore(
	rootReducer,
	compose(
		middlewares,
		window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
	)
);

export const persistor = persistStore(store);
