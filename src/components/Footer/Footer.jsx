import React from 'react'
import "./FooterStyle.css"
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
export const Footer = () => {
  const solutions=["Cloud Call Center","Call Center System","Unified Number 9200","CRM System"]
  const serv=["Auto Dialer"," IVR Service","Calls Evaluation","Softphone",] 
 const about="Welcome to our Call Center Cloud Services – Your Gateway to Seamless Communication! We are dedicated to delivering cutting-edge cloud solutions that empower your business with unparalleled efficiency and flexibility. Our state-of-the-art services are designed to streamline your communication processes, providing a reliable and scalable foundation for your call center operations."
 const company=["lorem10 scsc","lorem10 scsc","lorem10 scss"]
 const socials=[<FaFacebook className='icons'/>,<AiFillTwitterCircle className='icons'/>,<AiFillInstagram className='icons'/>,<FaLinkedin className='icons'/>,<IoLogoYoutube className='icons'/>,<RiWhatsappFill className='icons'/>]
 return (
    <div className='footer'>
<div className="upFooter">
<div className="logo">LOGO 
</div>
<div className="contact">
    ++ 123 456 790
</div>

</div>
<div className="centerFooter">  <form  className="newsletter-form">
      <label htmlFor="email">Subscribe to our newsletter:</label>
      <div className="form-group">
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
             required
        />
        <button type="submit">Subscribe</button>
      </div>
    </form></div>

<div className="downFooter">

<div className="leftF">
     <div className="solutionF">
      <h2 className='footerTitle'>Solutions</h2>
        <ul className='footerList'>
            {solutions.map((e)=>(
                <li className='listFooter'>{e}</li>
            ))}
        </ul>
    </div>
    <div className="servicesF">
    <h2 className='footerTitle'>Services</h2>
        <ul className='footerList'>
            {serv.map((e)=>(
                <li className='listFooter'>{e}</li>
            ))}
        </ul>
    </div>
    <div className="companyF">
    <h2 className='footerTitle'>Companies</h2>
        <ul className='footerList'>
            {company.map((e)=>(
                <li className='listFooter'>{e}</li>
            ))}
        </ul>
    </div>
   
</div>
<div className="rihgtF">
{about}
</div>
</div>
<div className="rowSocials">
{socials.map((e)=>(
    <span className='iconsSocials'>{e}</span>
))}
</div>
</div>
 
  )
}
