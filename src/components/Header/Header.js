import React from 'react'
import classes from './Header.module.css'

function Header() {
    return (
        <div className={classes.majorContainer}>
           <div className={classes.btnHolder}>
                <div className={classes.button}>
                    <p>MEDICAL REPORT</p>
                </div>
           </div>
           <div className={classes.profileDetails}>
               <div className={classes.profImg}>
               </div>
               <div className={classes.nameContainer}>
                    <p>Samaresh Samanta</p>
               </div>
           </div>
        </div>
    )
}

export default Header
