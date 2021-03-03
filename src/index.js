const express = require("express");

const viaCepService = require("./service/ViaCepService");
const  openWeatherMapsService = require("./service/OpenWeatherMapsService");
const  spotifyService = require("./service/SpotifyService");

spotifyService.authorize()
    .then( data => {
        spotifyService.getData(data.access_token)
            .then(response => { console.log(response.data) })
    });


//const city = viaCepService.getCity(17010010)
const city = viaCepService.getCity(18680590)
            .then(cidade => {
                openWeatherMapsService.getData(cidade).then(response => console.log(response.cod));
            });

const app = express();

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.listen(3333, () => {
    console.log('🚀 spotifyOpenWeatherMaps Started!');
});