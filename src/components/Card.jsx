import React from 'react'
import classes from './Card.module.css'

function Card({children, customStyles}) {

  const styles = customStyles?.split(' ');
  const styleArray = styles?.map((item => {
    return classes[item];
  }))
  const styleString = styleArray?.join(' ');
  console.log(styleString, "now");
  return (
    <div className={`${classes.card} ${styleString}`}>{children}</div>
  )
}

export default Card