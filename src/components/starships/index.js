import React from 'react'
import './index.css'


const Card = (props) => {
  return (
    <div id="shipCard">
      <h2 className='ships'>{props.ship}</h2>
    </div>
  )
}

export default Card


