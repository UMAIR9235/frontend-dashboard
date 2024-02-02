import React from 'react'
import classes from './IconButton.module.css'
import { moreVerticalIcon } from '../assets/icons';

function IconButton({customStyles, onClick}) {
    const styles = customStyles?.split(' ');
  const styleArray = styles?.map((item => {
    return classes[item];
  }))
  const styleString = styleArray?.join(' ');
  return (
    <button onClick={onClick} className={`${classes.iconButton} ${styleString}`}>{moreVerticalIcon}</button>
  )
}

export default IconButton