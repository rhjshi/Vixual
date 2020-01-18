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

    onSubmit = e => {
        e.preventDefault();
        this.props.sendSearch(this.state.input);
    }



    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <div className="ui inverted transparent icon input">
                    <i className="search icon"></i>
                    <input type="text" value={this.state.input} onChange={this.handleChange} placeholder="Search..."/>
                </div>
            </form>
        );
    }

}

export default SearchBar;