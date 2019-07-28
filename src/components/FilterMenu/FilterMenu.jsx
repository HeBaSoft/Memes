import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import style from './filter.css';

export default class Filter extends React.PureComponent {
	constructor (props) {
		super(props);

		this.toggleFilter = this.toggleFilter.bind(this);
		this.applyFilters = _.debounce(this.applyFilters, 1000).bind(this);
	}

	componentDidMount () {
		this.props.actions.loadFilterOptions();
		this.applyFilters();
	}

	toggleFilter (tagName) {
		this.props.actions.toggleFilter(tagName);
		this.applyFilters();
	}

	applyFilters () {
		const { actions, activeFilters } = this.props;
		actions.applyFilters(activeFilters);
	}

	render () {
		const { filterTags, activeFilters, isOpen } = this.props;

		// Render only if there are tags to display
		if (!isOpen || filterTags.length === 0) {
			return null;
		}

		return (
			<div className={['box', style.filter].join(' ')}>
				<div className="tags">
					{filterTags.map((tagName) => {
						const isActive = activeFilters.includes(tagName);
						const stateClass = isActive ? style.active : style.inactive;

						return (
							<span
								key={tagName}
								className={['tag', stateClass, style.tag].join(' ')}
								onClick={(e) => this.toggleFilter(tagName, e)}>
								{tagName}
							</span>
						);
					})}
				</div>
			</div>
		);
	}
}

Filter.propTypes = {
	actions: PropTypes.object,
	filterTags: PropTypes.arrayOf(PropTypes.string),
	activeFilters: PropTypes.arrayOf(PropTypes.string),
	isOpen: PropTypes.bool
};
