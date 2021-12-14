# `Scammers Guide`

A Beginner Investor Web Application that allows users to search stocks and receive relevant information needed to make decisions on whether a stock is worth investing into.

[Click Here](https://travel-blog-us.herokuapp.com/) to preview.

## DEMO

![Stock Market Investing App](stockapp.gif)

## HOW TO USE 

`1` Create a new account or login to existing account 


`2` Using the search box, search for any company stock you are interested in investing into 


`3` From the search page, click any stock ticker symbol to view the company profile and company financials


`4` If you like the company and think this company will do well over the long term, simply add the stock to your watchlist


`5` Congrats! You are officially a beginner investor 

## Technologies and Tools Used

* Sequelize user model / migration
* Passport and passport-local for authentication
* Sessions to keep user logged in between pages
* Flash messages for errors and successes
* Passwords that are hashed with BCrypt
* Node.js and Express.js
* EJS Templating and EJS Layouts
* JavaScript
* HTML 
* CSS

## API Used
`1`  FinnHub Stock API ( [here](http://finnhub.io) )

### `Installation Requirements` 

`1` Fork and clone this repository 
`2` Run `npm install` in terminal



### API Routes

| Method | Path | Location | Purpose |
| ------ | ---------------- | -------------- | ------------------- |
| GET | / | server.js | Sign Up  and Login Page |
| GET | /auth/login | auth.js | Login form |
| GET | /auth/signup | auth.js | Signup form |
| POST | /auth/login | auth.js | Login user |
| POST | /auth/signup | auth.js | Creates User |
| GET | /auth/logout | auth.js | Removes session info and logs out user |
| GET | /profile | server.js | Displays user profile |
| GET | /search | controllers/search.js | Allows user to search a stock
| POST | /dashboard | controllers/dashboard.js | Displays search results
| GET | /companyProfile | controllers/companyProfile.js | Allows users to view company profile and financials
