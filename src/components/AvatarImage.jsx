import React from 'react'
import classes from './AvatarImage.module.css'

function AvatarImage({customStyles}) {

    const styles = customStyles?.split(' ');
  const styleArray = styles?.map((item => {
    return classes[item];
  }))
  const styleString = styleArray?.join(' ');
  console.log(styleString);
  return (
    <div className={`${classes.avatarImage} ${styleString}`}></div>
  )
}

export default AvatarImage