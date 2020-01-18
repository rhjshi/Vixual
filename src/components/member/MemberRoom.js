import React from 'react';
import SearchBar from './SearchBar';

class MemberRoom extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params);
    }
    
    render(){
        return(
            
                <SearchBar />


        );
    }
}

export default MemberRoom;