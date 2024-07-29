import React from 'react'
import "./Hero.css"
import profile_img from '../../assets/profile_img.svg'

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="profile_img" />
            <h1> <span>I'm Rahul Sharma</span> frontend Developer based in india</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis molestiae hic doloremque exercitationem ab quae, optio iste a quod consequuntur!</p>
            <div className="hero-action">
                <div className="hero-connect">connect with me</div>
                <div className="hero-resume">my resume</div>
            </div>
        </div>)
}

export default Hero