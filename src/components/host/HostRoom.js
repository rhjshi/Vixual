import React from 'react';
import "./Host.css"


class HostRoom extends React.Component{
	render(){
		return (
			<div className="Main">
				{/* <iframe src="https://open.spotify.com/embed/album/1ubczeMvCrPHbSEjgfu4a7" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
				<iframe src="https://open.spotify.com/embed/track/07Oz5StQ7GRoygNLaXs2pd" width="400" height="480" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
			</div> 
		);
	}
}

export default HostRoom;