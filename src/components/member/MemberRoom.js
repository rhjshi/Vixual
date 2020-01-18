import React from 'react';
import SearchBar from './SearchBar';
import "./Member.css";


class MemberRoom extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params);
    }
    
    render(){
        return(
            <div className="member-room">
                <div className="search-bar ui segment">
                    <SearchBar />
                </div>
                
            </div>
        );
    }
}

export default MemberRoom;