import axios from 'axios';

const API_KEY = '82e4290abf2834d01b85ddc255918d0e';
const URL = 'http://api.openweathermap.org/data/2.5/weather';


export const getData = async(city, country) => {
    const data = await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
    return data;
}