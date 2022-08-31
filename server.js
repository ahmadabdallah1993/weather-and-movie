'use strict';

const express = require('express');
const server = express();

const cors = require('cors');
server.use(cors());

require('dotenv').config();

const axios = require('axios');


const PORT = process.env.PORT || 3001; 


// http://localhost:3001/

server.get('/',(req,res)=>{
    res.send("hello from the home route");
})


// https://api.themoviedb.org/3/movie/550?api_key=516a315cbe724b34d8db26e97561e390


// http://localhost:3001/movie?cityName=amman
server.get('/movie',getMovieHandler);

function getMovieHandler(req,res){
    const searchM = req.query.searchQuery;
    const url = `https://api.themoviedb.org/3/movie/550?query=${searchM}api_key=${process.env.key2}`;


    axios
    .get(url)
    .then(result =>{
        //do
        
        let movieArray = result.data.map(item =>{
            return item;
        })
        res.send(movieArray);
    })
    .catch(error=>{
        res.send(error);
    })
    







}






// http://localhost:3001/getCity?cityName=amman



server.get('/getCity',getCityHandler);

async function getCityHandler(req,res){
    const searchQ = req.query.cityName;
    // console.log(searchQ);
    const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchQ},NC&key=${process.env.key}`;
    // console.log(URL);


// try
// {
//     let apiResult = await axios.get(URL);
//     // res.send(apiResult.data);
//     let cityArray = apiResult.data.data.map(item =>{
//         // return item;
//         // console.log(item.valid_date);
//         return new Weather(item);
//         res.send(item);
//     })
//     res.send(cityArray);
// }
// catch{

// }


axios
.get(URL)
.then(result =>{
    //do
    
    let cityArray = result.data.data.map(item =>{
        return new Weather(item);
    })
    res.send(cityArray);
})
.catch(error=>{
    res.send(error);
})







}

class Weather {
    constructor(item){
        this.des = JSON.stringify(item.weather.description);
        this.date = item.valid_date;
    }
}

server.listen(PORT,()=>{
  console.log(`i am listening on port ${PORT}`);
})
