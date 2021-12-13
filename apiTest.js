require('dotenv').config();
const axios = require('axios');
const key = process.env.API_KEY

const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = key
const finnhubClient = new finnhub.DefaultApi();

finnhubClient.symbolSearch('TSLA', (error, data, response) => {
  console.log(data)
});