import React from 'react'
import classes from './Card.module.css'


export const Card = ({weekday,symbol,icon,temp,feelslike}) => {
  return (
    <div className={classes.cardContainer}>
      <span className={classes.cardText}>{weekday}</span>
      <img  src={icon} className={classes.cardImg}/>
      <span style={{width:'100%',paddingInline:'20px',display:'flex',justifyContent:'space-evenly'}}>
          <span style={{color:'white',fontSize:'16px'}}>{temp}{symbol}</span>
          <span style={{color:'gray',fontSize:'16px'}}>{feelslike}{symbol}</span>
      </span>
    </div>
  )
}
