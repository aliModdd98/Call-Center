import React from 'react'
import about from "./../../assets/about.jpg"
import "./AboutStyle.css"
import Box from './../Box/Box';

export const About = () => {
  
    const data = [
        { title: 'Clients', value: 1222 },
        { title: 'Sectors', value: 125 },
        { title: 'Countries', value: 10 },
        { title: 'The level of service', value: 90 },
      ];
    return (
    <div className='aboutCointer'>
       <div className="aboutImg">
        <img src={about} alt="About Us" />
       </div>
      <div className="about">
      <h1>About Us </h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam saepe quidem explicabo quasi odio ipsum molestias, deserunt quisquam cum quam iusto labore deleniti, velit tempore dolorum voluptate? Nostrum, cupiditate aperiam?</p>
   
      </div>

      <div className="story">
        <p>TechSolutions Inc. was founded as a pioneering company in cutting-edge technology solutions, serving numerous businesses worldwide. TechSolutions began its journey in the United States and expanded its reach across different continents, delivering innovative solutions and comprehensive technical expertise to establish and enhance the digital infrastructure of various organizations. With a vision for global expansion, TechSolutions holds licenses from regulatory authorities and operates through multiple branches in key locations such as Europe, Asia, and Australia, complementing its headquarters in the United States.</p>
        <div className="boxS">
      {data.map((item, index) => (
        <Box key={index} title={item.title} value={item.value} />
      ))}
    </div>
      </div>
       </div>
  )
}
