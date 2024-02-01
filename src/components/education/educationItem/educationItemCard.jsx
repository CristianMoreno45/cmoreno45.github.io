
import Grid from '@mui/material/Grid';
import SchoolIcon from '@mui/icons-material/School';
import { FormattedMessage } from "react-intl";
import "./educationItemCard.css";

const EducationItemCard = (props) => {
    const institution = props.Institution;
    const title = props.Title;
    const year = props.Year;
    const country = props.Country;
    return <>
        <Grid item xs={2} className='icon-education'>
            <SchoolIcon />
        </Grid>
        <Grid item xs={10}>
            <Grid container  >
                <Grid item xs={12} className='education-name'>
                    <h3> <FormattedMessage id={title} defaultMessage={title} /></h3>
                </Grid>
                <Grid item xs={12} >
                <FormattedMessage id={institution} defaultMessage={institution} />
                </Grid>
                <Grid item xs={12} >
                    (<FormattedMessage id={country} defaultMessage={country} /> - {year})
                </Grid>
            </Grid>
        </Grid></>;
}
export default EducationItemCard;