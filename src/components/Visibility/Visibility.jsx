import React from 'react'

export const Visibility = ({visibility}) => {
  return (
    <div style={{backgroundColor:'rgba(30, 33, 58, 1)',width:'300px',height:'100px', justifyContent:'center', alignItems:'center', display:'flex',flexDirection:'column'}}>
        <p style={{color:'white',fontSize:'16px'}}>Visibility</p>
        <span style={{fontSize:'44px',color:'white'}}>{visibility}km</span>
    </div>
  )
}
