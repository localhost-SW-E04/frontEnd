import React, { useEffect, useState } from 'react'
import classes from './hospitalList.module.css'
import CardGap from '../../../assets/common/cardGap.svg'
import Image1 from '../../../assets/common/image1.svg'
import ModalCtn from '../modal/modal';

import StarRatings from 'react-star-ratings';
import axios from 'axios';
import { API_URI } from '../../../apiEndPoint';


function Hospital({details}){

    const [showModal, setShowModal] = useState(false)

    const [beds, setBeds] = useState(details.bed)

    return(
        <div className={classes.majorCardContainer} onClick={()=>(!showModal) && setShowModal(true)}>
            <ModalCtn showModal={showModal} setShowModal={setShowModal} header={"Beds Available"}>
                    <div className={classes.showCards}>
                        {
                            beds && 
                            beds.map((b)=>
                                <div className={classes.bedCard}>
                                    <p>{ b.type }</p>
                                    <h3>{ b.number }</h3>
                                </div>
                            )
                        }
                    </div>
            </ModalCtn>
            <div  className={classes.nameLogo}>
                <img src={Image1} className={classes.image}/>
                <div className={classes.content}>
                    <h3>{ details.name }</h3>
                    <p>{ details.desc }</p>
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

function HospitalList() {

    const [hospitals, setHospitals] = useState(null)

    useEffect(()=>{
        axios.get(`${API_URI}/hospital/`)
            .then(res=>{
                setHospitals(res.data);
            })
            .catch(err=>{
                alert(err)
            })
    },[])

    return (
        <div className={classes.majorContainer}>
            <div className={classes.header}>
                <h1>Hospitals</h1>
                <input type="text" placeholder="Search" />
            </div>
            <div className={classes.List}>
                {
                    hospitals &&
                    hospitals.map(h=>
                        <Hospital details={h}/>
                    )
                }
            </div>
        </div>
    )
}

export default HospitalList
