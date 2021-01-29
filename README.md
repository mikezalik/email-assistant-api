# email-assistant-api

[EMAIL-ASSISTANT-API](https://guarded-crag-28336.herokuapp.com/) is an Express REST API that serves email content and select stock information in JSON format. Clicking on any link provided will result in an error as there is no front end associated with this server.

## Usage 👩‍💻

In order to get started with this app, clone this repo and follow the steps below:

```bash
git clone https://github.com/mikezalik/email-assistant-api.git
cd email-assistant-api
npm install
```

- **Development**: to run the app locally you will need 1 terminal window/tab and a mongodb instance (I prefer to run my development servers through mongo atlas). Be sure to provide your own mongodb url in the keys.js file under exports.DATABASE_URL. Open your browser to `localhost:3000` after you start the server with the command below.

```bash
npm run dev
```

- **Build/Production**: The API may be accessed here: (https://guarded-crag-28336.herokuapp.com/). See the Routes section for specifics on how to access each endpoint. Follow the steps below to deploy your own instance on heroku.

```bash
heroku login
heroku create
git push heroku main
heroku ps:scale web=1
heroku open
```

\*The instructions above assume no procfile and Heroku will default to using the NPM start script in package.json to start the server.

## Routes

Root URL: https://guarded-crag-28336.herokuapp.com/

\*These endpoints should receive an html form, but will take JSON email and password for both registration and login. Be sure to copy bearer token when received. No qoutes.

POST /auth/registration
POST /auth/login

\*Bearer token is required to access the endpoints below. You must first register, copy and paste the bearer token you receive. This is pastable in the AUTH section of Insomnia, no qoutes. prefix is: authorization.

GET /api - Returns all email templates.

GET /api/amc - Returns intraday ticker information for AMC stock.
GET /api/gme - Returns intraday ticker information for GME stock.
GET /api/tsla - Returns intraday ticker information for TSLA stock.
GET /api/amzn - Returns intraday ticker information for AMZN stock.

## Project Summary

The Email Assistant API is designed as a back end server to provide resources and information in JSON format. The idea behind this was to make copy and pastable information accessible as needed and to provide stock information in a central location.

## Design Process 📐

The design phase of this project was relatively straightforward. I wanted to provide a robust microservice with protected endpoints to deliver JSON content. I decided to incorporate an architecture within the service that is extensible as I would like to grow this and other services into a one stop shop for business news and plug and play work tools.

## Development Process 🛠

In the development phase of this application, I began with the base server and mongodb configurations. After I tested these, I decided to build out the models and routes and use Insomnia as a REST client to test each route independently. After each route was accessible without authentication, I built the auth check middleware and incorporated passport local strategies for both registration and login features. I reasoned that each endpoint should remain protected and I use the auth check middleware to verify authentication on each route.

## Tech Used 💻

### Back-End

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/2)
- [Mongoose ODM](https://mongoosejs.com/)
- [Passport](http://www.passportjs.org/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- JSON Web Tokens - authentication

### Testing and Deployment

- [Heroku](https://www.heroku.com/) - cloud PaaS
- [Mongo Atlas](https://www.mongodb.com/cloud/atlas)
- [ESLint](http://eslint.org/) - linting utility
- [Insomnia](https://insomnia.rest/) - REST client
