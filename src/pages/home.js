import React from 'react'
import hyd from '../assets/images/hyd.jpg'
import comment from '../assets/images/comment 1.png'
import share from '../assets/images/share 2.png'
import view from '../assets/images/view.png'

function Home(){
   return(
      <div className="left">
         <div className="top-logo">
            <p>Rove</p>
         </div>
         <div className="search">
            <input type="text" />
         </div>
         <div className="post">
            <div className="user-det">
               <h5>Username</h5>
               <h6>Location</h6>
            </div>
            <img src={hyd} alt="hyd"/>
            <div className="options">
               <img src={view} alt="view" />
               <img src={comment} />
               <img src={share} />
            </div>
            <div className="comments">
               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
         </div>
         <div className="post">
            <div className="user-det">
               <h5>Username</h5>
               <h6>Location</h6>
            </div>
            <img src={hyd} alt="hyd"/>
            <div className="options">
               <img src={view} alt="view" />
               <img src={comment} />
               <img src={share} />
            </div>
            <div className="comments">
               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
         </div>
         <div className="post">
            <div className="user-det">
               <h5>Username</h5>
               <h6>Location</h6>
            </div>
            <img src={hyd} alt="hyd"/>
            <div className="options">
               <img src={view} alt="view" />
               <img src={comment} />
               <img src={share} />
            </div>
            <div className="comments">
               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
            </div>
         </div>
      </div>
   )
}

export default Home
