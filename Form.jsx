
import  React, { useEffect, useState } from 'react';
import {Box,TextField,Button,makeStyles} from '@material-ui/core';
import {getData} from '../service/Api'
import Information from '../component/Information'
const usestyles=makeStyles({
    component:{
        padding:'20px',
        background :'lightblue'
    },
    input:{
        color:'green',
        marginRight:15
    },
   button:{
       width:'100px',
       height:'40',
       background:'#e67e22',
       color:'#fff',
       marginTop:'5',
   }
})
const Form=()=>
{
    const classes=usestyles();
    const [data,getWeatherData]=useState();
    const[city,setcity]=useState('');
    const [country,setcountry]= useState('')
    const [click ,handleClick]=useState(false);
    useEffect(()=>
    {
        const getWeather=async()=>{
        city&& await getData(city,country).then(response=>{
            getWeatherData(response.data);
            console.log(response.data)
        })  
    } 
    getWeather();
    handleClick(false);
    }, [click]);
    const handelecityChange=(value)=>
    {
        setcity(value);
    }
    const handleCountryChange=(value)=> {setcountry(value)}
    return(
        <>
        <Box className={classes.component}>
            <TextField
            inputProps={{className:classes.input}}
            onChange={(e)=> handelecityChange( e.target.value)}
            label="City"
            className={classes.input}
            />
            <TextField
            label="Country"
            onChange={(e)=> handleCountryChange(e.target.value)}
            inputProps={{className:classes.input}}
            className={classes.input}/>
            <Button
            variant="contained" 
            className={classes.button}
            onClick={()=>handleClick(true)}
            >GetData</Button>
        </Box>
        <Information data={data}/>
        </>
    );
}

export default Form;