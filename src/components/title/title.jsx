import React from 'react';
import Grid from '@mui/material/Grid';
import {Name, TitleJob } from '../../data/title';

const Title = () => {
    return <div style={{width:'100%'}}>
        <Grid item xs={4} sm={6} md={12} style={{ textAlign: 'center' }}>
            <h1>{Name}</h1>
        </Grid>
        <Grid item xs={4} sm={6} md={12} style={{ textAlign: 'center' }}>
            <h3>{TitleJob}</h3>
        </Grid>
    </div>;
}

export default Title;