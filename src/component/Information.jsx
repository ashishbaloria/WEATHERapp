import React from 'react'
import {Box,makeStyles,Typography} from '@material-ui/core';
const usestyles=makeStyles({
    component:{
        margin :10,
    },
    row:{
        padding :10,
        fontSize :20,
        letterSpacing:2
    }
}); 
const Information=({ data })=>
{
    const classes =usestyles();

    return(
         data ?
        <Box className={classes.component} >
            <Typography className={classes.row}>Location <Box component="span">{data.name},{data.sys.country}</Box></Typography>
            <Typography  className={classes.row}>Temperature{data.main.temp}</Typography>
            <Typography  className={classes.row}>Humidity {data.main.humidity}</Typography>
            <Typography className={classes.row}>Sunrise {new Date (data.sys.sunrise*1000).toLocaleTimeString()}</Typography>
            <Typography className={classes.row}>Sunset {new Date (data.sys.sunset*1000).toLocaleTimeString()}</Typography>
            <Typography className={classes.row}>Cloud {data.clouds.all}%</Typography>
        </Box> : ''
        
     
    );

}
export default Information; 