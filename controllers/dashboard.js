const express = require('express');
const router = express.Router();

// API for Finnhub
const finnhub = require('finnhub');
const key = process.env.API_KEY;
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = key
const finnhubClient = new finnhub.DefaultApi();

// router.get('/',function(req,res){
//     res.render('company/dashboard', {})
// })

router.post('/', function(req, res) {
    console.log(req.body.symbol.toUpperCase())
    let searchItem = req.body.symbol.toUpperCase();
    console.log(searchItem);
    finnhubClient.symbolSearch(searchItem, (error, data, response) => {
      console.log('---- company profile results that came from searchSymbol page ------');
      console.log(response);
      console.log(data);
      res.render('company/dashboard', { data });
    });
  });

module.exports = router;``