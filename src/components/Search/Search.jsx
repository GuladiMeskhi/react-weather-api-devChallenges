import { Flex, Input } from '@chakra-ui/react'
import React from 'react'
import classes from './Search.module.css'

export const Search = ({handleClick,handleChange,text}) => {


  return (
    <>
      <div className={classes.searchContainer}>
        <span className={classes.sidebarCta}>
                <input className={classes.sidebarBtn} placeholder='type city...' value={text} type='text' name='text' onChange={handleChange}/>
                <button className={classes.navigatorBtn} onClick={handleClick}>Search</button>    
          </span> 
      </div>
    </>
  )
}
