
import Grid from '@mui/material/Grid';
import "../shared/leftPanel/leftCard/leftCard.css";
import EducationItemCard from './educationItem/educationItemCard';

const EducationCard = () => {
    return (
        <div className="left-card">
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
                          <EducationItemCard
                            Institution='Institución educativa distrital Villa Amalia'
                            Title='Bachiller académico'
                            Year=' (Colombia -2006)'
                        ></EducationItemCard>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default EducationCard;