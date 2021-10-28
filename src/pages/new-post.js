import React from 'react'
import hyd from '../assets/images/hyd.jpg'
import pro from '../assets/images/pro2.png'
import comment from '../assets/images/comment 1.png'
import share from '../assets/images/share 2.png'
import view from '../assets/images/view.png'

function Post(){
    return(
        <div className="big">
            <div className="post">
            <div className="user-det">
               <img className="pic" src={pro} alt="profile pic"/>
               <h5>Hrishikesh</h5>
               <h6>Hyderabad</h6>
            </div>
            <img src={hyd} alt="hyd"/>
            <div className="options">
               <img src={view} alt="view" />
               <img src={comment} />
               <img src={share} />
            </div>
            <div className="comments">
               <p>Great place to visit.</p>
            </div>
         </div>
        </div>
    )
}

export default Post