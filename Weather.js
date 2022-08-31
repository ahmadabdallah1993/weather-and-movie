'use strict';

const axios = require('axios');

async function getCityHandler(req,res){
    const searchQ = req.query.cityName;
    // console.log(searchQ);
    const URL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${searchQ},NC&key=${process.env.key}`;
    // console.log(URL);



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

module.exports = getCityHandler;