import React from 'react';

class MemberRoom extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params);
    }
    
    render(){
        return null;
    }
}

export default MemberRoom