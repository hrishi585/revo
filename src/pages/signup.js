import React from 'react'

function Signup(){
    return(
        <div className="header">
            <h1>Sign Up</h1>
            <div className="sign-form">
                <div className="name">
                    <input type="text" placeholder="First name" name="fname" required/>
                    <input type="text" placeholder="Last name" name="lname" required/>
                </div>
                <input type="email" placeholder="Email id" name="email" required/> <br/>
                <input type="password" placeholder="Enter password" name="password" required/> <br/>
                <input type="password" placeholder="Re-enter password" name="password" required/> <br/>
                <button>Sign up</button>
                <p>Already have an account? <a href=""> Log in</a></p>
            </div>
        </div>
    )
}

export default Signup