import React from 'react'
import { NavBar } from '../components/NavBar/NavBar'
import { Hero } from '../components/Hero/Hero'
import { Services } from '../components/Services/Services'
import { Tabs } from '../components/Tabs/Tabs'
import v1 from "./../assets/contact.jpg"
import v2 from "./../assets/store1.jpg"
import v3 from "./../assets/sales.jpg"
import v4 from "./../assets/support.jpg"
import m1 from "./../assets/m1.jpg"
import m2 from "./../assets/m2.jpg"
import m3 from "./../assets/m3.jpg"
import { Footer } from '../components/Footer/Footer'
import { AllServices } from '../components/AllServices/AllServices'
import { SliderImg } from '../components/ImageSlider/SliderImg'
export const LandingPage = () => {
  const tabs = [
    { id: 1, label: 'CRM For Contacts Management!' },
    { id: 2, label: 'CRM For Sales' },
    { id: 3, label: 'CRM For Stores And Projects Managment' },
    { id: 4, label: 'CRM System For Customer Service & Technical Support' },
  ];

  const tabsMobile = [
    { id: 1, label: 'Softphone' },
    { id: 2, label: 'CRM System' },
    { id: 3, label: 'Business Chat' },
     ];

  const system=[{
            id:1,
            title:"CRM Software for contacts Management!",
            desc:"Increase your customers' engagement with your products and services utilizing the Bevatel CRM system!",
            list:["Create professional databases for customers","Manage current and potential customers ","Extensive details and statistics for customers deals","Analyze customers’ info and details"]
            ,img:v1
          },{
            id:2,
            title:"CRM for Sales",
            desc:"Execute your sales processes, and track customer deals and orders with the latest CRM System, specially designed for your business!",
            list:["Organize current and potential customers","Sales Pipelines management","Orders tracking","Categorize customers","Sales opportunities management","Create quotations and invoices"]
            ,img:v2
          },{
            id:3,
            title:"CRM for Stores and Projects Management",
            desc:"Develop your business, and organize your projects faster with more professional tools to manage stores and the whole project periodically!",
            list:["Follow up on customers' & suppliers' deals.","Manage available and sold products","Create tasks and deadlines","Issue reports and invoices","Follow up on project processes execution"]
            ,img:v3
          },{
            id:4,
            title:"CRM System for Customer Service & Technical Support",
            desc:"Get a well-observed overview of your customers' interests and attitudes, and provide them with the best experiences and technical support. All of those and more through an integrated CRM System!",
            list:["Comprehensive customers databases","Technical support tickets","Comprehensive reports for customers' problems & needs"]
            ,img:v4
          }
    ]

const sysMobil=[
  {id:1,
    title:"Softphone",
    desc:"The latest cloud call center application for mobile and desktop keeps you in constant contact with your customers wherever you are, with many features for making and receiving calls.",
    list:["Waiting Feature & Calls Recording","Conference Calls","Identify Caller Identity","Compatible with Android & IOS","Send and receive Voice Messages"]
,img:m1
},{
  id:2,
  title:"CRM System",
  desc:"The latest professional CRM application for managing Customers relations simply and quicker, with unlimited options, tools, and features:"
  ,list:["Manage Contacts Logs","Track sales funnel and operations","Tag Customers with Hashtags","Technical Support Tickets"],
  img:m2
},{
  id:3,
  title:"Business Chat",
  desc:"Receive all your customers' conversations through the social media channels of your business in one window with the Business Chat application, with unlimited features to communicate with customers and respond to their requests."
  ,list:["One platform Integrated API for:- WhatsApp, Twitter, Instagram, Messenger","Unlimited Users from multiple devices","Unlimited ChatBot","Contact an unlimited number of customers","Compatible with Android & IOS"],
  img:m3
}

]
const images=[m1,m2,m3,v1,v2,v3,m1,m2,m3,v1,v2,v3]
  return (
    <div className='myContainer'>
        <NavBar/>
    <Hero/>
    <Services/>
    <AllServices/>
    <Tabs tabs={tabs} panels={system} />;
   <Tabs tabs={tabsMobile} panels={sysMobil}/>
   <SliderImg imgSlider={images} />
   <Footer/>
    </div>
  )
}
