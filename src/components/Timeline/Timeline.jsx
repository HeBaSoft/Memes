import React from 'react';
import PropTypes from 'prop-types';

import style from './timeline.css';

import Post from 'components/Post';
import Loader from 'components/Loader';

const Timeline = ({ status, posts }) => {
	return (
		<div className={style.timeline}>
			{
				status.isLoadingPosts &&
				<Loader
					message="Loading the hottest memes internet has to offer"
					subtext="This might take a while"
					loading={true} />
			}

			{
				status.error &&
				<Loader
					message="An error has occured while loading posts"
					subtext={status.error.message}
					loading={false} />
			}

			{
				posts.map((post, index) =>
					<Post
						key={index}
						{...post} />
				)
			}
		</div>
	);
};

Timeline.propTypes = {
	actions: PropTypes.object,
	posts: PropTypes.array,
	status: PropTypes.object
};

export default Timeline;
