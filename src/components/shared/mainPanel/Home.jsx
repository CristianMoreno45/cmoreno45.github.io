import React, { useState } from "react";
import LeftPanel from "../leftPanel/leftPanel";
import RightPanel from "../rightPanel/rightPanel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import WindowHook from "../mainPanel/window";
import MobileMenuData from "../../../data/mobileMenuData";

import "./Home.css";

function Home() {
  const window = WindowHook();
  
  const [currentLang, setCurrentLang] = useState("en-US");
  const [currentModule, setCurrentModule] = useState(MobileMenuData[currentLang].profile);
  return (
    <div style={{ display: "flex", height: "100vh", minHeight: "100vh" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={0} sm={3} md={3}>
            <LeftPanel
              Window={window}
              CurrentModule={currentModule}
              ModuleHook={setCurrentModule}
              Lang={currentLang}
              LangHook={setCurrentLang}
            />
          </Grid>
          <Grid item xs={4} sm={5} md={9}>
            <RightPanel
              Window={window}
              CurrentModule={currentModule}
              ModuleHook={setCurrentModule}
              Lang={currentLang}
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
