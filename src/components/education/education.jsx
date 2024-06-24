
import Grid from '@mui/material/Grid';
import EducationItemCard from './educationItem/educationItemCard';
import EducationData from '../../data/educationData';
import "./education.css";

const EducationCard = (props) => {
    const isVisible = props.Visible;
    const lang = props.Lang ;
    
    return (
        <div className={`" fade-in-section ${isVisible ? 'is-visible' : ''}`} id='education-card' >
            <Grid container >
                <Grid item xs={12}>
                    <h1>{EducationData['en-US'].label}</h1><hr />
                </Grid>
                <Grid item xs={12}>
                    <Grid container >
                        {
                            EducationData[lang].education.map(edu => {
                                return <EducationItemCard Institution={edu.institution} Title={edu.title} Year={edu.year} />
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default EducationCard;