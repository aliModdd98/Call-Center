import React from 'react'
import "./OurServicesStyle.css"
import { IoIosArrowDroprightCircle } from "react-icons/io"
export const OurServices = ({id,img,title,desc,list}) => {
  return ( 
      <div className={` ${id % 2 === 0 ? 'servSec' : 'secServ'}`} >
<div className="imgS">
  <img src={img} alt="Section" className='animationImg' />
</div>
<div className="service">
  <h1 className='titS'>
  {title}
   </h1>
   <p>{desc}</p>
<ul>{
  list.map((e,index)=>(
    <div className='rowList' key={e.id}>
         <div className='iconContainer'>
        <IoIosArrowDroprightCircle className='iconT' />
      </div><li className='listItem' key={index}>{e}</li>

    </div>

  ))}
 </ul>
</div>

      </div>

   
  )
}
