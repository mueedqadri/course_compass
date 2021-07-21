const express = require('express');
const app = express();
const mysql= require("mysql");
const dbCredentials = require('./config/dbCredentials') 

let db = mysql.createConnection(dbCredentials);
global.db = db;

app.use(express.json());

const courses = require('./routes/courseRegistration')

app.use('/', courses);

app.use('/', (req, res)=>{
    res.send('User API')
})
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));