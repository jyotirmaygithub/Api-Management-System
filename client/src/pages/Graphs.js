import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import Graph from '../Layout/Graph';

export default function Graphs() {
  return (
    <Container className='mt-5'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Graphical Representation of API Usage
          </Typography>
          <Typography variant="body1" align="center" paragraph>
            Explore the usage of our APIs over time through interactive graphs. 
            Gain insights into how our APIs are being utilized and make informed decisions.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Graph />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
