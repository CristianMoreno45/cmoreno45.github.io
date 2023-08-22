import React, { useState } from 'react';
import Profile from '../../profile/profile';
import Experience from '../../experience/experience';
import CertificationCard from '../../certifications/certificationCard';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './rightPanel.css';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';
const RightPanel = () => {

  const [moduleActive, setModule] = useState('Perfil');
  return <div className='right-panel'>
    {/* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3 }}>
      {[
        { icon: <PermContactCalendarIcon fontSize="large" />, text: 'Perfil' },
        { icon: <BusinessCenterIcon fontSize="large" />, text: 'Experiencia' },
        { icon: <MilitaryTechIcon fontSize="large" />, text: 'Certificaciones' },
        { icon: <ContactMailIcon fontSize="large" />, text: 'Contacto' },
        { icon: <SchoolIcon fontSize="large" />, text: 'Educación' },
        { icon: <TranslateIcon fontSize="large" />, text: 'Idiomas' },
      ].map(({ icon, text }) => (
        <Grid item xs={1} style={{ textAlign: 'center' }}>
          <Card key={text} > 
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                <IconButton>{icon}</IconButton>
                <h5>{text}</h5>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid> */}
    <Profile Visible='true' />
    <Experience Visible='true'  />
    <CertificationCard Visible='true' />
  </div>
}

export default RightPanel;