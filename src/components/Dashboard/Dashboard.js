import React from 'react'
import classes from './Dashboard.module.css'

import Cardone from '../common/cardOne/cardone'
import HospitalList from '../common/hospitalList/hospitalList'
import DoctorList from '../common/doctorList/doctorList'

function Dashboard() {
    return (
        <div className={classes.majorContainer}>
            <div className={classes.leftCol}>
                <div className={classes.cardHolder}>
                    <Cardone Heading={"ediagnosis"} subline={"Get your diagonosis virtually done."} />
                    <Cardone Heading={"Med History"} subline={"View your medical history."} />
                </div>
                <div className={classes.HospitalHolder}>
                    <HospitalList />
                </div>
            </div>
            <div className={classes.rightCol}>
                <div className={classes.adhaarHolder}>
                    <div className={classes.adhaar}>
                        <h4>Samaresh Samanta</h4>
                        <h4>18-08-2001</h4>
                        <h4>Male</h4>
                        <h2>918056676419</h2>
                    </div>
                </div>
                <div className={classes.doctorHolder}>
                    <DoctorList />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
