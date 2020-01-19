import React from 'react';
import SearchBar from './SearchBar';
import "./Member.css";
import axios from 'axios';

import socketIOClient from 'socket.io-client';


class MemberRoom extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params);
        this.state = {
            socket: socketIOClient("http://localhost:3000")
        }
    }

    /*componentDidMount() {
        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("test", data => this.setState({ response: data }));
    }*/

    KEY = 'BQDA0jDvVR8Qps9vOiKeDc53AaJgicDQu22pWffayiEWk9DJyUG9uDrlGeBPbcT4GHnm94fJqyVufFKXkrEbQfEPQdz5RVQP0rnPdgx7RHaO3Ol2Q_jE5_7V6mlDfboDrGZXq6Tqwwoy-N0';

    api = axios.create({
        baseURL: 'https://api.spotify.com/',
        headers: {
            'Authorization': 'Bearer '+this.KEY,
    	}

    });

    getSearch = q => {
        this.state.socket.emit('query', 'test andy');
        this.api.get('v1/search/', {
            params:{
                q,
                type: 'track',
                market: 'US',
                limit: 10,
                offset: 0
            }
        }).then(response => {
            console.log('Received resp form Spot API');
            console.log(response.data.tracks.items);
        }).catch(err => {
            console.error(err);
        });
        
    }

    render(){
        return(
            <div className="member-room">
                <div className="search-bar ui segment">
                    <SearchBar sendSearch={this.getSearch}/>
                </div>
                
            </div>
        );
    }
}

export default MemberRoom;