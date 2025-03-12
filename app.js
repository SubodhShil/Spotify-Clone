"use strict";

/**
 *  node modules
*/
const cors = require("cors");
const cookieParser = require("cookie-parser");
require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


/**
 *  Login page 
 */
app.get('/login', (req, res) => {
    res.status(200).send("Welcome to the login page!");
});


app.get('/', (req, res) => {
    res.status(200).send("Welcome to the login page!")
});


const runServer = () => {
    try {
        // await ;
        app.listen(PORT, () => {
            console.log(`Running on: http://localhost:${PORT}/`)
        });
    }
    catch (err) {

    }
};

runServer();