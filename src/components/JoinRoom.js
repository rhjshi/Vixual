import React from 'react';
import "./App.css";


class JoinRoom extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    onEnter = e => {
        e.preventDefault();
        // do some call back to make sure the room exists
        // ... if good
        this.props.history.push(`/join/${this.state.inputValue}`);
    }
    onInputChange = e => {
        this.setState({
            inputValue: e.target.value
        });
    }

    render(){
        return (
            <div className="Home">
                 <div className="ui card">
                    <div className="content">
                    <h3 className="ui header">Enter Room Key</h3>
                        <form onSubmit={this.onEnter}>
                            <div className="ui left icon input">
                                <input type="text" placeholder="join a room..." value={this.state.inputValue} onChange={this.onInputChange}/>
                                <i className="users icon"></i>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default JoinRoom;