import React from 'react';
import ScrollToTop from 'react-scroll-up';

import style from './returnButton.css';

const ReturnButton = () => {
	return (
		<ScrollToTop showUnder={160}>
			<div className={style.return}>
				<svg width="16" height="16" viewBox="0 0 16 16">
					<path
						className={style.background}
						d="M 8.0000286,-4.1005889e-8 C 3.6000287,-4.1005889e-8 -1.8100592e-7,3.6000284 -1.8100592e-7,8.0000286 -1.8100592e-7,12.400027 3.6000287,16.000056 8.0000286,16.000056 c 4.3999964,0 8.0000254,-3.600029 8.0000254,-8.0000274 C 16.000054,3.6000284 12.400025,-4.100589e-8 8.0000286,-4.1005889e-8 Z M 8.9999676,6.4001254 c -5.9999789,193.7332346 -2.9999899,96.8666146 0,0 z" />
					<path
						className={style.foreground}
						d="M16 8c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8zM7 6.4l-1.8 1.8-1.4-1.4 4.2-4.2 4.2 4.2-1.4 1.4-1.8-1.8v6.6h-2v-6.6z" />
				</svg>
			</div>
		</ScrollToTop>
	);
};

export default ReturnButton;
