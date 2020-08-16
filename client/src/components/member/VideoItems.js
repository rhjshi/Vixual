import React, { Component } from 'react';
import VideoItem from './VideoItem'

class VideoItems extends Component {

    render() {
        return this.props.videos.map((video) => (
            <VideoItem key={video.id.videoId} videoitem={video} handleSelectedVideo={this.props.handleSelectedVideo}/>
        ));
    }
}

export default VideoItems;