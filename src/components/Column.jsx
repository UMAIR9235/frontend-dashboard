import React from 'react'
import classes from './Column.module.css'

function Column({children, customStyles}) {

  const styles = customStyles?.split(' ');
  const styleArray = styles?.map((item => {
    return classes[item];
  }))
  const styleString = styleArray?.join(' ');
  console.log(styleString, "now");

  return (
    <div className={`${classes.column} ${styleString}`}>{children}</div>
  )
}

export default Column