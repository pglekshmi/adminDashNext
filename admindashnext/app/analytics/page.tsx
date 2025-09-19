'use client'
import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import img from '../public/2021flat_248.jpg';
import IncompleteCircleIcon from '@mui/icons-material/IncompleteCircle';
import { blue } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LineChart from '@/components/linechart/page';
import BarChart  from '@/components/barchart/page';



function Page() {
  return (
    <Box>
    <Box
    // sx={{
    //   display: 'flex',
    //   flexWrap: 'wrap',
    //   '& > :not(style)': {
    //     m: 1,
    //     width: 300,
    //     height: 128,
    //   },
    // }}
    >
      <Grid container spacing={4} sx={{mt:'70px' ,alignItems: 'flex-end'}}>
        <Grid  size={3}>
          <Paper  elevation={6} className='relative overflow-visible p-4 min-h-[160px] flex justify-between items-center w-full' >
            <div className='flex items-center justify-between'>
            <div className='flex flex-col justify-between'>
           <p className='text-sm font-medium text-gray-700'>Ratings</p>

            <p className='text-2xl font-semibold mt-2 mb-2'>13K  <span className='text-green-500 text-base font-normal'>15.6%</span></p>
            <p ><span className='bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm w-fit'>Year of 2025 </span></p>
            </div>
            <img  src={'/5.png'} className='absolute bottom-0 right-[-20px] h-[120px]'/>
            </div>
          </Paper>
        </Grid>
{/* 
         <Grid  size={3}>
          <Paper  elevation={6} >
            <p>Ratings</p>

            <p>13K</p>
          </Paper>
        </Grid> */}

       <Grid  size={3}>
          <Paper  elevation={6} className='relative overflow-visible p-4 min-h-[160px] flex justify-between items-center w-full' >
            <div className='flex items-center justify-between'>
            <div className='flex flex-col justify-between'>
           <p className='text-sm font-medium text-gray-700'>Ratings</p>

            <p className='text-2xl font-semibold mt-2 mb-2'>13K  <span className='text-green-500 text-base font-normal'>15.6%</span></p>
            <p ><span className='bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm w-fit'>Year of 2025 </span></p>
            </div>
            <img  src={'/5.png'} className='absolute bottom-0 right-[-20px] h-[120px]'/>
            </div>
          </Paper>
        </Grid>
        <Grid size={6}>
          <Paper className='pt-4  pl-2' elevation={5} >
            <div className='flex justify-between items-center'>
            <p className='text-xl font-medium mt-4  text-gray-700 '>Transactions</p>
            <MoreVertIcon className='text-gray-700'/>
            </div>
            <p className='mt-4  text-gray-700'>Total 48.5% Growth 😎 this month</p>
            <div className='flex gap-18 mt-4 '>
              <Box>
                <div>
                  <div className='flex gap-2'>
                     <IncompleteCircleIcon sx={{ color: 'blue',width:'50px',height:'50px'}}/>
                    <div>
                    <p>Sales</p>
                  <p className='font-semibold'>245K</p>
                  </div>
                  </div>
                  
                </div>
              </Box>
                 <Box>
                <div>
                  <div className='flex gap-2'>
                     {/* <IncompleteCircleIcon /> */}
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-15  dark:stroke-lime-500">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                    <div>
                     <p>Users</p>
                  <p className='font-semibold'>245K</p>
                  </div>
                  </div>
                  
                </div>
              </Box>
                <Box>
                <div>
                  <div className='flex gap-2'>
                     {/* <IncompleteCircleIcon /> */}
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-15  dark:stroke-lime-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>

                    <div>
                     <p>Users</p>
                  <p className='font-semibold'>245K</p>
                  </div>
                  </div>
                  
                </div>
              </Box>
            </div>
            
          </Paper>
        </Grid>
      </Grid>
    </Box>
    <Grid container spacing={2} sx={{mt:'20px'}}>
      <Grid size={3}>
        <Paper  elevation={6} className='pt-4  pl-2' >
          <div className='flex justify-between items-center'>
            <p className='text-xl font-medium mt-4  text-gray-700 '>Total Sales</p>
            <MoreVertIcon className='text-gray-700'/>
            </div>
            <p>$23,845</p>
            <LineChart />
        </Paper>
      </Grid>
       <Grid size={3}>
        <Paper  elevation={6} className='pt-4  pl-2' >
          <div className='flex justify-between items-center'>
            <p className='text-xl font-medium mt-4  text-gray-700 '>Total Sales</p>
            <MoreVertIcon className='text-gray-700'/>
            </div>
            <p>$23,845</p>
            <div >
            <BarChart />
            </div>
        </Paper>
      </Grid>
       <Grid size={5}>
        <Paper  elevation={6} className='pt-4  pl-2' >
          <div className='flex justify-between items-center'>
            <p className='text-xl font-medium mt-4  text-gray-700 '>Sales Overview</p>
            <MoreVertIcon className='text-gray-700'/>
            </div>
            <p>$23,845</p>
            <div className='flex gap-4'>
            <LineChart  />
            <div>
            <p>Number of Sales</p>
            <p>$86,400</p>
            </div>
            </div>
        </Paper>
      </Grid>
    </Grid>
    </Box>
  )
}

export default Page
