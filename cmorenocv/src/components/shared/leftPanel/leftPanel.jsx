
import ContactCard from "../../contact/contactCard";
import EducationCard from "../../education/education";
import LanguageCard from "../../languages/languages";
import Grid from '@mui/material/Grid';

import Title from '../../title/title';

import "./leftPanel.css";

function LeftPanel() {
  return (
    <div className="left-panel ">

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
        <Grid item xs={1} sm={6} md={12} id='avatar-container'>
          <div className="avatar"></div>
        </Grid>
        <Grid item xs={3} sm={6} md={12} id='title'>
          <Title />
        </Grid>
      </Grid>
      <div >
        <ContactCard Visible='true' />
        <EducationCard Visible='true' />
        <LanguageCard Visible='true' />
      </div>
    </div>
  );
}

export default LeftPanel;