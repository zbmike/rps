const express = require("express");
const cors = require("cors");
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors({ origin: "*" }));

app.get("/api/rps", (req, res) => {
  // For extra credit:
  // To represent a fouth choice (hammer), we can simply query the api again.
  // To make the chance to get any of the four choices equal, 
  // we can make rock represent 0, paper represent 1, scissors represent 2
  // If we get scissors(2), we use the function 
  //    Math.floor(Math.random() * 2)
  // to get either 0 or 1. With two requests from the api, we can get a two digit 
  // binary number, which can range from 0 to 3 in decimal (00, 01, 10, 11).
  // In this way, we can use a 3-choice api to represent 4 choices.
  // However, if we want to only use api data to represent the extra choice (no local random)
  // we can make rock represent 1, paper represent 2, scissors represent 3
  // We can still make two requests and add up the number then mod 4, but the odds are not fair
  // for the four choices. To make all chances fair, we will need to make 4 requests.

  axios(
    "https://private-anon-05a9761e8f-curbrockpaperscissors.apiary-mock.com/rps-stage/throw"
  ).then(result => res.json(result.data)).catch(err => {
      console.log(err);
      const rand = Math.floor(Math.random() * 3);
      switch (rand) {
          case 0:
              res.json({statusCode: 200, body: 'rock'})
              break;
          case 1:
              res.json({statusCode: 200, body: 'paper'})
              break;
          case 2:
              res.json({statusCode: 200, body: 'scissors'})
              break;
          default:
              break;
      }
    });
});

console.log("Server started at port 8000");
app.listen(8000);
