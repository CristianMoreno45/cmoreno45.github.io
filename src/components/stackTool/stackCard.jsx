import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { StackList } from '../../data/experienceData';
import './stackCard.css';

const StackCard = (props) => {
    const isVisible = props.Visible;

    return <>
        <div className={`stack fade-in-section ${isVisible ? 'is-visible' : ''}`} id='stack-card'>
            <Grid container spacing={1} >
                <Grid item xs={12}>
                    <h1>Stack tecnológico</h1><hr />
                </Grid>
                <Grid item style={{ textAlign: 'justify' }}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {StackList.join(" - ")}
                    </Typography>
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

        </div>
    </>;
}

export default StackCard;
