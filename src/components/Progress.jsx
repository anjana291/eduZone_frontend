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
            pathColor: '#76c7c0',
            textColor: '#76c7c0',
            trailColor: '#e0e0e0',
          })}/>
    </div>
  )
}

export default Progress