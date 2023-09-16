
import Grid from '@mui/material/Grid';
import SchoolIcon from '@mui/icons-material/School';
import "./educationItemCard.css";

const EducationItemCard = (props) => {
    const institution = props.Institution;
    const title = props.Title;
    const year = props.Year;
    return <>
        <Grid item xs={2} className='icon-education'>
            <SchoolIcon />
        </Grid>
        <Grid item xs={10}>
            <Grid container  >
                <Grid item xs={12} className='education-name'>
                    <h3>{title}</h3>
                </Grid>
                <Grid item xs={12} >
                    {institution}
                </Grid>
                <Grid item xs={12} >
                    {year}
                </Grid>
            </Grid>
        </Grid></>;
}
export default EducationItemCard;