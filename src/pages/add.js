import React from 'react'

function Add(){
    return(
        <div className="add">
            <div>
                <h1>Add new post:</h1>
            </div>
            <div>
                <label>Choose destination:</label> <br/>
                <select>
                    <option>Hyderabad</option>
                    <option>Chennai</option>
                    <option>Bangalore</option>
                    <option>Mumbai</option>
                    <option>Kolakata</option>
                    <option>Pune</option>
                    <option>Delhi</option>
                    <option>Lucknow</option>
                </select> <br/>
                <label>Add images</label> <br/>
                <input type="file" /> 
                <label>Add description:</label>
                <input type="text" /> <br/>
                <a href="new-post"><button>Post!</button></a>
            </div>
        </div>
    )
}

export default Add