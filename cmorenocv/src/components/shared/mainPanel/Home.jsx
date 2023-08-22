
import React from 'react';
import LeftPanel from '../leftPanel/leftPanel'
import RightPanel from '../rightPanel/rightPanel'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Home.css'

function Home() {
    return <div style={{ display: "flex", height: "100vh", minHeight: "100vh" }}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid item xs={0} sm={3} md={3}>
                    <LeftPanel />
                </Grid>
                <Grid item xs={4} sm={5} md={9}>
                    <RightPanel />
                </Grid>
            </Grid>

        </Box>
    </div>

};

export default Home;