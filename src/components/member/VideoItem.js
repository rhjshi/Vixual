import React, { Component } from 'react';

class VideoItem extends Component {
    render() {
        console.log(this.props.videoitem.snippet)
        return (
            <div>
                <p> {this.props.videoitem.snippet.title} </p>
                <img src={this.props.videoitem.snippet.thumbnails.medium.url}/>
            </div>
        );
    }
}

export default VideoItem;