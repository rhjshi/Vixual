import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import "./Member.css";
import axios from 'axios';
import VideoItems from './VideoItems';
import VideoPlayer from './VideoPlayer';
import io from 'socket.io-client'
//import { use } from '../../../../server/router';
let socket;

function MemberRoom(props){
    const roomId = props.match.params.id;

    //set initial state
    const [videos, setVideo] = useState([])
    const [selectedVideo, setSelectedVideo] = useState('')
    const [playPause, setPlayPause] = useState(false)

    const ENDPOINT = 'localhost:5000';

    const KEY = "AIzaSyAaRcZkRc1u3fSFFPN2GQTWjuYc7pDIQtw";

    const getSearch = (input) => {
        //console.log(input)
        axios.get("https://www.googleapis.com/youtube/v3/search", {
            params: {
              part: "snippet",
              maxResults: 5,
              key: KEY,
              type: "video",
              q: input
            },
          }
        ).then(response => {
            // console.log('Received response form Youtube API');
            // console.log(response.data.items);
            setVideo(response.data.items);
        }).catch(err => {
            console.error(err);
        });
        ;
    }

    //this should add selected video to a queue,
    //and have play video socket after we have a queue
    const handleSelectedVideo = (video) => {
        socket.emit('selectedVideo', {video, roomId});
    }

    //on initial connection
    useEffect(() => {
        socket = io(ENDPOINT);
        socket.emit('joinRoom', roomId);

        //for unmount
        return () => {
            socket.emit('disconnect', roomId);
            socket.off();
        }
    }, [ENDPOINT, roomId])

    useEffect(() => {
        socket.on('setVideo', (videoId) => {
            setSelectedVideo(videoId);
        });
    }, [selectedVideo])

    const emitPlayPause = (togglePlayPause, roomId) => {
        socket.emit('playPauseVideo', {togglePlayPause, roomId});
    }

    useEffect(() => {
        socket.on('handleSocketPlayPause', (socketPlayPause) => {
            setPlayPause(socketPlayPause);
        });
    }, [playPause])



    return(
        <div className="member-room">
            <div className="search-bar ui segment">
                <SearchBar sendSearch={getSearch}/>
                <VideoItems videos={videos} handleSelectedVideo={handleSelectedVideo}/>
                <VideoPlayer videoId={selectedVideo} roomId={roomId} playPause={playPause} emitPlayPause={emitPlayPause}/>
            </div>
        </div>
    );

}

export default MemberRoom;

