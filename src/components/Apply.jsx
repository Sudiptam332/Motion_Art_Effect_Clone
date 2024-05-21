import React from 'react'
import img1 from "../assets/motionarteffect-img11.png"
import img2 from "../assets/motionarteffect-img10.png"
import "../App.css"

const Apply = () => {
    return (
        <>
            <h1 className='userNum'>Apply On Any Section Or Enable For <br />Whole Page</h1>
            <div className="applyContainer">
                <div className="apply aleft">
                    <h2>Apply On Section</h2>
                    <p>Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. </p>
                    <img src={img1} alt="" />
                </div>
                <div className="apply aright">
                    <h2>Apply On Page</h2>
                    <p>Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation. </p>
                    <img src={img2} alt="" />
                </div>
            </div>
        </>
    )
}

export default Apply