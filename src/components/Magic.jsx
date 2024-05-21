import React from 'react'
import img from "../assets/motionarteffect-img5.png"
import { FaArrowRight } from "react-icons/fa6";

const Magic = () => {
    return (
        <div className="magicContainer">
            <div className="magicLeft">
                <h1>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
                <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
                <button className='btnme'>Purchase From Envato <FaArrowRight /></button>
            </div>
            <div className="magicRight">
                <img src={img} alt="" />
            </div>
        </div>
    )
}

export default Magic