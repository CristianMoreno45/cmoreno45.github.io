
import ContactCard from "../../contact/contactCard";
import EducationCard from "../../education/education";
import LanguageCard from "../../languages/languages";
import Grid from '@mui/material/Grid';

import "./leftPanel.css";
import Title from '../../title/title';
import MobileMenu from "../../mobileMenu/mobileMenu";

function LeftPanel(props) {
  const currentModule = props.CurrentModule;

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
      <MobileMenu  Window={props.Window} CurrentModule={props.CurrentModule} ModuleHook={props.ModuleHook}  />
      <div >
        <ContactCard Visible={currentModule === 'Contacto' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet'} />
        <EducationCard Visible={currentModule === 'Educación' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet'} />
        <LanguageCard Visible={currentModule === 'Idiomas' || props.Window.Dispositive === 'desktop' || props.Window.Dispositive === 'tablet'} />
      </div>
    </div>
  );
}


export default LeftPanel;