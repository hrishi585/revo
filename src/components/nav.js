import React from 'react'
import profile from '../assets/images/profile 1.png'
import home from '../assets/images/home 1.png'
import chat from '../assets/images/chat 1.png'
import add from '../assets/images/Group 14.png'
import reward from '../assets/images/reward 2.png'


function Nav(){
    return(
        <div>
            <div className="nav-bar">
                <ul className="bottom-bar">
                    <li><img src={home} alt="home"/></li>
                    <li><img src={reward} alt="reward" /></li>
                    <li><img src={add} alt="add" /></li>
                    <li><img src={chat} alt="chat" /></li>
                    <li><img src={profile} alt="profile" /></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;