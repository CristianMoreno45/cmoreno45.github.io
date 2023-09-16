
import Grid from '@mui/material/Grid';
import EducationItemCard from './educationItem/educationItemCard';
import "./education.css";

const EducationCard = (props) => {
    const isVisible = props.Visible;
    const EducationData = [
        {
            institution: 'Universidad de la Rioja',
            title: 'MSc. en ingeniería de software y sistemas informarticos',
            year: ' (España -2018)'
        }, {
            institution: 'Universidad Antonio Nariño',
            title: 'Esp. en ingeniería de software',
            year: ' (Colombia -2015)'
        }, {
            institution: 'Fundación Universitaria Compensar ',
            title: 'Grado en ingeniería de software',
            year: ' (Colombia -2013)'
        }, {
            institution: 'Fundación Universitaria Compensar ',
            title: 'Tecnólogo en sistemas de computación',
            year: ' (Colombia -2011)'
        }
    ];

    return (
        <div className={`" fade-in-section ${isVisible ? 'is-visible' : ''}`} id='education-card' >
            <Grid container >
                <Grid item xs={12}>
                    <h1>Educación</h1><hr />
                </Grid>
                <Grid item xs={12}>
                    <Grid container >
                        {
                            EducationData.map(edu => {
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