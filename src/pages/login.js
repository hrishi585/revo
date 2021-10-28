import React from 'react'

function Login(){
    return(
        <div>
            <div className="login">
                <h1>Login</h1>
                <input placeholder="Enter your mail id" type="email" name="email" required/> <br/>
                <input placeholder="Enter password" type="password" name="password" required/> <br/>
                <a href="">Forgot password</a> <br/>
                <button className="log-btn">Login</button> <br/>
                <a href="">Create new account</a>
            </div>
        </div>

    )
}

export default Login;