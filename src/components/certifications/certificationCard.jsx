
import Grid from '@mui/material/Grid';
import CertificationItem from './certificationItem/certificationItem';
import CertificationList from '../../data/certificationData';
import "../shared/leftPanel/leftCard/leftCard.css";
import './certificationCard.css'
//https://mui.com/material-ui/material-icons/?query=w&selected=WhatsApp
const CertificationCard = (props) => {
    const isVisible = props.Visible;
    
    return (
        <div className={`left-card" fade-in-section ${isVisible ? 'is-visible' : ''}`} id='certification-card' >
            <Grid container spacing={1} columns={{ xs: 2, sm: 6, md: 12 }}>
                <Grid item xs={12} >
                    <h1>Certificaciones</h1>
                </Grid>
                {CertificationList.map(cer => <CertificationItem Url={cer.Url} Src={cer.Src} Name={cer.Name} key={cer.Name}/>)}
            </Grid>
        </div>
    );
}

export default CertificationCard;