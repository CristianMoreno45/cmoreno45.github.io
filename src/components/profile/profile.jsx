import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FormattedMessage } from "react-intl";
import "./profile.css";

const Profile = (props) => {
  const isVisible = props.Visible;

  return (
    <div
      className={`profile fade-in-section ${isVisible ? "is-visible" : ""}`}
      id="profile"
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <h1>
            {" "}
            <FormattedMessage id="profile.label" defaultMessage="About me" />
          </h1>
          <hr />
        </Grid>
        <Grid item style={{ textAlign: "justify" }}>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            <FormattedMessage id="profile.text" defaultMessage="..." />
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;
