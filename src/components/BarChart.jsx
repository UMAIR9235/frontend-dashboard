import React from 'react'
import Row from './Row'
import classes from './BarChart.module.css'
import Bar from './Bar'
import Typography from './Typography'

const barChartData = [
    {firstBarHeight: 110, secondBarHeight: 75, month: 'Oct'},
    {firstBarHeight: 110, secondBarHeight: 80, month: 'Nov'},
    {firstBarHeight: 80, secondBarHeight: 65, month: 'Dec'},
    {firstBarHeight: 70, secondBarHeight: 50, month: 'Jan'},
    {firstBarHeight: 45, secondBarHeight: 35, month: 'Feb'},
]

function BarChart() {
  return (
    <div className={classes.barChart}>
        {barChartData.map(item => 
            <div className={classes.barChartMonth}>
                <Bar height={item.firstBarHeight} width={20} color='#545de3'/>
                <Bar height={item.secondBarHeight} width={20} color='#c7caff'/>
                <div className={classes.monthAxis}>
                  <Typography variant='span' customStyles='textxs'>{item.month}</Typography>
                </div>
            </div>
        )}
        <div className={classes.yAxis}>
          
                  <Typography variant='span' customStyles='textxs'>$60</Typography>
                  <Typography variant='span' customStyles='textxs'>$40</Typography>
                  <Typography variant='span' customStyles='textxs'>$20</Typography>
                  <Typography variant='span' customStyles='textxs'>$0</Typography>
                </div>
    </div>
  )
}

export default BarChart