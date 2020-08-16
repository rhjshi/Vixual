import React, { Component } from 'react';

class VideoItem extends Component {
    handleClick = (e) => {
        this.props.handleSelectedVideo(this.props.videoitem);
    };

    render() {
        return (
            <div onClick={this.handleClick}>
                <p> {this.props.videoitem.snippet.title} </p>
                <img src={this.props.videoitem.snippet.thumbnails.medium.url} alt={"no thumbnail"}/>
            </div>
        );
    }
}

export default VideoItem;