import React from 'react';


class SearchBar extends React.Component{
    state = {
        input: ''
    }

    handleChange = e => {
        this.setState({
            input: e.target.value
        }); 
    }


    render(){
        return(
            <div className="ui icon input">
                <i className="search icon"></i>
                <input type="text" value={this.state.input} onChange={this.handleChange} placeholder="Search..."/>
            </div>
        );
    }

}

export default SearchBar;