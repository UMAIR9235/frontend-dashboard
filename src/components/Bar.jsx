import React from 'react'
import classes from './Bar.module.css'

function Bar({height, width, color}) {

   const barStyles = {
    height: height,
    width: width,
    backgroundColor: color
   }
  return (
    <div className={classes.bar} style={barStyles}></div>
  )
}

export default Bar