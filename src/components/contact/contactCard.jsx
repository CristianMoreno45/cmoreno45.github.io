import Grid from "@mui/material/Grid";
import ContactData from "../../data/contactData";
import "./contactCard.css";
import Qr from "../../assets/QR/frame.png";
import { FormattedMessage } from "react-intl";
//https://mui.com/material-ui/material-icons/?query=w&selected=WhatsApp
const ContactCard = (props) => {
  const isVisible = props.Visible;

  return (
    <div
      className={`contact-card" fade-in-section ${
        isVisible ? "is-visible" : ""
      }`}
      id="contact-card"
    >
      <Grid container spacing={1} columns={{ xs: 4, sm: 6, md: 12 }}>
        <Grid item xs={12}>
          <h1>
            <FormattedMessage id="contact.label" defaultMessage="Contact" />
          </h1>
          <hr />
        </Grid>
        <Grid item xs={6} sm={4} md={9}>
          <Grid container spacing={1}>
            {ContactData.map(({ icon, content }) => (
              <>
                <Grid
                  item
                  xs={2}
                  sm={2}
                  md={2}
                  className="contact-icon"
                  key={icon}
                >
                  {icon}
                </Grid>
                <Grid item xs={10} sm={10} md={4}>
                  {content}
                </Grid>
              </>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={6} sm={2} md={3} style={{ textAlign: "center" }}>
          <img
            className="qr-code"
            src={Qr}
            alt="https://cristianmoreno45.github.io/cmoreno45.github.io/"
          />
          <br />
          Ver esto en un sitio
        </Grid>
      </Grid>
    </div>
  );
};

export default ContactCard;
