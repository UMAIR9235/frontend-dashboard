import React from "react";
import classes from "./Sidebar.module.css";
import Card from "./Card";
import Column from "./Column";
import Row from "./Row";
import LatestSpendingItem from "./LatestSpendingItem";
import Button from "./Button";
import Typography from "./Typography";
import premiumImg from '../assets/premium.png'
import IconButton from "./IconButton";
import { arrowRight } from "../assets/icons";

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <Card customStyles="borderLight padding grow radius16">
        <Column customStyles='justifyBetween hFull'>
          <div className={classes.cardOneHeading}>
            <Typography variant='h4' customStyles='textlg font500'>Expenses and income</Typography>
          </div>
          <Row customStyles="itemsCenter justifyBetween">
            <Column customStyles='itemsStart gap5'>
              <Typography variant='h6' customStyles='textsm font500'>Expense</Typography>
              <Typography variant='h3' customStyles='textxl font500'>75%</Typography>
            <Typography variant='span' customStyles='textxs colorLight'>5,653</Typography>
            </Column>
            <Column customStyles='itemsCenter gap5'>
              <h6>|</h6>
              <Typography variant='h5' customStyles='textmd font500'>VS</Typography>
              <h6>|</h6>
            </Column>
            <Column customStyles='itemsEnd gap5'>
            <Typography variant='h6' customStyles='textsm font500'>Income</Typography>
            <Typography variant='h3' customStyles='textxl font500'>40%</Typography>
            <Typography variant='span' customStyles='textxs colorLight'>2,656</Typography>
            </Column>
          </Row>
          <Row customStyles="gap">
            <div className={classes.progressBarOne}></div>
            <div className={classes.progressBarTwo}></div>
          </Row>
        </Column>
      </Card>
      <Card customStyles="borderLight padding grow radius16">
        <Column customStyles='itemsCenter wFull gap justifyBetween hFull'>
          <Row customStyles='wFull justifyBetween'>
            <Typography variant='h4' customStyles='textlg font500'>Latest spending</Typography>
            <IconButton />
          </Row>
          <Column customStyles="wFull">
            <LatestSpendingItem text='Online store'/>
            <LatestSpendingItem text='Pay the hospital'/>
            <LatestSpendingItem text='Tickets'/>
          </Column>
          <Row customStyles='itemsCenter justifyCenter'>
          <Typography variant='span' customStyles='mr10 colorPrimary textmd'>View all</Typography>
          {arrowRight}
          </Row>
          
        </Column>
      </Card>
      <Card customStyles='borderLight padding grow radius16'>
        <Column customStyles='wFull itemsCenter hFull justifyBetween'>
            <Typography variant='h4' customStyles='textmd font500'>Go to premium</Typography>
          <Column customStyles='wFull'>
            <img src={premiumImg} alt="premium-image" style={{width: '60px', marginBottom: '15px'}} />
            <Typography variant='h3' customStyles='textxl font500'>Need more features?</Typography>
            <Typography variant='p' customStyles='textxs colorLight'>Update your account to premium<br/>to get more features</Typography>
          </Column>
          <Button inheritStyles={true} customStyles='wFull paddingVertical10 radius10 cPointer'>Get Now</Button>
        </Column>
      </Card>
    </div>
  );
}

export default Sidebar;
