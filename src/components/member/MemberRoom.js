import React from 'react';
import SearchBar from './SearchBar';
import "./Member.css";
import axios from 'axios';
import VideoItems from './VideoItems';


class MemberRoom extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params);
    }

    state = {
        videos: []
    }

    KEY = "AIzaSyAaRcZkRc1u3fSFFPN2GQTWjuYc7pDIQtw";

    getSearch = input => {
        console.log(input)
        axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
              part: "snippet",
              maxResults: 5,
              key: this.KEY,
              type: "video",
              q: input
            },
          }
        ).then(response => {
            console.log('Received response form Youtube API');
            console.log(response.data.items);
            this.setState({videos: response.data.items});
        }).catch(err => {
            console.error(err);
        });
        ;
    }

    render(){
        return(
            <div className="member-room">
                <div className="search-bar ui segment">
                    <SearchBar sendSearch={this.getSearch}/>
                    <VideoItems videos={this.state.videos}/>
                </div>
                
            </div>
        );
    }
}

export default MemberRoom;