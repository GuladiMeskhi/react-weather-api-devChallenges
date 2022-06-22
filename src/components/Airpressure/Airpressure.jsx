import React from 'react'

export const Airpressure = ({airpressure}) => {
  return (
    <div style={{backgroundColor:'rgba(30, 33, 58, 1)',width:'300px',height:'100px', justifyContent:'center', alignItems:'center', display:'flex',flexDirection:'column'}}>
        <p style={{color:'white',fontSize:'16px'}}>Air pressure</p>
        <span style={{fontSize:'44px',color:'white'}}>{airpressure} mb</span>
    </div>
  )
}
