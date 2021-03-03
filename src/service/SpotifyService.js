const axios = require("axios");
require('dotenv/config');

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const base64Credentials = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const api = axios.create({
    baseURL: 'https://api.spotify.com/v1'
});

const optionsAuth = {
    headers: {
        Authorization: `Basic ${base64Credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};

module.exports = {
    authorize: () => {
        return axios.post(
                'https://accounts.spotify.com/api/token',
                'grant_type=client_credentials',
                optionsAuth)
            .then(response => response.data)
            .catch(error => console.log(error));
    },
    getData: (token) => {
        const artistId = '4Z8W4fKeB5YxbusRsdQVPb';
        return api.get(
                `/artists/${artistId}/albums/?include_groups=album&limit=5`,
                {headers: {
                    Authorization: `Bearer ${token}`
                }})
            .then(response => response)
            .catch(error => console.log(error));
    },
};

//https://www.ben-townsend.com/getting-started-with-the-spotify-web-api-using-nodejs/

