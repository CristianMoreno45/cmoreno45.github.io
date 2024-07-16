import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SchoolIcon from "@mui/icons-material/School";
import TranslateIcon from "@mui/icons-material/Translate";
import HandymanIcon from "@mui/icons-material/Handyman";
import MobileMenuData from "../../data/mobileMenuData";
import "./mobileMenu.css";
const MobileMenu = (props) => {
  const lang = props.Lang;
  const menu = [
    {
      icon: <PermContactCalendarIcon fontSize="large" />,
      text: MobileMenuData[lang].profile,
    },
    {
      icon: <HandymanIcon fontSize="large" />,
      text: MobileMenuData[lang].stack,
    },
    {
      icon: <TranslateIcon fontSize="large" />,
      text: MobileMenuData[lang].languages,
    },
    {
      icon: <BusinessCenterIcon fontSize="large" />,
      text: MobileMenuData[lang].experience,
    },
    {
      icon: <MilitaryTechIcon fontSize="large" />,
      text: MobileMenuData[lang].certifications,
    },
    {
      icon: <SchoolIcon fontSize="large" />,
      text: MobileMenuData[lang].education,
    },
    { icon: <></>, text: "" },
    {
      icon: <ContactMailIcon fontSize="large" />,
      text: MobileMenuData[lang].contact,
    },
  ];
  return (
    <div
      style={
        props.Window.Dispositive === "mobile"
          ? { display: "inline" }
          : { display: "none" }
      }
      className="mobile-menu"
    >
      <hr />
      <Grid
        container
        spacing={{ xs: 0, md: 3 }}
        columns={{ xs: 3 }}
        className="main-box"
      >
        <Grid item xs={3} style={{ textAlign: "center" }}>
          <Box className="message-mobile-menu-container">
            <h2 className="message-mobile-menu">
              {MobileMenuData[lang].message}
            </h2>
          </Box>
        </Grid>
        {menu.map(({ icon, text }) => (
          <Grid item xs={1} style={{ textAlign: "left" }} key={text}>
            <Typography component={"span"} sx={{ fontSize: 14 }} gutterBottom>
              <IconButton
                className="icon-mobile-menu"
                onClick={() => {
                  props.ModuleHook(text);
                }}
              >
                {icon}
              </IconButton>
              <span
                onClick={() => {
                  props.ModuleHook(text);
                }}
                className="text-mobile-menu"
              >
                {text}
              </span>
            </Typography>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default MobileMenu;
