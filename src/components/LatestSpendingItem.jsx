import React from 'react'
import Row from './Row'
import classes from './LatestSpendingItem.module.css'
import Card from './Card'
import Typography from './Typography'
import AvatarImage from './AvatarImage'
function LatestSpendingItem({text}) {
  return (
    <Card customStyles='padding borderBottom'>
        <Row customStyles='itemsCenter hFull'>
        {/* <div className={classes.avatarImage}>
        </div> */}
        <AvatarImage customStyles='size40 mr20'/>
        <div className={classes.spendingType}>
            <Typography variant='h5' customStyles='textmd font500'>{text}</Typography>
            <Typography variant='span' customStyles='textxs colorLight'>May 30, 2023 at 08:00PM</Typography>
        </div>
    </Row>
    </Card>
  )
}

export default LatestSpendingItem