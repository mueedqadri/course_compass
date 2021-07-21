const express = require('express');
const app = express();
const mysql= require("mysql");
const dbCredentials = require('./config/dbCredentials') 
const courses = require('./routes/courseRegistration')
const users = require('./routes/userManagement')

let db = mysql.createConnection(dbCredentials);
global.db = db;

app.use(express.json());
app.use('/', courses);
app.use('/', users);

app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.send('User API')
    next();
})
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));