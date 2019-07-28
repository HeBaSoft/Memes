import axios from 'axios';
import _ from 'lodash';

import { themes } from 'app/Themer.jsx';

// Actions
const SET_THEME = 'CONFIG/THEME_SET';
const TOGGLE_THEME_MENU = 'CONFIG/THEME_MENU_TOGGLE';
const LOAD_FILTER_OPTIONS = 'CONFIG/FILTER_LOAD';
const TOGGLE_FILTER_TAG = 'CONFIG/FILTER_TAG_TOGGLE';
const TOGGLE_FILTER_MENU = 'CONFIG/FILTER_MENU_TOGGLE';

// Reducer
const defaultState = {
	theme: {
		active: 'dark',
		isOpen: false,
		options: Object.keys(themes)
	},
	filter: {
		active: [],
		options: [],
		isOpen: false,
		status: {
			isLoading: false,
			error: null
		}
	}
};

/* eslint no-case-declarations: off */
/* eslint no-console: off */
export default function reducer (state = defaultState, action = {}) {
	switch (action.type) {
		case SET_THEME:
			return {
				...state,
				theme: {
					...state.theme,
					active: action.payload.themeName
				}
			};

		case `${LOAD_FILTER_OPTIONS}_PENDING`:
			return {
				...state,
				filter: {
					...state.filter,
					options: [],
					status: {
						...state.filter.status,
						isLoading: true,
						error: null
					}
				}
			};

		case `${LOAD_FILTER_OPTIONS}_REJECTED`:
			return {
				...state,
				filter: {
					...state.filter,
					options: [],
					status: {
						...state.filter.status,
						isLoading: false,
						error: action.payload
					}
				}
			};

		case `${LOAD_FILTER_OPTIONS}_FULFILLED`:
			const sources = action.payload.data;
			const isActiveEmpty = _.isEmpty(state.filter.active);
			return {
				...state,
				filter: {
					...state.filter,
					active: isActiveEmpty ? sources : state.filter.active,
					options: sources,
					status: {
						...state.filter.status,
						isLoading: false,
						error: null
					}
				}
			};

		case TOGGLE_FILTER_TAG:
			const tagName = action.payload.tagName;
			const activeTags = state.filter.active;
			const isTagActive = activeTags.includes(tagName);
			return {
				...state,
				filter: {
					...state.filter,
					active: isTagActive
						? activeTags.filter((tag) => tag !== tagName)
						: [ ...activeTags, tagName ]
				}
			};

		case TOGGLE_FILTER_MENU:
			return {
				...state,
				theme: {
					...state.theme,
					isOpen: false
				},
				filter: {
					...state.filter,
					isOpen: !state.filter.isOpen
				}
			};

		case TOGGLE_THEME_MENU:
			return {
				...state,
				theme: {
					...state.theme,
					isOpen: !state.theme.isOpen
				},
				filter: {
					...state.filter,
					isOpen: false
				}
			};

		default:
			return state;
	}
}

// Action Creators
export function setTheme (themeName) {
	return {
		type: SET_THEME,
		payload: {
			themeName
		}
	};
}

export function toggleThemeMenu () {
	return {
		type: TOGGLE_THEME_MENU
	};
}

export function loadFilterOptions () {
	return {
		type: LOAD_FILTER_OPTIONS,
		payload: axios.get('memes/sources')
	};
}

export function toggleFilter (tagName) {
	return {
		type: TOGGLE_FILTER_TAG,
		payload: {
			tagName
		}
	};
}

export function toggleFilterMenu () {
	return {
		type: TOGGLE_FILTER_MENU
	};
}