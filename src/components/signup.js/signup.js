import React, { useState } from 'react'
import classes from './signup.module.css'
import { Link } from 'react-router-dom'

function Signup() {
    const initialState = null;
    const [email, setEmail] = useState(initialState)
    const [adhaar, setAdhaar] = useState(initialState)
    const [name, setName] = useState(initialState)
    const [pass, setPassword] = useState(initialState)
    const [confirmPass, setConfirmPass] = useState(initialState)
    const [verification, setVerification] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();
        var data = {};

        if(pass === confirmPass){
            data = {
                email,
                adhaar,
                name,
                pass
            }
        }else{
            alert("passwords doesn't match")
        }
        console.log(data)
    }

    return (
        <div className={classes.majorContainer}>
            <div className={classes.contact}>
                <center>
                    {
                        verification?
                            <form className={classes.contactform} onSubmit={(e)=>{handleSubmit(e)}}>
                                <h4>Welcome! to Sehyog</h4>
                                <p>Verification Code</p>
                                <input type="text" placeholder="Verification Code"/>
                                <br />
                                <button className={classes.submit}>Signup</button>
                            </form>
                        :
                            <form className={classes.contactform} onSubmit={(e)=>{e.preventDefault();setVerification(true)}}>
                                <h4>Welcome! to Sehyog</h4>
                                <p>Adhaar Number</p>
                                <input type="text" placeholder="Adhaar" onChange={(e)=>{setAdhaar(e.target.value)}}/>
                                <p>Email</p>
                                <input type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
                                <p>name</p>
                                <input type="text" placeholder="Email" onChange={(e)=>{setName(e.target.value)}}/>
                                <p>Password</p>
                                <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                                <p>Confirm Password</p>
                                <input type="password" placeholder="Confirm Password" onChange={(e)=>{setConfirmPass(e.target.value)}}/>
                                <br />
                                <button className={classes.submit}>Next</button>
                            </form>
                    }
                    <Link to="/login">Already have an account? login</Link>
                </center>
            </div>
        </div>
    )
}

export default Signup
