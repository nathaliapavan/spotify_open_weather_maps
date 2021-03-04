const express = require("express");

const viaCepService = require("./service/ViaCepService");
const openWeatherMapsService = require("./service/OpenWeatherMapsService");
const spotifyService = require("./service/SpotifyService");

/*
spotifyService.authorize()
    .then( data => {
        spotifyService.getData(data.access_token)
            .then(response => { console.log(response.data) })
    });
*/

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile('index.html', { root: __dirname });
});

app.get('/playlist', function (req, res) {
    const cep = req.query.cep;
    viaCepService.getCity(cep)
    .then(cidade => {
        openWeatherMapsService.getData(cidade)
            .then(response => {
                console.log(response.main)
            });
    });
    res.send(`Cep enviado ${cep}`);
});

app.listen(3333, () => {
    console.log('🚀 SpotifyOpenWeatherMaps Started!');
});