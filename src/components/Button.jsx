import React from 'react'
import classes from './Button.module.css'

function Button({onClick, customStyles, children, inheritStyles}) {
    const styles = customStyles?.split(' ');
    const styleArray = styles?.map((item => {
      return classes[item];
    }))
    const styleString = styleArray?.join(' ');
  return (
    <button className={`${inheritStyles? classes.button : ""} ${styleString}`}>{children}</button>
  )
}

export default Button