import React from 'react'
import back from '../assets/images/back.png'

function Task(){
    return(
        <div>
            <div className="top-bar">
                <img src={back} alt="back" />
                <input type="text"/>
            </div>
            <div className="task">
                <ul>
                    <li>
                        <input type="checkbox"/>
                        <label>Visit Birla mandir</label>
                        <p>50 points</p>
                    </li>
                    <li>
                        <input type="checkbox"/>
                        <label>Click picture near Charminar</label>
                        <p>50 points</p>
                    </li>
                    <li>
                        <input type="checkbox"/>
                        <label>Picture at Golkondafort</label>
                        <p>50 points</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Task