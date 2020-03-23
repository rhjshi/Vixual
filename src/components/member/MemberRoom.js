import React from 'react';
import axios from 'axios';
import socketIO from 'socket.io-client';
import SearchBar from './SearchBar';

// note socket io will 'connect' everytime you make socketIO call
const ENDPOINT = (process.env.BASE_URL + process.env.PORT) || 'localhost:4001';

const KEY = 'BQDA0jDvVR8Qps9vOiKeDc53AaJgicDQu22pWffayiEWk9DJyUG9uDrlGeBPbcT4GHnm94fJqyVufFKXkrEbQfEPQdz5RVQP0rnPdgx7RHaO3Ol2Q_jE5_7V6mlDfboDrGZXq6Tqwwoy-N0';
const api = axios.create({
	baseURL: 'https://api.spotify.com/',
	headers: {
		'Authorization': 'Bearer '+ KEY,
	}
});

class MemberRoom extends React.Component{
	constructor(props){
		super(props);
		console.log(this.props.match.params);
	}

	socket = socketIO(ENDPOINT); // make it once and use it

	getSearch = q => {
		this.socket.emit('yeet', {
			tracks: 'asdf'
		});
		console.log('afsdfasd')
		// api.get('v1/search/', {
		// 	params:{
		// 		q,
		// 		type: 'track',
		// 		market: 'US',
		// 		limit: 10,
		// 		offset: 0
		// 	}
		// }).then(response => {
		// 	console.log('Received resp form Spot API');
		// 	console.log(response.data.tracks.items);
		// }).catch(err => {
		// 	console.error(err);
		// });
		
	}

	render(){
		return(
			<div className="member-room">
				<div className="search-bar ui segment">
					<SearchBar onSubmit={this.getSearch}/>
				</div>
			</div>
		);
	}
}

export default MemberRoom;