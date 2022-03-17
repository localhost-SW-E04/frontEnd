import React, { useState } from 'react'
import classes from "./Navigation.module.css"

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'

import { privateRoutes, publicRoutes } from './routes.constant'



function Navigation() {

    const [isLoggedIn, setIsLoggedIn] = useState(true)


    return (
        <BrowserRouter>
            {
                isLoggedIn?
                    <div className={classes.majorContainer}>
                        <div className={classes.navbar}>
                            <Navbar />
                        </div>
                        <div className={classes.main}>
                            <Header />
                            <Routes>
                                {
                                    privateRoutes.map(r=>
                                        <Route exact path={r.path} element={r.components} />    
                                    )
                                }
                                <Route path="*" element={<Navigate to="/dashboard"/>} />
                            </Routes>
                        </div>
                    </div> :
                    <Routes>
                        {
                            privateRoutes.map(r=>
                                <Route exact path={r.path} element={<Navigate to="/"/>} />    
                            )
                        }
                        {
                            publicRoutes.map(r=>
                                <Route exact path={r.path} element={r.components} />    
                            )
                        }
                        <Route path="*" element={<div>404 not found</div>} />
                    </Routes>

            }
        </BrowserRouter>
    )
}

export default Navigation