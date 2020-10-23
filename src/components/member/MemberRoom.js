import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoItems from './VideoItems';
import VideoPlayer from './VideoPlayer';
import io from 'socket.io-client'
import { searchAPI } from '../../api/youtubeAPI';

let socket;
const ENDPOINT = 'localhost:5000';

function MemberRoom(props) {
  const roomId = props.match.params.id;

  //set initial state
  const [videos, setVideo] = useState([])
  const [selectedVideo, setSelectedVideo] = useState('')
  const [playPause, setPlayPause] = useState(false)

  const getSearch = async input => {
    const result = await searchAPI(input);
    setVideo(result);
  }

  // this should add selected video to a queue,
  // and have play video socket after we have a queue
  const handleSelectedVideo = (video) => {
    debugger;
    socket.emit('selectedVideo', { video, roomId });
  }

  // on initial connection
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit('joinRoom', roomId);

    // for unmount
    return () => {
      socket.emit('disconnect', roomId);
      socket.off();
    }
  }, [roomId])

  useEffect(() => {
    socket.on('setVideo', (videoId) => {
      setSelectedVideo(videoId);
    });
  }, [selectedVideo])

  const emitPlayPause = (togglePlayPause, roomId) => {
    socket.emit('playPauseVideo', { togglePlayPause, roomId });
  }

  useEffect(() => {
    socket.on('handleSocketPlayPause', (socketPlayPause) => {
      setPlayPause(socketPlayPause);
    });
  }, [playPause])



  return (
    <div className="member-room">
      <div className="search-bar ui segment">
        <SearchBar sendSearch={getSearch} />
        <VideoItems videos={videos} handleSelectedVideo={handleSelectedVideo} />
        <VideoPlayer videoId={selectedVideo} roomId={roomId} playPause={playPause} emitPlayPause={emitPlayPause} />
      </div>
    </div>
  );

}

export default MemberRoom;

