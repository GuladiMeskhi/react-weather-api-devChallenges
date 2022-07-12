import React from 'react'
import classes from './Sidebar.module.css'
import { BiCurrentLocation } from 'react-icons/bi'


export const Sidebar = ({temp,weather,weekday,city,icon,handleOpen,handleLocation,symbol}) => {

    return (
    <>
        <div className={classes.sidebarContainer}>
           <span className={classes.sidebarCta}>
                 <button className={classes.sidebarBtn} onClick={handleOpen}>Search for places</button>
                <button className={classes.navigatorBtn} onClick={handleLocation}><BiCurrentLocation color='white' fontSize='36px'/></button>   
            </span>
            <img className={classes.sidebarIcon} src={icon} alt='img'/>
            <p className={classes.sidebarCelsius}>{temp}<span style={{fontSize:'48px',color:'gray'}}>{symbol}</span></p>
            <p className={classes.sidebarWeather}>{weather}</p>
            <p className={classes.sidebarDate}>Today • {weekday}</p>
            <span className={classes.sidebarLocation}>{city}</span>
        </div>
    </>
  )
}
