
import Grid from '@mui/material/Grid';
import EducationItemCard from './educationItem/educationItemCard';
import "../shared/leftPanel/leftCard/leftCard.css";
import "./education.css";

const EducationCard = (props) => {
    const isVisible = props.Visible;
    return (
        <div className={`left-card" fade-in-section ${isVisible ? 'is-visible' : ''}`} id='education-card' >
            <Grid container >
                <Grid item xs={12}>
                    <h1>Educación</h1><hr />
                </Grid>
                <Grid item xs={12}>
                    <Grid container >
                        <EducationItemCard
                            Institution='Universidad de la Rioja'
                            Title='MSc. en ingeniería de software y sistemas informarticos'
                            Year=' (España -2018)'
                        ></EducationItemCard>
                        <EducationItemCard
                            Institution='Universidad Antonio Nariño'
                            Title='Esp. en ingeniería de software'
                            Year=' (Colombia -2015)'
                        ></EducationItemCard>
                          <EducationItemCard
                            Institution='Fundación Universitaria Compensar '
                            Title='Grado en ingeniería de software'
                            Year=' (Colombia -2013)'
                        ></EducationItemCard>
                         <EducationItemCard
                            Institution='Fundación Universitaria Compensar '
                            Title='Tecnólogo en sistemas de computación'
                            Year=' (Colombia -2011)'
                        ></EducationItemCard>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default EducationCard;