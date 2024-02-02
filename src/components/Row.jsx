import React from 'react'
import classes from './Row.module.css'

function Row({children, customStyles}) {

  const styles = customStyles?.split(' ');
  const styleArray = styles?.map((item => {
    return classes[item];
  }))
  const styleString = styleArray?.join(' ');
  console.log(styleString);

  return (
    <div className={`${classes.row} ${styleString}`}>{children}</div>
  )
}

export default Row