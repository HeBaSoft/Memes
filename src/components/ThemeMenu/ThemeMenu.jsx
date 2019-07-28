import React from 'react';
import PropTypes from 'prop-types';

import style from './themeMenu.css';

class ThemeMenu extends React.PureComponent {
	constructor (props) {
		super(props);
		this.switchTheme = this.switchTheme.bind(this);
	}

	switchTheme (themeName) {
		if (themeName !== this.props.activeTheme) {
			this.props.setTheme(themeName);
		}
	}

	render () {
		const { availableThemes, activeTheme, isOpen } = this.props;

		if (!isOpen) {
			return null;
		}

		return (
			<div className={['box', style.themes].join(' ')}>
				<div className="buttons">
					{availableThemes.map((option) =>
						<a
							key={option}
							className={['button', 'is-fullwidth', option === activeTheme ? 'is-selected' : null].join(' ')}
							onClick={(e) => this.switchTheme(option)}>
							{option.charAt(0).toUpperCase() + option.slice(1)}
						</a>
					)}
				</div>
			</div>
		);
	}
}

ThemeMenu.propTypes = {
	activeTheme: PropTypes.string,
	availableThemes: PropTypes.arrayOf(PropTypes.string),
	isOpen: PropTypes.bool,
	setTheme: PropTypes.func
};

export default ThemeMenu;
