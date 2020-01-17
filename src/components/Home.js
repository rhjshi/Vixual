import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import "./App.css";
import reactLogo from "../logo.svg";

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            characters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
            createRoom: false,
            roomId: null
        };
    }
    // have component that makes callback for roomId and stuff, don't use redirect use link
    genId(length) {
        let result = '';
        let charLength = this.state.characters.length;
        for (let i = 0; i < length; i++ ) {
            result += this.state.characters.charAt(Math.floor(Math.random() * charLength));
        }
        return result;
    }


    createRoom = (e) => {
        e.preventDefault();
        let roomId = this.genId(6);
        // make callback to make sure this key is unique
        // ... 
        this.props.history.push("/host/" + roomId); // this only works if component is passed in as prop to <Route/>
    }
    
    joinRoom = (e) => {
        e.preventDefault();
    }

    render(){
        if(!this.state.joinRoom && this.state.createRoom){
            return <Redirect to={"/host/"+ this.state.roomId}/>;
        }
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
                        <button className="ui button" onClick={this.createRoom}>Create a room</button>  
                    </div>
                    <div className="content">
                        <Link to="/join">
                            <button className="ui button" >Join a room</button>
                        </Link>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Home;