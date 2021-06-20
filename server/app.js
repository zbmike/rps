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
