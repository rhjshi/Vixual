import React from 'react';
import socketIO from 'socket.io-client';
import "./App.css";
import reactLogo from "../logo.svg";

// note socket io will 'connect' everytime you make socketIO call
const ENDPOINT = (process.env.BASE_URL + process.env.PORT) || 'localhost:4001';
const socket = socketIO(ENDPOINT);


const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// have component that makes callback for roomId and stuff, don't use redirect use link
const genId = length => {
	let result = '';
	let charLength = CHARS.length;
	for (let i = 0; i < length; i++ ) {
		result += CHARS.charAt(Math.floor(Math.random() * charLength));
	}
	return result;
}

class Home extends React.Component{

	createRoom = e => {
		e.preventDefault();
		// make callback to make sure this key is unique
		let roomId = genId(6);
		socket.emit('create_room', { 
			msg: 'test123'
		});
		// this only works if component is passed in as prop to <Route/>
		this.props.history.push(`/host/${roomId}`); 
	}
	
	joinRoom = e => {
		e.preventDefault();
		this.props.history.push('/join');
	}

	render(){
		return(
			<div className="Home">
				<div className="ui card">
					<div className="content">
						Welcome To Rhythm
					</div>
					<div>
						<img className="App-logo" src={reactLogo} alt="logo"/>
					</div>
					<div className="content">
						<button className="ui button" onClick={this.createRoom}>
							Create a room
						</button>  
					</div>
					<div className="content">
						<button className="ui button" onClick={this.joinRoom}>
							Join a room
						</button>
					</div>    
				</div>
			</div>
		);
	}
}

export default Home;