
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
import HandymanIcon from '@mui/icons-material/Handyman';
import './mobileMenu.css';
const MobileMenu = (props) => {
   
    const menu = [
        { icon: <PermContactCalendarIcon fontSize="large" />, text: 'Perfil' },
        { icon: <HandymanIcon fontSize="large" />, text: 'Stack' },
        { icon: <TranslateIcon fontSize="large" />, text: 'Idiomas' },
        { icon: <BusinessCenterIcon fontSize="large" />, text: 'Experiencia' },
        { icon: <MilitaryTechIcon fontSize="large" />, text: 'Certificaciones' },
        { icon: <SchoolIcon fontSize="large" />, text: 'Educación' },
        { icon: <></>, text: '' },
        { icon: <ContactMailIcon fontSize="large" />, text: 'Contacto' },
    ];
    return <div style={props.Window.Dispositive === 'mobile' ? { display: 'inline' } : { display: 'none' }} className='mobile-menu' >
        <hr />
        <Grid container spacing={{ xs: 0, md: 3 }} columns={{ xs: 3 }}>
            <Grid item xs={3} style={{ textAlign: 'center' }}>
                <Box className='message-mobile-menu-container'>
                    <h4 className='message-mobile-menu'>
                        Seleccione el ícono para conocer más información
                    </h4>
                </Box>
            </Grid>
            {
                menu.map(({ icon, text }) => (
                    <Grid item xs={1} style={{ textAlign: 'left' }} key={text}>
                        <Typography component={'span'} sx={{ fontSize: 14 }} gutterBottom>
                            <IconButton className='icon-mobile-menu' onClick={() => { props.ModuleHook(text); }}>{icon}</IconButton>
                            <span onClick={() => { props.ModuleHook(text); }} className='text-mobile-menu'>{text}</span>
                        </Typography>
                    </Grid>
                ))}
        </Grid>
    </div>;
}
export default MobileMenu;