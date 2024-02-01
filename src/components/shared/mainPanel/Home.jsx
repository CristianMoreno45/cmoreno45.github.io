import React, { useState, createContext } from "react";
import LeftPanel from "../leftPanel/leftPanel";
import RightPanel from "../rightPanel/rightPanel";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import WindowHook from "../mainPanel/window";

import dataENUS from "../../../lang/en-US.json";
import dataESCO from "../../../lang/es-CO.json";

import "./Home.css";
import { IntlProvider } from "react-intl";

const Home = () => {
  const window = WindowHook();
  const langContext = createContext();
  const [currentModule, setCurrentModule] = useState("Perfil");
  const [data, setData] = useState(dataENUS);
  const [language, setLanguage] = useState("en-US");

  const changeLang = (language) => {
    setLanguage(language);
    switch (language) {
      case "en-US":
        setData(dataENUS);
        break;
      case "es-CO":
        setData(dataESCO);
        break;
      default:
        setData(dataENUS);
        break;
    }
  };

  return (
    <langContext.Provider value={{ changeLang: changeLang }}>
      <IntlProvider locale={language} messages={data}>
        <div style={{ display: "flex", height: "100vh", minHeight: "100vh" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={0} sm={3} md={3}>
                <button
                  onClick={() => {
                    changeLang("en-US");
                  }}
                >
                  en-US
                </button>
                <button
                  onClick={() => {
                    changeLang("es-CO");
                  }}
                >
                  es-CO
                </button>
                <LeftPanel
                  Window={window}
                  CurrentModule={currentModule}
                  ModuleHook={setCurrentModule}
                />
              </Grid>
              <Grid item xs={4} sm={5} md={9}>
                <RightPanel
                  Window={window}
                  CurrentModule={currentModule}
                  ModuleHook={setCurrentModule}
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </IntlProvider>
    </langContext.Provider>
  );
};

export default Home;
