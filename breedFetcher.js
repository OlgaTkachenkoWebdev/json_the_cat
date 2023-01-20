const request = require('request');

const args = process.argv.slice(2);
let breed = args[0];
const id = breed.slice(0, 4);

request('https://api.thecatapi.com/v1/breeds/search?q=' + id, (error, response, body) => {
  console.log('statusCode:', response && response.statusCode);
  if (error !== null) {
    console.log("Request failed");
    process.exit();
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Breed not found");
  } else {
    let description = data[0]['description'];
    console.log(description);
  }
});
