const express = require('express');
const app = express();
const mysql= require("mysql");
const courses = require('./routes/courseRegistration');
const users = require('./routes/userManagement');
const notification = require('./routes/notification');
const schedule = require('./routes/schedule');
const records = require('./routes/records');
const fee = require('./routes/fee');
const cors = require('cors');
require('dotenv').config();
app.use(cors());

let db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB
});
global.db = db;

app.use(express.json());
app.use('/', courses);
app.use('/', users);
app.use('/', notification);
app.use('/', schedule);
app.use('/', records);
app.use('/', fee);
app.use('/', (req, res)=>{
    res.send('User API')
})
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));