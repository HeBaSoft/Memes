import axios from 'axios';

// Actions
const LOAD_POSTS = 'TIMELINE/LOAD_POSTS';

// Reducer
const defaultState = {
	posts: [],
	status: {
		isLoadingPosts: false,
		error: null
	}
};

/* eslint no-case-declarations: off */
/* eslint no-console: off */
export default function reducer (state = defaultState, action = {}) {
	switch (action.type) {
		case `${LOAD_POSTS}_PENDING`:
			return {
				...state,
				posts: [],
				status: {
					...state.status,
					isLoadingPosts: true,
					error: null
				}
			};

		case `${LOAD_POSTS}_REJECTED`:
			return {
				...state,
				status: {
					...state.status,
					isLoadingPosts: false,
					error: action.payload
				}
			};

		case `${LOAD_POSTS}_FULFILLED`:
			return {
				...state,
				posts: action.payload.data,
				status: {
					...state.status,
					isLoadingPosts: false,
					error: null
				}
			};

		default:
			return state;
	}
}

// Action Creators
export function loadPosts (filters) {
	return {
		type: LOAD_POSTS,
		payload: axios.get('memes', {
			params: {
				filters
			}
		})
	};
}
