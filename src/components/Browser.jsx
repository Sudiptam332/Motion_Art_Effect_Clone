import React from 'react'
import img from "../assets/motionarteffect-img8.png"

const Browser = () => {
    return (
        <div className="browserContainer">
            <h2>Supported by All Popular Browsers</h2>
            <p>Rest assured, Motion Art is designed to be compatible <br />with all major web browsers.</p>
            <img src={img} alt="" />
        </div>
    )
}

export default Browser