import axios from 'axios'

const URL= 'https://api.openweathermap.org/data/2.5/weather';
const api='82e4290abf2834d01b85ddc255918d0e'
export const getData= async(city,country)=>
{
    return await axios.get(`${URL}?q=${city},${country}&appid=${api}&units=metric `)
} 