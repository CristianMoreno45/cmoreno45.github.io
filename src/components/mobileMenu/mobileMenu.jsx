
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
        { icon: <PermContactCalendarIcon fontSize="large" onClick={() => props.ModuleHook('Perfil')} />, text: 'Perfil' },
        { icon: <BusinessCenterIcon fontSize="large" onClick={() => props.ModuleHook('Experiencia')} />, text: 'Experiencia' },
        { icon: <MilitaryTechIcon fontSize="large" onClick={() => props.ModuleHook('Certificaciones')} />, text: 'Certificaciones' },
        { icon: <ContactMailIcon fontSize="large" onClick={() => props.ModuleHook('Contacto')} />, text: 'Contacto' },
        { icon: <SchoolIcon fontSize="large" onClick={() => props.ModuleHook('Educación')} />, text: 'Educación' },
        { icon: <TranslateIcon fontSize="large" onClick={() => props.ModuleHook('Idiomas')} />, text: 'Idiomas' },
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
                    <Grid item xs={1} style={{ textAlign: 'center' }}>
                        <Typography sx={{ fontSize: 14 }} gutterBottom>
                            <IconButton>{icon}</IconButton>
                            <h5 style={{ margin: '0px' }}>{text}</h5>
                        </Typography>
                    </Grid>
                ))}
        </Grid>
        <Profile className="left-card" Visible={props.Window.Dispositive === 'mobile' && currentModule === 'Perfil'} />
    </div>;
}
export default MobileMenu;