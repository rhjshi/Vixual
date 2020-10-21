import React from 'react';
import SearchBar from './SearchBar';
import "./Member.css";
import youtubeApi from '../youtube';
import ResultListItem from './ResultListItem';
import axios from 'axios';

import socketIOClient from 'socket.io-client';

class MemberRoom extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params);
        this.state = {
            socket: socketIOClient("http://localhost:3000"),
            results: []
        }
        this.state.socket.on('sendmsg', (q) => {
            console.log(`received ${q}`);
        })
    }

    

    getSearch = q => {
        youtubeApi.get('/search', { q })
        .then(response => {
            console.log('Received resp form YT API', response.data.items);
            this.setState({
                results: [] 
            })
            this.setState({
                results: response.data.items
            });
        }).catch(err => {
            console.error('Could not get YTApi', err);
        });

        this.state.socket.emit('query', q);
    }

    render(){
        let list = this.state.results.map((v, index) => {
            return <ResultListItem key={index} video={v}/>;
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