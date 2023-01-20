const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    console.log('statusCode:', response && response.statusCode);
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback(error, null);
    } else {
      let description = data[0]['description'];
      callback(error, description);
    }
  });
};

module.exports = { fetchBreedDescription };