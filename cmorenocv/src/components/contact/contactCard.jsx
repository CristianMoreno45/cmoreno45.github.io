
import Grid from '@mui/material/Grid';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../shared/leftPanel/leftCard/leftCard.css";
import "./contactCard.css";
//https://mui.com/material-ui/material-icons/?query=w&selected=WhatsApp
const ContactCard = (props) => {
    const isVisible = props.Visible;
    const styleIcon = { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '..', height: '..' };
    return (
        <div className="left-card" id='contact-card' style={isVisible ? { display: 'block' } : { display: 'none' }}>
            <Grid container spacing={1} >
                <Grid item xs={12}>
                    <h1>Contacto</h1><hr />
                </Grid>
                <Grid item xs={2} style={styleIcon}>
                    <LinkedInIcon />
                </Grid>
                <Grid item xs={10}>
                    <a href='https://www.linkedin.com/in/cristian-camilo-moreno-bayona-70b67aa4/'> CRISTIAN CAMILO MORENO BAYONA</a>
                </Grid>
                <Grid item xs={2} style={styleIcon}>
                    <AttachEmailIcon />
                </Grid>
                <Grid item xs={10}>
                    <a href='mailto:ccamilomorenob@gmail.com'>ccamilomorenob@gmail.com</a><br />
                    <a href='mailto:cmoreno45@uan.edu.co'>cmoreno45@uan.edu.co</a>

                </Grid>
                <Grid item xs={2} style={styleIcon}>
                    <PhoneAndroidIcon />
                </Grid>
                <Grid item xs={10}>
                    (+57) 301 6370202<br />
                    (+356) 7951 3183
                </Grid>
                <Grid item xs={2} style={styleIcon}>
                    <WhatsAppIcon />
                </Grid>
                <Grid item xs={10}>
                    (+57) 301 6370202<br />
                </Grid>
                <Grid item xs={2} style={styleIcon}>
                    <LocationOnIcon />
                </Grid>
                <Grid item xs={10}>
                    Bogotá D.C. (Colombia)
                </Grid>
               
            </Grid>
        </div>
    );
}

export default ContactCard;