'use strict';

let getCity = require('./Weather')
let getMovie = require('./Movie');

const express = require('express');
const server = express();

const cors = require('cors');
server.use(cors());

require('dotenv').config();

// const axios = require('axios');


const PORT = process.env.PORT || 3001; 


// http://localhost:3001/

server.get('/',(req,res)=>{
    res.send("hello from the home route");
})


// https://api.themoviedb.org/3/movie/550?api_key=516a315cbe724b34d8db26e97561e390


// http://localhost:3001/movie?cityName=amman
server.get('/movie',getMovie);






// http://localhost:3001/getCity?cityName=amman



server.get('/getCity',getCity);



server.listen(PORT,()=>{
  console.log(`i am listening on port ${PORT}`);
})
