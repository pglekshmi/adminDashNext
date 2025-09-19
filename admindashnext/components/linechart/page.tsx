'use client'
import React from 'react'
import { LineChart } from '@mui/x-charts/LineChart';

function page() {
    const chartData = [
  { month: 'Jan', value: 21234 },
  { month: 'Feb', value: 20143 },
  { month: 'March', value: 21345 },
  { month: 'April', value: 22123 },
  { month: 'May', value: 21876 },
  { month: 'June', value: 21678 },
];
  return (
    <div>
     <LineChart
  xAxis={[{ data: chartData.map(item => item.month),
    scaleType:'point',
    label:'Month',
    
   }]}
  series={[
    {
      data: chartData.map(item => item.value),
      label:'Sales'
    },
  ]}
  height={300}
  // width={340}
  
/>
    </div>
  )
}

export default page
