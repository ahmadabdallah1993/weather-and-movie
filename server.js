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



// http://localhost:3001/getCity?cityName=amman

server.get('/getCity',getCityHandler);

async function getCityHandler(req,res){
    const searchQ = req.query.cityName;
    // console.log(searchQ);
    const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchQ},NC&key=${process.env.key}`;
    // console.log(URL);


try
{
    let apiResult = await axios.get(URL);
    // res.send(apiResult.data);
    let cityArray = apiResult.data.data.map(item =>{
        
        // console.log(item.valid_date);
        return new Weather(item);
        // res.send(item);
    })
    res.send(cityArray);
}
catch{

}
}

class Weather {
    constructor(item){
        this.description = item;
        this.date = item.valid_date;
    }
}

server.listen(PORT,()=>{
  console.log(`i am listening on port ${PORT}`);
})
