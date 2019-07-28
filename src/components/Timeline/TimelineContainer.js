import { connect } from 'react-redux';

import Timeline from './Timeline.jsx';

const mapStateToProps = (state) => {
	return {
		posts: state.timeline.posts,
		status: state.timeline.status
	};
};

export default connect(mapStateToProps)(Timeline);
