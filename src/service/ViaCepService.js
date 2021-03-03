const axios = require("axios");

module.exports = {
    getCity: (cep) => {
        return axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.data.localidade)
            .catch(error => console.log(error));
    },
};

