import React from 'react';
import Grid from '@mui/material/Grid';

import Level from './level/level';
import "./languages.css";



//https://mui.com/material-ui/material-icons/?query=w&selected=WhatsApp
const LanguageCard = (props) => {
    const isVisible = props.Visible;

    return (
        <div className={`language-card " fade-in-section ${isVisible ? 'is-visible' : ''}`} id='language-card' >
            <Grid container spacing={1} >
                <Grid item xs={12}>
                    <h1>Idiomas</h1><hr />
                </Grid>
                <Grid item xs={4} >
                    Español
                </Grid>
                <Grid item xs={8}>
                    Nativo
                </Grid>
                <Grid item xs={12}>
                    <hr />
                </Grid>
                <Grid item xs={4} >
                    Inglés
                </Grid>
                <Grid item xs={8} >
                    <Level Value={3.5} Label='Listening' />
                    <Level Value={4.5} Label='Writing' />
                    <Level Value={3.5} Label='Speaking' />
                    <Level Value={4} Label='Reading' />
                </Grid>
            </Grid>
        </div>
    );
}

export default LanguageCard;
