import React from 'react';
import Grid from '@mui/material/Grid';

const Title = () => {
    return <div style={{width:'100%'}}>
        <Grid item xs={4} sm={6} md={12} style={{ textAlign: 'center' }}>
            <h1>CRISTIAN C. MORENO BAYONA</h1>
        </Grid>
        <Grid item xs={4} sm={6} md={12} style={{ textAlign: 'center' }}>
            <h3>INGENIERO DE DESARROLLO SENIOR</h3>
        </Grid>
    </div>;
}

export default Title;