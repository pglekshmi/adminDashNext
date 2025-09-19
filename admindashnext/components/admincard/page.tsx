'use client'
import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material';



function AdminCard() {
  return (
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
      <Grid container spacing={2}>
        <Grid size={4}>
          <Paper  elevation={6} >
            <p >Ratings</p>

            <p>13K</p>
          </Paper>
        </Grid>
        <Grid size={3}>


          <Paper elevation={6} >
            <p>Ratings</p>

            <p>13K</p>
          </Paper>
        </Grid>
        <Grid size={3}>
          <Paper elevation={6} >
            <p>Ratings</p>

            <p>13K</p>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default AdminCard
