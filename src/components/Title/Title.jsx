import React from 'react'
import './TitleStyle.css'
const Title = ({section ,desc}) => {
  return (
  <div className='row  contTitle '>
    <div className=' title '><h1>{section}</h1>
    <span className='underTitle'></span></div>
    <div className="description">
        {desc}
    </div>
</div>  )
}

export default Title