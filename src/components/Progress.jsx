import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Progress() {
    const percentage=66;
  return (
    <div style={{ width: 50, height: 100 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} 
        styles={buildStyles({
            textSize: '24px', 
            pathColor: '#28104e',
            textColor: '#28104e',
            trailColor: '#deacf5',
          })}/>
    </div>
  )
}

export default Progress