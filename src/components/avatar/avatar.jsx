import Grid from '@mui/material/Grid';
import './avatar.css';

function AvatarComponent(props) {
    return <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
        <Grid item xs={1} sm={6} md={12} id='avatar-container'>
            <div className="avatar" ></div>
        </Grid>
    </Grid>;
}
export default AvatarComponent;