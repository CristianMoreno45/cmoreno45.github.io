import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ExperienceItem from './experienceItem/experienceItem';
import ExperienceList from '../../data/experienceData';

import './experience.css'

const Experience = (props) => {
    const isVisible = props.Visible;
    return <div className={`experience fade-in-section ${isVisible ? 'is-visible' : ''}`} >
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
                <Grid item xs={4} sm={6} md={12}>
                    <h1>Experiencia</h1><hr />
                </Grid>
                {ExperienceList.map(exp => {
                    return <ExperienceItem Exp={exp} key={exp.JobTitle}/>;
                })}

            </Grid>
        </Box>
    </div>;
}

export default Experience;