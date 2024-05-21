import React from 'react'
import img1 from "../assets/motionarteffect-img2.png"
import img2 from "../assets/motionarteffect-img1.png"
import img3 from "../assets/motionarteffect-img3.png"
import img4 from "../assets/motionarteffect-img4.png"

const Review = () => {
    return (
        <div className="reviewContainer">
            <div className="review">
                <img className='mx-3' src={img1} alt="" />
                <div className="reviewRight">
                    <img src={img4} alt="" />
                    <p>4.5 Score, 9 Reviews</p>
                </div>
            </div>
            <div className="review">
                <img className='mx-3' src={img2} alt="" />
                <div className="reviewRight">
                    <img src={img4} alt="" />
                    <p>4.5 Score, 9 Reviews</p>
                </div>
            </div>
            <div className="review">
                <img className='mx-3' src={img3} alt="" />
                <div className="reviewRight">
                    <img src={img4} alt="" />
                    <p>4.5 Score, 9 Reviews</p>
                </div>
            </div>
        </div>
    )
}

export default Review