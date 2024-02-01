import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FormattedMessage } from "react-intl";

const ContactData = [
  {
    icon: <LinkedInIcon />,
    content: (
      <a href="https://www.linkedin.com/in/cristian-camilo-moreno-bayona-70b67aa4/">
        {" "}
        CRISTIAN CAMILO MORENO BAYONA
      </a>
    ),
  },
  {
    icon: <AttachEmailIcon />,
    content: (
      <>
        <a href="mailto:ccamilomorenob@gmail.com">ccamilomorenob@gmail.com</a>
        <br />
        <a href="mailto:cmoreno45@uan.edu.co">cmoreno45@uan.edu.co</a>
      </>
    ),
  },
  {
    icon: <WhatsAppIcon />,
    content: (
      <>
        <a href="https://wa.me/+573016370202?text=Hi%2C%20I%20like%20your%20profile">
          (+57) 301 6370202
        </a>
        <br />
      </>
    ),
  },
  {
    icon: <LocationOnIcon />,
    content: (
      <>
        Bogotá D.C. (Colombia) <br />{" "}
        <i style={{ fontSize: "10px" }}>
          {" "}
          <FormattedMessage
            id="contact.comments"
            defaultMessage="Available anywhere in the world"
          />
        </i>
      </>
    ),
  },
];
export default ContactData;
