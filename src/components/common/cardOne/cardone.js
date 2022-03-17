import React from 'react'
import classes from './cardOne.module.css'
import CardGap from '../../../assets/common/cardGap.svg'
import Image1 from '../../../assets/common/image1.svg'

function cardone({ Heading, subline }) {
    return (
        <div className={classes.majorContainer}>
            <img src={Image1} className={classes.image}/>
            <div className={classes.content}>
                <h2>{Heading}</h2>
                <p>{subline}</p>

            </div>
            <img src={CardGap}  className={classes.carddesign}/>
        </div>
    )
}

export default cardone
