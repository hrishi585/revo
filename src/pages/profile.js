import React from 'react'
import pro from '../assets/images/pro.png'

function Profile(){
    return(
        <div>
            <div className="profile">
                <img src={pro} alt="profile"/>
                <h3>Explorer</h3>
                <button>Follow</button>
            </div>
            <div className="count">
                <ul>
                    <li>
                        <h2>500</h2>
                        <h3>Followers</h3>
                    </li>
                    <li>
                        <h2>600</h2>
                        <h3>Following</h3>
                    </li>
                </ul>
            <p>Lorem ipsum dolor sit amet,, orci massa dapibus lectus, vel fringilla tellus urna vitae nulla. Nam tristique neque quis nulla tristique feugiat. Nunc ac odio ut tortor ornare rhoncus. Nullam lobortis, magna id viverra ultrices, est tellus suscipit est, sit amet hendrerit est arcu ut quam.</p>
            </div>
        </div>
    )
}

export default Profile;