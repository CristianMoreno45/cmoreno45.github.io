import React from 'react';
import Grid from '@mui/material/Grid';
import {Name, TitleJob } from '../../data/title';
import './title.css';

const Title = () => {
    return <div style={{width:'100%'}} id="title">
        <Grid item xs={4} sm={6} md={12} className='title-row'>
            <h1>{Name}</h1>
        </Grid>
        <Grid item xs={4} sm={6} md={12} className='title-row'>
            <h2>{TitleJob}</h2>
        </Grid>
    </div>;
}

export default Title;