import React from "react";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

import TitleData from "../../data/title";
import "./title.css";

const Title = (props) => {
  const lang = props.Lang;

  const changeLang = (lang) => {
    props.LangHook(lang);
  };
  return (
    <div style={{ width: "100%" }} id="title">
      <Grid item xs={4} sm={6} md={12} className="title-row">
        <h1>{TitleData.name}</h1>
      </Grid>
      <Grid item xs={4} sm={6} md={12} className="title-row">
        <h2>{TitleData[lang].jobTitle}</h2>
      </Grid>
      <Grid item xs={4} sm={6} md={12} className="title-row">
        <Tooltip title="es-LA">
          <IconButton className="dev-icon-container">
            <button
              className=" flag flag-es-la"
              onClick={() => changeLang("es-LA")}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="en-US">
          <IconButton className="dev-icon-container">
            <button
              className=" flag flag-en-us"
              onClick={() => changeLang("en-US")}
            />
          </IconButton>
        </Tooltip>
      </Grid>
    </div>
  );
};

export default Title;
