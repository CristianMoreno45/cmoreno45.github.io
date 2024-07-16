import React from "react";
import Experience from "../../experience/experience";
import CertificationCard from "../../certifications/certificationCard";
import "./rightPanel.css";
import ContactCard from "../../contact/contactCard";

import Grid from "@mui/material/Grid";
import EducationCard from "../../education/education";
import MobileMenuData from "../../../data/mobileMenuData";

const RightPanel = (props) => {
  const currentModule = props.CurrentModule;
  const lang = props.Lang;
  return (
    <div className="right-panel">
      <Grid container spacing={1} columns={{ xs: 4, sm: 6, md: 12 }}>
        <Grid item xs={8}>
          <ContactCard
            Visible={
              currentModule === MobileMenuData[lang].contact ||
              props.Window.Dispositive === "desktop" ||
              props.Window.Dispositive === "tablet"
            }
            Lang={lang}
          />
          <Experience
            Visible={
              currentModule === MobileMenuData[lang].experience ||
              props.Window.Dispositive === "desktop" ||
              props.Window.Dispositive === "tablet"
            }
            Lang={lang}
          />
        </Grid>
        <Grid item xs={4}>
          <EducationCard
            Visible={
              currentModule === MobileMenuData[lang].education ||
              props.Window.Dispositive === "desktop" ||
              props.Window.Dispositive === "tablet"
            }
            Lang={lang}
          />
          <CertificationCard
            Visible={
              currentModule === MobileMenuData[lang].certifications ||
              props.Window.Dispositive === "desktop" ||
              props.Window.Dispositive === "tablet"
            }
            Lang={lang}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default RightPanel;
