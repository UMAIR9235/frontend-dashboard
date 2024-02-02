import React from 'react'
import classes from './AnalyticsChart.module.css'
import IconButton from './IconButton'

function AnalyticsChart() {
  return (<>
    <div className={classes.headingContainer}>
    <h5 className={classes.headingText}>Analytics</h5>
    <IconButton />
</div>
    <div class={classes.guage}>
       
    <div class={classes.guageBody}>
        <div class={classes.guageFill1}></div>
        <div class={classes.guageFill2}></div>
        <div class={classes.guageFill3}></div>
        <div class={classes.guageCover}>
            <h2>90%</h2>
            <span>Done</span>
        </div>

    </div>
    <div className={classes.colorCodes}>
        <div className={classes.code}>
            <div className={classes.codeDot1}></div>
            <span className={classes.codeColorName}>Done</span>
        </div>
        <div className={classes.code}>
            <div className={classes.codeDot2}></div>
            <span className={classes.codeColorName}>In progress</span>
        </div>
        <div className={classes.code}>
            <div className={classes.codeDot3}></div>
            <span className={classes.codeColorName}>To do</span>
        </div>
    </div>
</div>
</>
  )
}

export default AnalyticsChart