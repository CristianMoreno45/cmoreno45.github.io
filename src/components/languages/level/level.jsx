import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';


const labels = {
    0.5: 'A1-',
    1: 'A1',
    1.5: 'A1+',
    2: 'A2',
    2.5: 'A2+',
    3: 'B1',
    3.5: 'B1+',
    4: 'B2',
    4.5: 'B2+',
    5: 'C1',
    5.5: 'C1+',
    6: 'C2'
};


const Level = (props) => {
    const label = props.Label;
    const [value, setValue] = useState(props.Value);
    const [hover, setHover] = useState(props.Value);

    return <> <Typography component="legend" style={{fontSize:'14px'}}  >{label}</Typography>
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating name="listening"
                value={value}
                max={6}
                readOnly
                precision={0.5}
                onLoad={(event, newValue) => {
                    setValue(newValue);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            /> {value !== null && (
                <Box sx={{ ml: 3 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    </>;
}

export default Level;