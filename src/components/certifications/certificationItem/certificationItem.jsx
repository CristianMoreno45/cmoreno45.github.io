import React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
const CertificationItem = (props) => {
    const styleIcon = { display: 'flex', justifyContent: 'left', alignItems: 'center', width: '..', height: '..' };
    const url = props.Url;
    const name = props.Name;
    const src = props.Src;
    return <Grid item xs={1} sm={2} md={3} style={styleIcon}>
        <Tooltip title={name}>
            <IconButton>
                <a href={url} target='_blank' rel="noreferrer">
                    <Avatar sx={{ width: 60, height: 60 }} src={src} aria-label={name} />
                </a>
            </IconButton>
            
        </Tooltip>
        <p style={{fontSize:'xx-small'}} >{name}</p>
    </Grid>;
}

export default CertificationItem;