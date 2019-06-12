import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var VideoPlayerContainer = (state) => {
    return {
        video: state.currentVideo
    };
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(VideoPlayerContainer)(VideoPlayerContainer);
