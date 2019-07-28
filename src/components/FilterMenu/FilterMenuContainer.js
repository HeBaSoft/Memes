import { connect } from 'react-redux';

import { loadFilterOptions, toggleFilter } from 'ducks/config';
import { loadPosts } from 'ducks/timeline';
import FilterMenu from './FilterMenu.jsx';

const mapStateToProps = (state) => {
	const filter = state.config.filter;

	return {
		filterTags: filter.options,
		activeFilters: filter.active,
		isOpen: filter.isOpen
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: {
			loadFilterOptions: () => dispatch(loadFilterOptions()),
			toggleFilter: (tagName) => dispatch(toggleFilter(tagName)),
			applyFilters: (activeFilters) => dispatch(loadPosts(activeFilters))
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterMenu);
