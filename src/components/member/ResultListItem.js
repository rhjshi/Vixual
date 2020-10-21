import React from "react";
import "./Member.css"


// class ResultListItem extends React.Component {
//     render (){
const ResultListItem = props => {  
      return(
          <div className="item">
            <img className="ui image thumbnail-img" src={props.video.snippet.thumbnails.medium.url} alt="thumbnail"/>
            <div className="content">
                <div className="header">
                    {props.video.snippet.title}
                </div>
            </div>
          </div>  
        );
      }
//     }  
// }

export default ResultListItem;