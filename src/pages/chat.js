import React from 'react'
import back from '../assets/images/back.png'
import pro from '../assets/images/pro.png'

function Chat(){
    return(
        <div>
            <div className="top-bar">
                <img src={back} alt="back" />
                <input type="text"/>
            </div>
            <div className="chats">
                <div className="ind">
                    <img src={pro} alt="pro"/>
                    <h5>Name</h5>
                    <p>Message</p>
                </div>
                <div className="ind">
                    <img src={pro} alt="pro"/>
                    <h5>Name</h5>
                    <p>Message</p>
                </div>
                <div className="ind">
                    <img src={pro} alt="pro"/>
                    <h5>Name</h5>
                    <p>Message</p>
                </div>
            </div>
        </div>
    )
}

export default Chat