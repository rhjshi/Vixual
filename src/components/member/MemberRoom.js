import React from 'react';
import SearchBar from './SearchBar';
import "./Member.css";
import axios from 'axios';
import ResultListItem from './ResultListItem';

import socketIOClient from 'socket.io-client';


class MemberRoom extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params);
        this.state = {
            socket: socketIOClient("http://localhost:3000"),
            results: [{},{},{},{}]
        }
        this.state.socket.on('sendmsg', (q) => {
            console.log(`received ${q}`);
        })
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
        this.state.socket.emit('query', q);
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
            this.setState({
                results: response.data.tracks.items
            });
        }).catch(err => {
            // console.error(err);
        });
        
    }

    render(){
        let list = this.state.results.map((song, index) => {
            return <ResultListItem key={index} song={song}/>;
        });
        return(
            <div className="member-room">
                <div className="center-card">
                    
                    <div className="ui inverted segment">
                        <SearchBar sendSearch={this.getSearch}/>
                        <div className="ui inverted divider" />
                        <div className="ui inverted relaxed divided list">
                            {list}
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default MemberRoom;