import React from "react";
import classes from "./Dashboard.module.css";
import { searchIcon, curveIcon } from "../assets/icons";
import Card from "./Card";
import Column from "./Column";
import Row from "./Row";
import LastTransactionsItem from "./LastTransactionsItem";
import Typography from "./Typography";
import BarChart from "./BarChart";
import goldCoinsIcon from "../assets/goldCoinsIcon.svg";
import ListOfItemsCard from "./ListOfItemsCard";
import ChatComponent from "./ChatComponent";
import Button from "./Button";
import AnalyticsChart from "./AnalyticsChart";

function Dashboard() {
  return (
    <div className={classes.dashboard}>
      <Card>
        <Row customStyles="justifyBetween">
          <Column>
            <Typography variant="h1" customStyles="">
              Hello, John .D
            </Typography>
            <Typography variant="p" customStyles="textmd font400">
              View and control your finances here!
            </Typography>
          </Column>
          <Column customStyles="itemsCenter justifyCenter">{searchIcon}</Column>
        </Row>
      </Card>
      <Card customStyles="flex1 wFull">
        <Row customStyles="hFull wFull gap">
          <Card customStyles="flex6 bgWhite radius8 hFull padding">
            <Column customStyles="hFull gap">
              <Row customStyles="justifyBetween">
                <Typography variant="h5" customStyles="textmd font500">
                  Balance Statistics
                </Typography>
                <Button inheritStyles={false} customStyles='paddingX5 paddingY5 basic radius5 font500 textsm'>Filter</Button>
              </Row>
              <Row customStyles="justifyBetween flex1">
                <Column customStyles="flex4 gap">
                  <Typography variant="h2" customStyles="textxl">
                    $564
                  </Typography>
                  <Row>
                    <Typography variant="span" customStyles="textxs">
                      Your total
                      <br />
                      balance
                    </Typography>
                  </Row>
                  <Row customStyles=" padding10 itemsCenter">
                    {curveIcon}
                    <Typography variant="span" customStyles="textxs">
                      6%
                    </Typography>
                  </Row>
                  <Typography variant="p" customStyles="textxs colorLight">
                    Always see your
                    <br />
                    earnings updates
                  </Typography>
                </Column>
                <BarChart />
              </Row>
            </Column>
          </Card>

          <Card customStyles="flex4 bgPrimary radius8 padding">
            <Column customStyles='justifyBetween wFull hFull'>
            <Row customStyles='itemsCenter justifyBetween'>
              <Typography variant='h2' customStyles='font500 colorWhite'>S.</Typography>
              <Typography variant='h2' customStyles='font500 colorWhite'>Visa</Typography>
            </Row>
            <Row customStyles='itemsCenter justifyBetween'>
              <Column customStyles='gap'>
              <Typography variant='span' customStyles='colorWhite textsm font500'>****9838</Typography>
              <Typography variant='span' customStyles='colorWhite textsm font500'>Jhon Demon</Typography>
              
              </Column>
              <Typography variant='span' customStyles='colorWhite textsm font500'>08/12</Typography>
            </Row>
            </Column>
          </Card>
        </Row>
      </Card>

      <Card customStyles="flex1 wFull bgWhite radius8 overflowHidden">
        <Row customStyles="hFull">
          <Column customStyles="flex1 borderRight padding10 gap8">
            <Typography variant="h5" customStyles="textmd font500">
              List of items to buy
            </Typography>
            <Row customStyles="gap">
              <Column customStyles="gap">
                <Typography variant="h3" customStyles="textxl font500">
                  02:00
                </Typography>
                <Typography variant="span" customStyles="textxs colorLight">
                  Sat, August 12
                </Typography>
              </Column>
              <Column>{">"}</Column>
              <Column customStyles="gap">
                <Typography variant="h3" customStyles="textxl font500">
                  05:00
                </Typography>
                <Typography variant="span" customStyles="textxs colorLight">
                  Sat, September 12
                </Typography>
              </Column>
            </Row>
            <Row customStyles='itemsCenter justifyBetween'>
              <Row customStyles='gap'>
                <Typography variant='span' customStyles='textxs colorLight font500'>0/3</Typography>
                <Typography variant='span' customStyles='textxs font500'>Shopping list</Typography>
              </Row>
              <Button inheritStyles={false} customStyles='basic paddingX5 paddingY5 radius5 textsm'>+ Add an item</Button>
            </Row>
            <Row customStyles='gap'><ListOfItemsCard checked={true}  text='Macbook'/><ListOfItemsCard checked={false} text='Bicycle'/></Row>
            <Row customStyles='gap'><ListOfItemsCard checked={false} text='Motorcycle'/><ListOfItemsCard checked={true} text='Iphone 14 pro max'/></Row>
          </Column>
          
          <Column customStyles="flex1">
            <ChatComponent />
          </Column>
        </Row>
      </Card>
      <Card customStyles="flex1 wFull">
        <Row customStyles="hFull wFull gap">
          <Card customStyles={`flex7  radius8 bgWhite padding`}>
            <Column customStyles="justifyBetween hFull">
              <Card customStyles="borderBottom paddingY">
                <Row customStyles="justifyBetween ">
                  <Typography variant="h5" customStyles="textmd font500">
                    Last transactions
                  </Typography>
                  <Row customStyles="gap">
                    <Typography variant="span" customStyles="textxs">
                      Newest
                    </Typography>
                    <Typography variant="span" customStyles="textxs">
                      Oldest
                    </Typography>
                  </Row>
                </Row>
              </Card>
              <LastTransactionsItem text='Bessie Cooper'/>
              <LastTransactionsItem text='Guy Hawkins'/>
              <LastTransactionsItem text='Floyd Miles'/>
            </Column>
          </Card>
          <Card customStyles="flex3 radius8 bgWhite padding">
            <Column customStyles='itemsCenter'>
            <Row></Row>
            <AnalyticsChart />
            <Row></Row>
            </Column>
            
          </Card>
        </Row>
      </Card>
    </div>
  );
}

export default Dashboard;
