import React, { useState } from 'react'
import classes from './login.module.css'
import { Link } from 'react-router-dom'

function Login() {

    const [adhaar, setAdhaar] = useState(null)
    const [password, setPassword] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            adhaar,
            password
        }
        console.log(data)
    }



    return (
        <div className={classes.majorContainer}>
            <div className={classes.contact}>
                <center>
                    <form className={classes.contactform} onSubmit={(e)=>{handleSubmit(e)}}>
                        <h2>Welcome!</h2>
                        <p>Adhaar Number</p>
                        <input type="adhaar" placeholder="Adhaar" onChange={(e)=>{setAdhaar(e.target.value)}}/>
                        <p>Password</p>
                        <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                        <br />
                        <button className={classes.submit} type="submit">Login</button>
                    </form>
                    <Link to="/signup">Don't have an account? signup</Link>
                </center>
            </div>
        </div>
    )
}

export default Login
