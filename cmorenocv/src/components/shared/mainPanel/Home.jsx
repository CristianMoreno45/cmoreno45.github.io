
import React, { useState } from 'react';
import LeftPanel from '../leftPanel/leftPanel'
import RightPanel from '../rightPanel/rightPanel'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import WindowHook from "../mainPanel/window";

import './Home.css'


function Home() {
    const window = WindowHook();
    const [currentModule, setCurrentModule] = useState('Perfil');
    return <div style={{ display: "flex", height: "100vh", minHeight: "100vh" }}>
        <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid item xs={0} sm={3} md={3}>
                    <LeftPanel Window={window} CurrentModule={currentModule} ModuleHook={setCurrentModule} />
                </Grid>
                <Grid item xs={4} sm={5} md={9}>
                    <RightPanel Window={window} CurrentModule={currentModule} ModuleHook={setCurrentModule} />
                </Grid>
            </Grid>

        </Box>
    </div>

};

export default Home;