import Grid from "@mui/material/Grid";
import EducationItemCard from "./educationItem/educationItemCard";
import EducationData from "../../data/educationData";
import { FormattedMessage } from "react-intl";
import "./education.css";

const EducationCard = (props) => {
  const isVisible = props.Visible;

  return (
    <div
      className={`" fade-in-section ${isVisible ? "is-visible" : ""}`}
      id="education-card"
    >
      <Grid container>
        <Grid item xs={12}>
          <h1>
            {" "}
            <FormattedMessage id="education.label" defaultMessage="Education" />
          </h1>
          <hr />
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            {EducationData.map((edu) => {
              return (
                <EducationItemCard
                  Institution={edu.institution}
                  Title={edu.title}
                  Country={edu.country}
                  Year={edu.year}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default EducationCard;
