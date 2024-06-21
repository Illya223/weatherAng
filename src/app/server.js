const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/geonames', (req, res) => {
  const url = `http://api.geonames.org/searchJSON?username=illya&maxRows=1000&cities=cities15000`;
  request(url, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.status(response.statusCode).send(error);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});