import React from 'react';
import { Redirect } from 'react-router-dom';


class SearchBar extends React.Component{
    state = {
        input: ''
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
        return(
            <div className="ui icon input">
                <i className="search icon"></i>
                <input type="text" placeholder="Search..."/>
            </div>
        );
    }

}

export default SearchBar;