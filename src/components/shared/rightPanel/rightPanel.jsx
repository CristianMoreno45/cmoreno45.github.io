import React from 'react';
import Experience from '../../experience/experience';
import CertificationCard from '../../certifications/certificationCard';
import './rightPanel.css';
import ContactCard from '../../contact/contactCard';

import Grid from '@mui/material/Grid';
import EducationCard from '../../education/education';
const RightPanel = (props) => {
  const currentModule = props.CurrentModule;
  return <div className='right-panel'>

    <Grid container spacing={1} columns={{ xs: 4, sm: 6, md: 12 }}>
      <Grid item xs={8}>
      <ContactCard Visible={currentModule === 'Contacto' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet'} />
        <Experience Visible={currentModule === 'Experiencia' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet'} />
      </Grid>
      <Grid item xs={4}>
        <EducationCard Visible={currentModule === 'Educación' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet'} />

        <CertificationCard Visible={currentModule === 'Certificaciones' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet'} />
      </Grid>
    </Grid>



  </div>
}

export default RightPanel;