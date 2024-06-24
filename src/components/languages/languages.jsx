import React from "react";
import Grid from "@mui/material/Grid";

import Level from "./level/level";
import LanguageData from "../../data/languagesData.js";
import "./languages.css";

//https://mui.com/material-ui/material-icons/?query=w&selected=WhatsApp
const LanguageCard = (props) => {
  const isVisible = props.Visible;
  const lang = props.Lang;
  return (
    <div
      className={`language-card " fade-in-section ${
        isVisible ? "is-visible" : ""
      }`}
      id="language-card"
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1>{LanguageData[lang].label}</h1>
          <hr />
        </Grid>
        <Grid item xs={4}>
          {LanguageData[lang].labelEsp}
        </Grid>
        <Grid item xs={8}>
          {LanguageData[lang].nativeLevel}
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={4}>
          {LanguageData[lang].labelEng}
        </Grid>
        <Grid item xs={8}>
          <Level Value={3.5} Label="Listening" />
          <Level Value={4.5} Label="Writing" />
          <Level Value={3.5} Label="Speaking" />
          <Level Value={4} Label="Reading" />
        </Grid>
      </Grid>
    </div>
  );
};

export default LanguageCard;
