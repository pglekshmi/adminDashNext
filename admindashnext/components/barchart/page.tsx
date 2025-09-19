import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

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
      <BarChart
      xAxis={[{ data:chartData.map(item=>item.month),
        label:'Month'
       }]}
//    yAxis={[
//     {
//       tickLabelStyle: {
//         fontSize: 0,       // ✅ Effectively hides tick labels
//         color: 'transparent',
//       },
//     },
//   ]}
      series={[{ data: chartData.map(item => item.value),
        color: '#1976d2', 
        label:'Sales'
      }]}
      height={300}
    //   visibility={{y:false}}
    //  axisVisibility={{ y: false }}
    /> 
    </div>
  )
}

export default page
