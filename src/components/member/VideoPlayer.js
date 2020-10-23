import React, { Component } from 'react';
import ReactPlayer from "react-player"

class VideoPlayer extends Component {
    //need to handle when someone joins, need to display and start playing the video
    //need to handle when skipping to a new time

    handleOnPlay = () => {
        this.props.emitPlayPause(true,this.props.roomId);
    }
    handleOnPause = () => {
        this.props.emitPlayPause(false,this.props.roomId);
    }
 
    render() {
        return (
            <div>
                {/* {(this.props.videoId !== '')  */}
                    ? <ReactPlayer url={`https://www.youtube.com/watch?v=Y-ANYwGYBjs`} 
                    // ? <ReactPlayer url={`https://www.youtube.com/watch?v=${this.props.videoId}`} 
                    rel={0} 
                        controls={true}
                        playing={this.props.playPause}
                        onPlay={this.handleOnPlay}
                        onPause={this.handleOnPause}
                        onBuffer={this.handleOnPause}
                        onBufferEnd={this.handleOnPlay}
                        onError={(e) => {console.log(e)}}
                        />
                    : <p>Select A Video</p>
                }
            </div>
        );
    }
}

export default VideoPlayer;