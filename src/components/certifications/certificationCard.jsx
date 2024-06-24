import Grid from "@mui/material/Grid";
import CertificationItem from "./certificationItem/certificationItem";
import CertificationList from "../../data/certificationData";
import "./certificationCard.css";
//https://mui.com/material-ui/material-icons/?query=w&selected=WhatsApp
const CertificationCard = (props) => {
  const isVisible = props.Visible;
  const lang = props.Lang;
  return (
    <div
      className={`certification-card " fade-in-section ${
        isVisible ? "is-visible" : ""
      }`}
      id="certification-card"
    >
      <Grid container spacing={1} columns={{ xs: 4, sm: 6, md: 12 }}>
        <Grid item xs={12}>
          <h1>{CertificationList[lang].label}</h1>
          <hr />
        </Grid>
        {CertificationList.items.map((cer) => (
          <CertificationItem
            Url={cer.Url}
            Src={cer.Src}
            Name={cer.Name}
            key={cer.Name}
          />
        ))}
      </Grid>
    </div>
  );
};

export default CertificationCard;
