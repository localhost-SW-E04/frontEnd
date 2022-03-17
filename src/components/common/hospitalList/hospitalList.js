import React, { useState } from 'react'
import classes from './hospitalList.module.css'
import CardGap from '../../../assets/common/cardGap.svg'
import Image1 from '../../../assets/common/image1.svg'
import ModalCtn from '../modal/modal';

import StarRatings from 'react-star-ratings';


function Hospital(){

    const [showModal, setShowModal] = useState(false)

    return(
        <div className={classes.majorCardContainer} onClick={()=>(!showModal) && setShowModal(true)}>
        <ModalCtn showModal={showModal} setShowModal={setShowModal} header={"Beds Available"}>
                <div className={classes.showCards}>
                    <div className={classes.bedCard}>
                        <p>Ventilators</p>
                        <h3>27</h3>
                    </div>
                    <div className={classes.bedCard}>
                        <p>Ventilators</p>
                        <h3>27</h3>
                    </div>
                    <div className={classes.bedCard}>
                        <p>Ventilators</p>
                        <h3>27</h3>
                    </div>
                    <div className={classes.bedCard}>
                        <p>Ventilators</p>
                        <h3>27</h3>
                    </div>
                    <div className={classes.bedCard}>
                        <p>Ventilators</p>
                        <h3>27</h3>
                    </div>
                    <div className={classes.bedCard}>
                        <p>Ventilators</p>
                        <h3>27</h3>
                    </div>
                    <div className={classes.bedCard}>
                        <p>Ventilators</p>
                        <h3>27</h3>
                    </div>
                    <div className={classes.bedCard}>
                        <p>Ventilators</p>
                        <h3>27</h3>
                    </div>
                    <div className={classes.bedCard}>
                        <p>Ventilators</p>
                        <h3>27</h3>
                    </div>
                    <div className={classes.bedCard}>
                        <p>Ventilators</p>
                        <h3>27</h3>
                    </div>
                    <div className={classes.bedCard}>
                        <p>Ventilators</p>
                        <h3>27</h3>
                    </div>
                </div>
        </ModalCtn>
            <div  className={classes.nameLogo}>
                <img src={Image1} className={classes.image}/>
                <div className={classes.content}>
                    <h3>Apollo Hospital</h3>
                    <p>Apollo Hospitals is the leading multispecialty health care unit with best in class treatments for cancer, knee replacements, liver transplant, heart etc</p>
                    <p><b>look for availability</b></p>
                </div>
            </div>
            <div className={classes.ratings}>
                <div className={classes.contentRatings}>
                    <StarRatings
                        rating={3.5}
                        starDimension="16px"
                        starSpacing="3px"
                        starRatedColor="orange"
                    />
                    <p>3.5</p>
                </div>
                <img src={CardGap}  className={classes.carddesign}/>
            </div>
        </div>
    )
}

function hospitalList({fulscreen = false}) {
    return (
        <div className={classes.majorContainer}>
            <div className={classes.header}>
                <h1>Hospitals</h1>
                <input type="text" placeholder="Search" />
            </div>
            <div className={classes.List}>
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
                <Hospital />
            </div>
        </div>
    )
}

export default hospitalList
