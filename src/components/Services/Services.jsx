import React from 'react'
import "./ServicesStyle.css"
import img1 from "./../../assets/g1.png"
import img2 from "./../../assets/g2.png"
import img3 from "./../../assets/g3.png"
import img4 from "./../../assets/g10.png"
import img5 from "./../../assets/g5.png"
import img6 from "./../../assets/g6.png"
import img7 from "./../../assets/g8.png"

import {OurServices} from "./../OurServices/OurServices"
import Title from '../Title/Title'
export const Services = () => {
 
 
    const Services=[
    { id:0,
        nameS:"Inbound Call Center",
        desc:"You Will answer Customer query calls for making  your tasks easier",
        img:img1,
    }, { id:1,
        nameS:"Outbound Call Center",
        desc:"Our Team Will call your customers individually and inorm them about all Updates and Offers",
        img:img2,
    }, { id:2,
        nameS:"IT Services",
        desc:"We offer a database Management System and can help you keep Insightful records",
        img:img3,
    }, { id:3,
        nameS:"Chat/Email Support",
        desc:"Experts Will promptly reply to all emails and chats with personalized responses",
        img:img4,
    }, { id:4,
        nameS:"Telemarketing",
        desc:"We Will bring leads and convert customers with professional telemarketing",
        img:img5,
    }, { id:5,
        nameS:"Lead Generation",
        desc:"Our Team will help you from outbound lead generation and more ",
        img:img6,
    },{ id:6,
        nameS:"Live Chat Responses",
        desc:"Get instant live support from our team throught live chat without any delay",
        img:img7,
    }
  ]
    return (
    <section className='mainContainer'> 
    <Title section="Excellent Services for Growth"/>
     
      <div className="grid">
{
    Services.map((e)=>(
        <div className="item" key={e.id}>
          <div className="imgAbs">  <img className='img' src={e.img} alt="logo" /></div>
            <h2>{e.nameS}</h2>
            <p>{e.desc}</p>
        </div>
    ))
}
     </div>
    
    
    
     </section>
  )
}
