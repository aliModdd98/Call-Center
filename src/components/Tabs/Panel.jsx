import React from 'react'
import"./TabStyle.css"
export const Panel = ({ img, title, desc, list, isActive }) => {
  return (
    <div className={`panel ${isActive ? 'active' : ''}`}>
   <div className="fsec">
   <h1>{title}</h1>
    <p>{desc}</p>
    <ul>
      {list.map((item, index) => (
        <li key={index} className='listSys'>
          {item}
        </li>
      ))}
    </ul>
   </div>
<div className="seSec">
    <img src={img} alt="CRM" />
</div>
  </div>
  )
}
