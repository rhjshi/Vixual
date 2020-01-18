import React from "react";
import "./Member.css"


class ResultListItem extends React.Component {
    render (){
        return(
          <div className="item">
            <i className ="music icon"/>
            <div className="content">
                <div className="header">
                    SongTitle
                </div>
            </div>
          </div>  
        );
    }  
}

export default ResultListItem;