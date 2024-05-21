import React from 'react'
import img1 from "../assets/motionarteffect-img9.png"
import img2 from "../assets/motionarteffect-img6.png"
import img3 from "../assets/motionarteffect-img7.png"

const Feature = () => {
    return (
        <div className="plugin">
            <h1>An All-Round Plugin With Powerful <br />Features</h1>
            <p>Whether you're a seasoned web designer or just starting out, Motion Art for <br />Elementor seamlessly integrates with the Elementor platform, providing you <br />with a seamless and intuitive experience.</p>
            <div className="pCon">
                <div className="pItem">
                    <img src={img1} alt="" />
                    <h2>Light Weight</h2>
                    <p>Motion Art for Elementor is designed to be lightweight.</p>
                </div>
                <div className="pItem">
                    <img src={img2} alt="" />
                    <h2>100% Responsive</h2>
                    <p>Create a consistent visual experience across all devices.</p>
                </div>
                <div className="pItem">
                    <img src={img3} alt="" />
                    <h2>User Friendly Interface</h2>
                    <p>Ensure a smooth experience for both applicants and administrators.</p>
                </div>
            </div>
        </div>
    )
}

export default Feature