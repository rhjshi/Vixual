import React, { Component } from 'react';
import VideoItem from './VideoItem'

class VideoItems extends Component {
    render() {
        console.log(this.props.videos)
        return this.props.videos.map((video) => (
            <VideoItem key={video.id.videoId} videoitem={video}/>
        ));
    }
}

export default VideoItems;