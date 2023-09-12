import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GetProfileData from '../../data/profileData';

import './profile.css';
import Title from '../title/title';

const Profile = (props) => {
    const isVisible = props.Visible;

    const nameModule = GetProfileData('ES', 'MODULE');
    const profileValue = GetProfileData('ES', 'PROFILE');

    return <>
        <div className={`profile fade-in-section ${isVisible ? 'is-visible' : ''}`}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 6, md: 12 }}>
                    <Title id='title-profile' />
    
                    <Grid item xs={1} sm={6} md={12}>
                        <h2>{nameModule}</h2>
                    </Grid>
                    <Grid item xs={1} sm={6} md={12} style={{ textAlign: 'justify' }}>
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {profileValue}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    {/* <Grid item xs={1} sm={6} md ={6} style={{ textAlign: 'justify' }}>
                        <p>Soy ingeniero de sistemas con más de 10 años de experiencia en el negocio de tecnología, apasionado por la investigación y altamente comprometido con las entregas. He participado en el diseño, desarrollo y entrega de soluciones de software de calidad como también el de la orientación técnica a diferentes niveles, también he liderado diferentes células en marcos de trabajo tanto agiles como tradicionales para la construcción de soluciones complejas, escalables y resistentes a la demanda de los clientes. Aunque cuento con conocimiento en Nube, modelos de datos, pruebas no funcionales, automatizaciones de pruebas y DevOps mi fuerte es el desarrollo de software propiamente dicho. Cuento con dos Posgrados en el desarrollo de software que en conjunto con la experiencia me ayudan a tomar decisiones desde las buenas prácticas. </p>
                    </Grid> */}
                    {/* <Grid item xs={1} sm={6} md ={6}>
                        <video width="100%" controls >
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/mp4" />
                        </video>
                    </Grid> */}
                </Grid>
            </Box>
        </div>
    </>;
}

export default Profile;
