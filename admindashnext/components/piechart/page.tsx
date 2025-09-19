'use client'
import { useEffect,useState } from 'react';
import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { colors } from '@mui/material';
import { dataContext } from '@/app/dashboard/page';
import { Item,MyContextType } from '@/app/dashboard/page';

// const data = [
//   { label: 'Group A', value: 400, color: '#0088FE' },
//   { label: 'Group B', value: 300, color: '#00C49F' },
//   { label: 'Group C', value: 300, color: '#FFBB28' },
//   { label: 'Group D', value: 200, color: '#FF8042' },
// ];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};



export default function page() {

   const data = React.useContext(dataContext)
 

//   type SalaryRange = {
//   label: string;
//   value: number;
//   color: string;
// };

  const [pdata,setpData] = useState([{ label: '25k-30k', value: 0, color: '#0088FE' },
                                   { label: '30k-35k', value: 0, color: '#00C49F' },
                                   { label: '35k-40k', value: 0, color: '#FFBB28' },
                                   { label: '40k-45k', value: 0, color: '#FF8042' },
                                   { label: '45k-50k', value: 0, color: '#DC143C' },])

  // const [gData,setGdata] = useState([])
  useEffect(()=>{
    async function fetchGraph(){
               setpData([{ label: '25k-30k', value: 0, color: '#0088FE' },
                                   { label: '30k-35k', value: 0, color: '#00C49F' },
                                   { label: '35k-40k', value: 0, color: '#FFBB28' },
                                   { label: '40k-45k', value: 0, color: '#FF8042' },
                                   { label: '45k-50k', value: 0, color: '#DC143C' },])         
    }
    fetchGraph()
  },[])
    useEffect(()=>{
        // setpData([{ label: '25k-30k', value: 0, color: '#0088FE' },
        //                            { label: '30k-35k', value: 0, color: '#00C49F' },
        //                            { label: '35k-40k', value: 0, color: '#FFBB28' },
        //                            { label: '40k-45k', value: 0, color: '#FF8042' },
        //                            { label: '45k-50k', value: 0, color: '#DC143C' },])
        async function updateGraph(){

                          
                                  //  console.log(pdata);
                                   
            const updateData = [{ label: '25k-30k', value: 0, color: '#0088FE' },
                                   { label: '30k-35k', value: 0, color: '#00C49F' },
                                   { label: '35k-40k', value: 0, color: '#FFBB28' },
                                   { label: '40k-45k', value: 0, color: '#FF8042' },
                                   { label: '45k-50k', value: 0, color: '#DC143C' },]
            console.log(updateData);
            
            data?.data.forEach((x:any) => {
              if(x.salary>=25000 && x.salary<30000){
                updateData.forEach((e:any)=>{
                  if(e.label == '25k-30k'){
                    e.value++;}
                  })
                }
                 else if(x.salary>=30000 && x.salary<35000){
                updateData.forEach((e:any)=>{
                  if(e.label == '30k-35k'){
                    e.value++;
                  }
                  })
                }
                   else if(x.salary>=35000 && x.salary<40000){
                updateData.forEach((e:any)=>{
                  if(e.label == '35k-40k'){
                    e.value++;
                  }
                })

                   }
                 else if(x.salary>=40000 && x.salary<45000){
                updateData.forEach((e:any)=>{
                  if(e.label == '40k-45k'){
                    e.value++;
                  }
                })

                   }

                   else if(x.salary>=45000 && x.salary<50000){
                updateData.forEach((e:any)=>{
                  if(e.label == '45k-50k'){
                    e.value++;
                  }
                })

                   }

                   else{
                    console.log("Salary not in range");
                    
                   }
                  })
                  setpData(updateData)

                }
        
        updateGraph()
    },[data?.data])

  return (
    <PieChart
      series={[{ innerRadius: 50, outerRadius: 100, data:pdata, arcLabel: 'value' }]}
      {...settings}
    />
  );
}