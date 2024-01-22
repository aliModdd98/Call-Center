import React from 'react'
import Title from '../Title/Title'
import { OurServices } from '../OurServices/OurServices'
import m1 from "./../../assets/img1.jpg"
import m2 from "./../../assets/img2.jpg"
import m3 from "./../../assets/sec3.jpg"
export const AllServices = () => {
    const servicesList=[
        {id:1,
            title:"Cloud Call Center System",
            desc:"Contact your customer limitlessly with Bevatel Cloud Call Center makes you regular, accelerated, better, and more effective communication anywhere.",
            list:["Integrated Cloud Contact Center","User-Friendly with Computer & Mobile","Live Panel & Real-time Reports","Call Recording","Detailed reports for contact center","Integration with systems like ERP, CRM"],
            img:m1,
     },   
    {id:2,
        title:"Unified Number 9200 & Toll-Free Number 800",
        desc:"Receive all your business calls (in Saudi Arabia) over an easy-to-remember unified number 9200, or Toll-Free Number 800, with multiple features for contact centers!",
        list:["Connect your branches with a unified contact center","Empower your brand","Calls Distribution"],
        img:m2,
    },
    {id:3,
        title:"Business Chat",
        desc:"Meta Verified Tech Provider Never miss your customers' Conversations! Receive all your customers’ conversations in a unified platform for all your business channels on social media!",
        list:["WhatsApp Business Activation with your numbers","Integrate Social Media Channels (Twitter, Instagram, Messenger, Google Business, Messenger, Gmail)","All customers' conversations in a single interface","Unlimited Users","Unlimited Chatbot","Integration with Multiple systems","Detailed Reports & Analytics in real-time"],
        img:m3,
    },
    ]
    return (
    <div className='my-container'>
<Title section="Our Services"/>
     <div >
   { servicesList.map((item)=>(
   <div key={item.id}> <OurServices id={item.id} key={item.id} title={item.title} img={item.img} desc={item.desc} list={item.list}/>
   </div>)
)
}
     </div>
    </div>
  )
}
