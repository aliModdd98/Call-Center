import React from 'react'
import "./HeroStyle.css"
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
export const Hero = () => {
  return (
    <section className='Hero'>
        <div className="blueBg">
            <div className="entro">
                <h1>levating Customer Experiences, One Call at a Time!</h1>
          <p className='intrHero'><FaQuoteLeft/> Transforming conversations into connections, our cloud-powered call center elevates customer experiences to new heights. Seamlessly connecting businesses with their audience, we redefine service excellence in the digital era. <FaQuoteRight className='icon'/></p>
            </div>
        </div>
    </section>
  )
}
