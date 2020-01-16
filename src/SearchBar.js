import React from 'react';
import { Redirect } from 'react-router-dom';


class SearchBar extends React.Component{
    state = {
        redirect: false
    }

    changeURL = e => {
        e.preventDefault();
        console.log(this.props.history);
        console.log(this.props.params);
        // this.props.history.push("/yeet/more");
        // this.setState({
        //     redirect: true
        // });
            
    }


    render(){
        if(this.state.redirect){
            return <Redirect to="/host"></Redirect>
        }
        return(<button onClick={this.changeURL}>Create Room</button>);
    }

}

export default SearchBar;