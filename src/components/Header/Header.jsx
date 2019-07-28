import React from 'react';
import PropTypes from 'prop-types';
import Headroom from 'react-headroom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faPalette } from '@fortawesome/free-solid-svg-icons';

import FilterMenu from 'components/FilterMenu';
import ThemeMenu from 'components/ThemeMenu';
import style from './header.css';

const Header = ({isFilterMenuOpen, isThemeMenuOpen, toggleFilterMenu, toggleThemeMenu}) => {
	return (
		<Headroom>
			<div className={style.header}>
				<span className={style.title}>
					The <span className={style.highlight}>hottest</span> memes of internet
				</span>

				<div className={style.submenu}>
					<div className='buttons'>
						<a
							className={['button', isFilterMenuOpen ? 'is-selected' : null].join(' ')}
							onClick={toggleFilterMenu}>
							<FontAwesomeIcon icon={faTags} />
							Filters
						</a>

						<a
							className={['button', isThemeMenuOpen ? 'is-selected' : null].join(' ')}
							onClick={toggleThemeMenu}>
							<FontAwesomeIcon icon={faPalette} />
							Theme
						</a>
					</div>
				</div>
			</div>

			<FilterMenu />
			<ThemeMenu />
		</Headroom>
	);
};

Header.propTypes = {
	activeTheme: PropTypes.string,
	availableThemes: PropTypes.arrayOf(PropTypes.string),
	isThemeMenuOpen: PropTypes.bool,
	isFilterMenuOpen: PropTypes.bool,
	setTheme: PropTypes.func,
	toggleThemeMenu: PropTypes.func,
	toggleFilterMenu: PropTypes.func
};

export default Header;
