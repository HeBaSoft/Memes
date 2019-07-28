import React from 'react';
import LazyLoad from 'react-lazyload';
import Moment from 'react-moment';
import PropTypes from 'prop-types';

import style from './post.css';

const Post = ({ name, source, created, link, image }) => {
	return (
		<div className={style.post}>
			<div className="box">
				<article className="media">

					<div className="media-left">
						<figure className={['image', 'is-64x64', 'is-square'].join(' ')}>
							<img className={['is-rounded', style.avatar].join(' ')} src={source.icon} alt={source.id} />
						</figure>
					</div>

					<div className="media-content">
						<div className="content">
							<p>
								<span className={style.author}>
									{source.id.toLowerCase()}
								</span>

								<small className={style.created}>
									<Moment unix local fromNow>{created}</Moment>
								</small>

								<div className={style.title}>
									{name}
								</div>

								<LazyLoad
									height={300}
									offset={256}
									once>

									<div className={style.content}>
										<img src={image} alt={name} />
									</div>
								</LazyLoad>
							</p>
						</div>

						<nav className="level is-mobile">
							<div className="level-left">
								<a className="level-item" aria-label="source" href={link}>
									<span className={['icon', 'is-small', style.icon, style.link].join(' ')} />
								</a>
							</div>
						</nav>
					</div>

				</article>
			</div>
		</div>
	);
};

Post.propTypes = {
	name: PropTypes.string,
	link: PropTypes.url,
	image: PropTypes.url,
	created: PropTypes.number,
	source: PropTypes.shape({
		url: PropTypes.url,
		id: PropTypes.string,
		icon: PropTypes.url
	})
};

export default Post;
