import React from "react";
import Grid from "@mui/material/Grid";
import Level from "./level/level";
import { FormattedMessage } from "react-intl";
import "./languages.css";

//https://mui.com/material-ui/material-icons/?query=w&selected=WhatsApp
const LanguageCard = (props) => {
  const isVisible = props.Visible;

  return (
    <div
      className={`language-card " fade-in-section ${
        isVisible ? "is-visible" : ""
      }`}
      id="language-card"
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1>
            {" "}
            <FormattedMessage id="languages.label" defaultMessage="Languages" />
          </h1>
          <hr />
        </Grid>
        <Grid item xs={4}>
          <FormattedMessage id="languages.spanish" defaultMessage="Spanish" />
        </Grid>
        <Grid item xs={8}>
          <FormattedMessage
            id="languages.spanish.level"
            defaultMessage="Native"
          />
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={4}>
          <FormattedMessage id="languages.english" defaultMessage="English" />
        </Grid>
        <Grid item xs={8}>
          <Level Value={3.5} LabelId="languages.english.level.listening" />
          <Level Value={4.5} LabelId="languages.english.level.writing" />
          <Level Value={3.5} LabelId="languages.english.level.speaking" />
          <Level Value={4} LabelId="languages.english.level.reading" />
        </Grid>
      </Grid>
    </div>
  );
};

export default LanguageCard;
