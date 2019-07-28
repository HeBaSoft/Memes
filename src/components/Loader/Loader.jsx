import React from 'react';
import PropTypes from 'prop-types';
import { BarLoader } from 'react-spinners';
import _ from 'lodash';

import style from './loader.css';

class Loader extends React.PureComponent {
	constructor (props) {
		super(props);

		this.state = {
			theme: props.activeTheme,
			loaderColor: this.getHighlightColor()
		};

		this.updateLoaderColor = _.debounce(this.updateLoaderColor, 32).bind(this);
	}

	getHighlightColor () {
		return getComputedStyle(document.documentElement).getPropertyValue('--app-highlight-color');
	}

	updateLoaderColor () {
		this.setState({
			theme: this.props.activeTheme,
			loaderColor: this.getHighlightColor()
		});
	}

	componentDidUpdate () {
		const { activeTheme } = this.props;

		if (this.state.theme !== activeTheme) {
			this.updateLoaderColor();
		}
	}

	render () {
		const { message, subtext, loading } = this.props;
		const { loaderColor } = this.state;

		return (
			<div className={style.info}>
				<BarLoader
					sizeUnit='px'
					size={150}
					color={loaderColor}
					loading={loading} />

				<div className={style.title}>{message}</div>
				<div className={style.subtext}>{subtext}</div>
			</div>
		);
	}
}

Loader.propTypes = {
	activeTheme: PropTypes.string,
	message: PropTypes.string,
	subtext: PropTypes.string,
	loading: PropTypes.bool
};

export default Loader;
