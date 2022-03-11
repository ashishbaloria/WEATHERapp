import React from 'react'
import {Box, makeStyles} from '@material-ui/core'
import logo from '../Images/bg.jpg' 
import Form from './Form'
const usestyles = makeStyles({
    component:{
        height:'100vh',
        width:'60%',
        display:'flex',
        alignItems:'center',
        margin:'0 auto',
        
    },
    leftcontainer:{
        backgroundImage:`url(${logo})`,
        height:'77%', 
        width: '130%',
        backgroundSize:'cover',
        position:'relative',
    },
    rightcontainer:{
        background:'linear-gradient(to right,#e74c3c,#e67e22)',
        height:'77%',
        width:'70%',
        borderRadius:'20px'
    }
})
 const Weather=()=>
 {
     const classes=usestyles(); 
     return(
         <>
         <Box className={classes.component}>
            <Box className={classes.leftcontainer}></Box> 
            <Box className={classes.rightcontainer}>
                <Form/> 
            </Box>
         </Box>
         </>
     );
 }
 export default Weather;