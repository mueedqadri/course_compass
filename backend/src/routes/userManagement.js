const express = require('express');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const Router = express.Router();

const tokenSecret = crypto.randomBytes(64).toString('hex')

// Move this to encryption.js
const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

const generateAccessToken = (username) => {
    return jwt.sign(username, tokenSecret);
}

const encrypt = (text) => {

    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

    return {
        iv: iv.toString('hex'),
        content: encrypted.toString('hex')
    };
};

const decrypt = (hash) => {

    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrypted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrypted.toString();
};

// Get user info by id
Router.get('/login/:id', (req, res) => {
    try {
        if (req.params.id || req.query.id) {
            const id = req.params.id ? req.params.id : req.query.id;
            console.log(id);
            let sql = `SELECT * FROM CourseCompass.user WHERE userId = ${id};`;
            console.log(sql);
            db.query(sql, function (err, users) {
                if (err) throw err;
                const user = users[0];
                console.log(user.password);
                const encryptedPassword = encrypt(user.password);
                console.log(encryptedPassword)
                const decryptedPassword = decrypt(encryptedPassword);
                console.log(decryptedPassword)
                if (users) {
                    res.status(200).json({
                        success: true,
                        user: user
                    });
                } else {
                    res.status(404).json({
                        message: "User not found",
                        success: false
                    });
                }
            })
        } else {
            res.status(400).json({
                message: "Bad request",
                success: false
            });
        }
    } catch (ex) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
})

// Authenticate user
Router.post('/users/login', (req, res) => {
    const {emailId, password} = req.body
    console.log("Authentication started...")
    console.log(emailId)
    console.log(password)
    const success = () =>
        res.status(201).json({
            message: "User authenticated",
            success: true,
            token: generateAccessToken(emailId)
        })
    const invalidUser = () =>
        res.status(201).json({
            message: "User not found",
            success: false
        })
    const invalidPassword = () =>
        res.status(404).json({
            message: "Invalid password",
            success: false
        })
    const internalServerError = () =>
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    try {
        const sql = `SELECT password FROM CourseCompass.user WHERE emailId = '${emailId}';`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            if (results) {
                // console.log(results[0].password)
                const hash = JSON.parse(results[0].password);
                // console.log(hash)
                if (decrypt(hash) === password) {
                    console.log("Success")
                    return success()
                } else {
                    console.log("Invalid password")
                    return invalidPassword()
                }
            } else {
                console.log("Invalid user")
                return invalidUser()
            }
        })
    } catch (ex) {
        return internalServerError()
    }
})


// Update user details
Router.post('/users/update', (req, res) => {
    try {
        const sql = `UPDATE CourseCompass.user SET ? WHERE emailId = ${req.body["emailId"]}`;
        console.log(req.body)
        db.query(sql, [req.body], (err, results) => {
            if (err) throw err;
            return res.status(201).json({
                message: "User created",
                success: true,
            })
        })
    } catch (ex) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
})

// Create new user
Router.post('/users/create', (req, res) => {
    const body = req.body;
    if (body["password"] && body["emailId"]) {
        try {
            const col = Object.keys(body).toString()
            const sql = `INSERT INTO CourseCompass.user (${col}) VALUES ?;`;
            body["password"] = JSON.stringify(encrypt(body["password"]))
            console.log(sql)
            console.log(Object.values(body))
            db.query(sql, [[Object.values(body)]], (err, results) => {
                if (err) throw err;
                console.log(results)
                return res.status(201).json({
                    message: "User created",
                    success: true
                })
            })
        } catch (ex) {
            res.status(500).json({
                success: false,
                message: "Internal Server Error"
            });
        }
    } else {
        return res.status(404).json({
            message: "Invalid input",
            success: false
        })
    }
})

module.exports = Router;