
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import TranslateIcon from '@mui/icons-material/Translate';
import InfoIcon from '@mui/icons-material/Info';
import Profile from '../profile/profile';

const MobileMenu = (props) => {
    const currentModule = props.CurrentModule;
    const menu = [
        { icon: <PermContactCalendarIcon fontSize="large" />, text: 'Perfil' },
        { icon: <BusinessCenterIcon fontSize="large" />, text: 'Experiencia' },
        { icon: <MilitaryTechIcon fontSize="large" />, text: 'Certificaciones' },
        { icon: <ContactMailIcon fontSize="large" />, text: 'Contacto' },
        { icon: <SchoolIcon fontSize="large" />, text: 'Educación' },
        { icon: <TranslateIcon fontSize="large" />, text: 'Idiomas' },
    ];
    return <div style={props.Window.Dispositive === 'mobile' ? { display: 'inline' } : { display: 'none' }} >
        <hr />
        <Grid container spacing={{ xs: 0, md: 3 }} columns={{ xs: 3 }}>
            <Grid item xs={3} style={{ textAlign: 'center' }}>
                <Box sx={{ border: '1px dashed grey', padding: '5px' }}>
                    <h4 style={{ margin: '0px', fontStyle: 'italic' }}>
                        Seleccione el ícono para conocer más información
                    </h4>
                </Box>
            </Grid>
            {
                menu.map(({ icon, text }) => (
                    <Grid item xs={1} style={{ textAlign: 'left' }} key={text}>
                        <Typography component={'span'} sx={{ fontSize: 14 }} gutterBottom>
                            <IconButton onClick={() => { props.ModuleHook(text); }}>{icon}</IconButton>
                            <span style={{ margin: '0px' }}>{text}</span>
                        </Typography>
                    </Grid>
                ))}
        </Grid>
    </div>;
}
export default MobileMenu;