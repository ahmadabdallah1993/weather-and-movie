'use strict';

const axios = require('axios');


function getMovieHandler(req,res){
    const searchM = req.query.searchQuery;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.key2}&query=${searchM}`;


    axios
    .get(url)
    .then(result =>{
        //do
        
        let movieArray = result.data.results.map(item =>{
            return item;
        })
        res.send(movieArray);
    })
    .catch(error=>{
        res.send(error);
    })

}






module.exports = getMovieHandler;