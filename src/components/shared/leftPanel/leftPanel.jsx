
import ContactCard from "../../contact/contactCard";
import EducationCard from "../../education/education";
import LanguageCard from "../../languages/languages";
import Grid from '@mui/material/Grid';


import IconButton from '@mui/material/IconButton';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';

import "./leftPanel.css";
import Profile from '../../profile/profile'
import Title from '../../title/title';


function LeftPanel(props) {
  const currentModule= props.CurrentModule;

  return (
    <div className="left-card">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
        <Grid item xs={1} sm={6} md={12} id='avatar-container'>
          <div className="avatar" ></div>
        </Grid>
        <Grid item xs={3} sm={6} md={12} id='title'>
          <Title />
        </Grid>
      </Grid>
      <div >
        <div style={props.Window.Dispositive === 'mobile' ? { display: 'inline' } : { display: 'none' }} >
          <hr />
          <Grid container spacing={{ xs: 0, md: 3 }} columns={{ xs: 3 }}>
            {[
              { icon: <PermContactCalendarIcon fontSize="large" onClick={() => props.ModuleHook('Perfil')} />, text: 'Perfil' },
              { icon: <BusinessCenterIcon fontSize="large" onClick={() => props.ModuleHook('Experiencia')} />, text: 'Experiencia' },
              { icon: <MilitaryTechIcon fontSize="large" onClick={() => props.ModuleHook('Certificaciones')} />, text: 'Certificaciones' },
              { icon: <ContactMailIcon fontSize="large" onClick={() => props.ModuleHook('Contacto')} />, text: 'Contacto' },
              { icon: <SchoolIcon fontSize="large" onClick={() => props.ModuleHook('Educación')} />, text: 'Educación' },
              { icon: <TranslateIcon fontSize="large" onClick={() => props.ModuleHook('Idiomas')} />, text: 'Idiomas' },
            ].map(({ icon, text }) => (
              <Grid item xs={1} style={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                  <IconButton>{icon}</IconButton>
                  <h5 style={{ margin: '0px' }}>{text}</h5>
                </Typography>
              </Grid>
            ))}
          </Grid>
          <Profile className="left-card" Visible={props.Window.Dispositive === 'mobile' && currentModule === 'Perfil'}  />
        </div>

        <ContactCard Visible={currentModule === 'Contacto' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet' } />
        <EducationCard Visible={currentModule === 'Educación' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet' } />
        <LanguageCard Visible={currentModule === 'Idiomas' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet' }/>
      </div>
    </div>
  );
}


export default LeftPanel;