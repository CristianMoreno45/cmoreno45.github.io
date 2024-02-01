import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import DevIcon from "../../shared/buttons/devTool";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ExperienceItem = (props) => {
  const imgUrl = props.Exp.ImgUrl;
  const companyName = props.Exp.CompanyName;
  const companyDescription = props.Exp.CompanyDescription;
  const time = props.Exp.Time;
  const summary = props.Exp.Summary;
  const jobTitle = props.Exp.JobTitle;
  const stackItem = props.Exp.StackItem;
  const activities = props.Exp.Activities;
  const projects = props.Exp.Projects;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Grid item xs={4} sm={6} md={12}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={<Avatar src={imgUrl} aria-label={companyName}></Avatar>}
          title={jobTitle}
          subheader={companyName}
        />

        <CardContent  style={{
                textAlign:"justify"
              }}>
          <Typography variant="body2" color="text.secondary">
            {time}
            <Typography
              paragraph
              style={{
                fontWeight: "bold",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              Resumen
            </Typography >
            {summary}
            <Typography
              paragraph
              style={{
                fontWeight: "bold",
                marginTop: "5px",
                marginBottom: "5px",
              }}
            >
              Stack
            </Typography>
            {stackItem.map((tool) => (
              <DevIcon Tool={tool} key={tool} />
            ))}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" style={{
                textAlign:"justify"
              }} unmountOnExit>
          <CardContent>
            <Typography paragraph style={{ fontWeight: "bold" }}>
              Hitos
            </Typography>
            <Typography paragraph>
              <ul>
                {projects.map((prj) => {
                  return <li key={prj}>{prj}</li>;
                })}
              </ul>
            </Typography>
            <Typography paragraph style={{ fontWeight: "bold" }}>
              Funciones
            </Typography>
            <Typography paragraph>
              <ul>
                {activities.map((act) => {
                  return <li key={act}>{act}</li>;
                })}
              </ul>
            </Typography>
            <Typography paragraph style={{ fontWeight: "bold" }}>
              El negocio
            </Typography>
            <Typography paragraph>{companyDescription}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};
export default ExperienceItem;
