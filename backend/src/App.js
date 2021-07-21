const express = require('express');
const app = express();
const mysql= require("mysql");
const dbCredentials = require('./config/dbCredentials') 
const courses = require('./routes/courseRegistration')
const cors = require('cors')


let db = mysql.createConnection(dbCredentials);
global.db = db;

app.use(express.json());

<<<<<<< HEAD

app.use(cors())
const courses = require('./routes/courseRegistration')
const users = require('./routes/userManagement')
=======
>>>>>>> 82fc4273204605ab713de20c829e7af1043485ac

app.use(cors)
app.use('/', courses);
app.use('/', users);

app.use('/', (req, res)=>{
    res.send('User API')
})
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));