import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.svg'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officia laborum enim, nihil sunt totam autem iusto voluptatum, alias earum non nam sed asperiores. Numquam fugit quisquam sunt unde eveniet!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet id non quia.</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill'><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className='about-skill'><p>React JS</p><hr style={{ width: "70%" }} /></div>
            <div className='about-skill'> <p>JAvaScript</p><hr style={{ width: "60%" }} /></div>
            <div className="about-skill"><p>Node JS</p><hr style={{ width: "50%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>YEARS OF EXPRIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>90+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
       </div>
    </div>
  )
}

export default About