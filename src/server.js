const express = require('express');
import configViewEngine from './configs/viewEngine';
// import initWebRoute from './route/web';
// import initAPIRoute from './route/api';
import initLab3Route from './route/lab3';
import initLab4Route from './route/lab4';
// import connection from './configs/connectDB';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
// const path = require('path');
// const port = 3000

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// setup view engine
configViewEngine(app);

// init web route
// initWebRoute(app);

//init API route
// initAPIRoute(app);

//init Lab3 Route
// initLab3Route(app)
//init Lab4 Route
initLab4Route(app)

// initLab4Route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})