const express = require('express');
const router = express.Router();

// API for Finnhub
const finnhub = require('finnhub');
const { search } = require('./auth');
const key = process.env.API_KEY;
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = key
const finnhubClient = new finnhub.DefaultApi();

// router.get('/', function (req, res) {
//     res.render('company/companyProfile', {})
// })

router.get('/:company', function (req, res) {
    let searchItem = req.params.company;
    console.log(searchItem);

    finnhubClient.companyProfile2({'symbol': searchItem}, (error, data, response) => {
    console.log(data)
    finnhubClient.companyBasicFinancials(searchItem, "all", (error, otherData, response) => {
        console.log(data)
        console.log(otherData)
        res.render('company/companyProfile', { data, otherData });
      });
    });
});

module.exports = router;