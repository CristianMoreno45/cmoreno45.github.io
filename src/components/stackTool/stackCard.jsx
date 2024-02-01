import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";

import { StackList } from "../../data/experienceData";
import "./stackCard.css";

const StackCard = (props) => {
  const isVisible = props.Visible;

  return (
    <>
      <div
        className={`stack-card fade-in-section ${
          isVisible ? "is-visible" : ""
        }`}
        id="stack-card"
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <h1>
              {" "}
              <FormattedMessage
                id="stack.label"
                defaultMessage="Technology stack"
              />
            </h1>
            <hr />
          </Grid>
          <Grid item style={{ textAlign: "justify" }}>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {StackList.join(" - ")}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default StackCard;
