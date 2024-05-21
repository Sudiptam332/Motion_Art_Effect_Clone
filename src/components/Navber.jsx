import React from 'react'
import Logo from '../assets/MotionArtEffect-logo.png'
import "../App.css"

const Navber = () => {
    return (
        <div className="d-flex justify-content-between navContainer">
            <div className="navLeft">
                <img src={Logo} alt="" />
            </div>
            <div className="navRight">
                <button class="btn btn-light pbt">Purchase Now</button>
            </div>
        </div>
    )
}

export default Navber