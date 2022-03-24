const express = require("express");
const fetch = require("node-fetch-commonjs");
require("dotenv").config();

const port = process.env.PORT || 3001;

const app = express();

app.use(express.json());

const testAPI = async () => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${process.env.API_KEY}`
    );
    const data = await response.json();
    console.log(data["Time Series (Daily)"]["2022-03-24"]);
  } catch (e) {
    console.log(e);
  }
};

testAPI();

/* app.listen(port, () => {
  try {
    console.log(`Api running on ${port}`);
  } catch (e) {
    console.log(`Failed to run API:\n\n ${e}`);
  }
}); */
