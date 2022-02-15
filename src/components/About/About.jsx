
import "./about.css"
import React from 'react'
import Me from "../../image/2.jpg"

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={Me} alt="" className='a-img' />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    Iam a Passionate  Mearn Stack developer ,Music Composer and an Author.
                </p>
                <p className="a-desc">
                    “I am an Enthusiastic  MEAN Stack Developer with highly motivated and leadership skills. 
                    Iam currently working at Urolime Technologies as a Junior Software Enginner.I wish to contribute to the growth of the company  while I contribute to  my professional and personal growth as well as engage in opportunities to further the company's goals.”

                </p>
                <div className="a-award">
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default About