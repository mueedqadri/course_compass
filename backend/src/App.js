const express = require('express');
const app = express();
const mysql= require("mysql");
const dbCredentials = require('./config/dbCredentials'); 
const courses = require('./routes/courseRegistration');
const users = require('./routes/userManagement');
const cors = require('cors');

let db = mysql.createConnection(dbCredentials);
global.db = db;

app.use(express.json());
app.use(cors);
app.use('/', courses);
app.use('/', users);

app.use('/', (req, res)=>{
    res.send('User API')
})
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));