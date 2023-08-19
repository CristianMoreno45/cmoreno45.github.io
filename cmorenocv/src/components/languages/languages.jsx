
import Grid from '@mui/material/Grid';

import "../shared/leftPanel/leftCard/leftCard.css";
//https://mui.com/material-ui/material-icons/?query=w&selected=WhatsApp
const LanguageCard = () => {
    const styleIcon = { display: 'flex', justifyContent: 'center', alignItems: 'center', width: '..', height: '..' };
    return (
        <div className="left-card">
            <Grid container spacing={1} >
                <Grid item xs={12}>
                    <h1>Idiomas</h1><hr />
                </Grid>
                <Grid item xs={4} style={styleIcon}>
                    Español
                </Grid>
                <Grid item xs={8}>
                    Nativo
                </Grid>
                <Grid item xs={4} style={styleIcon}>
                   Inglés
                </Grid>
                <Grid item xs={8}>
                    Listening: B1+<br/>
                    Writing: B2+<br/>
                    Speaking: B2<br/>
                    Reading: B2+<br/>
                </Grid>              
            </Grid>
        </div>
    );
}

export default LanguageCard;