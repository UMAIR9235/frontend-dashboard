import React from 'react'
import classes from './ListOfItemsCard.module.css'
import IconButton from './IconButton'
import checkedIcon from '../assets/checked.png'
import uncheckedIcon from '../assets/unchecked.png'


function ListOfItemsCard({checked, text}) {
  return (
    <div className={classes.itemsCard}>
        <div className={classes.itemName}>
            <img src={checked ? checkedIcon : uncheckedIcon} alt="checkbox-icon" className={classes.checkboxIcon}/>
            <span className={classes.itemText}>Macbook</span>
        </div>
        <IconButton />
    </div>
  )
}

export default ListOfItemsCard