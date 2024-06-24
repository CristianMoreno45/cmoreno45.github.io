import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { StackList } from "../../data/experienceData";
import StackData from "../../data/stackData.js";
import "./stackCard.css";

const StackCard = (props) => {
  const isVisible = props.Visible;
  const lang = props.Lang;
  return (
    <div
      className={`stack-card fade-in-section ${isVisible ? "is-visible" : ""}`}
      id="stack-card"
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1>{StackData[lang].label}</h1>
          <hr />
        </Grid>
        <Grid item style={{ textAlign: "justify" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {StackList.join(" - ")}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default StackCard;
