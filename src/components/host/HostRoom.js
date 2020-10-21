import React from 'react';
import "./Host.css"
import Youtube from 'react-youtube';

class HostRoom extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            queue: [],
            roomID: this.props.match.params.id
        }
    }

    onVideoEnd = () => {
        console.log("Eat asshole");
    }


    render(){
        return (
            <div className="Main">
                {/* <iframe src="https://open.spotify.com/embed/album/1ubczeMvCrPHbSEjgfu4a7" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
                <Youtube videoId="l2ToW0IDG1U"
                    onEnd={this.onVideoEnd}
                />
            </div> 
        );
    }
}

export default HostRoom;