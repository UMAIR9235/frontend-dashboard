import React from 'react'
import classes from './LastTransactionsItem.module.css'
import Card from './Card'
import Row from './Row'
import Column from './Column'
import AvatarImage from './AvatarImage'
import Typography from './Typography'
import IconButton from './IconButton'



function LastTransactionsItem({text}) {
  return (
    <Card customStyles='borderBottom paddingY'>
      <Row customStyles='itemsCenter justifyBetween'>
        <Row customStyles='itemsCenter'>
          <AvatarImage customStyles='size20 mr20'/>
          <Column>
          <h5>{text}</h5>
          <Typography variant='span' customStyles='textxs colorLight' >2 July, 2023</Typography>
          </Column>
        </Row>
        <Row customStyles='gap'>
          <Typography variant='span' customStyles='textsm font500'>-$3,000</Typography>
          <IconButton />
        </Row>
      </Row>
    </Card>
  )
}

export default LastTransactionsItem