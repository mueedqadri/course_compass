const express = require('express');
const crypto = require('crypto');
const Router = express.Router();

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

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

// Get user info
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
Router.post('/login/auth', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const success = () => {
        return res.status(201).json({
            message: "User authenticated",
            success: true
        })
    }
    const invalidUser = () => {
        return res.status(201).json({
            message: "User not found",
            success: false
        })
    }
    const invalidPassword = () => {
        return res.status(404).json({
            message: "Invalid password",
            success: false
        })
    }
    const sql = `SELECT password FROM CourseCompass.user WHERE emailId = '${username}';`;
    db.query(sql, (err, results) => {
        if (err) throw err;
        if (results.length === 1) {
            const hash = JSON.parse(results[0].password);
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
})


// Update user details
Router.post('/users/update', (req, res) => {
    const password = req.body["password"] ? JSON.stringify(encrypt(req.body["password"])) : null;
    const firstName = req.body["firstName"] ? String(`'${req.body["firstName"]}'`) : null;
    const lastName = req.body["lastName"] ? String(`'${req.body["lastName"]}'`) : null;
    const bannerId = req.body["bannerId"] ? String(`'${req.body["bannerId"]}'`) : null;
    const emailId = String(`'${req.body["emailId"]}'`);
    const phone = req.body["phone"] ? req.body["phone"] : null;
    const address1 = req.body["address1"] ? String(`'${req.body["address1"]}'`) : null;
    const address2 = req.body["address2"] ? String(`'${req.body["address2"]}'`) : null;
    const city = req.body["city"] ? String(`'${req.body["city"]}'`) : null;
    const state = req.body["state"] ? String(`'${req.body["state"]}'`) : null;
    const zip = req.body["zip"] ? String(`'${req.body["zip"]}'`) : null;
    const country = req.body["country"] ? String(`'${req.body["country"]}'`) : null;

    try {
        const sql = `UPDATE CourseCompass.user SET ? WHERE emailId = ${emailId}`;
        console.log(req.body)
        db.query(sql, [req.body], (err, results) => {
            if (err) throw err;
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
})

Router.post('/users/create', (req, res) => {
        if (req.body["password"] && req.body["emailId"]) {
            try {
                const password = JSON.stringify(encrypt(req.body["password"]));
                const firstName = req.body["firstName"] ? String(`'${req.body["firstName"]}'`) : null;
                const lastName = req.body["lastName"] ? String(`'${req.body["lastName"]}'`) : null;
                const bannerId = req.body["bannerId"] ? String(`'${req.body["bannerId"]}'`) : null;
                const emailId = String(`'${req.body["emailId"]}'`);
                const phone = req.body["phone"] ? req.body["phone"] : null;
                const address1 = req.body["address1"] ? String(`'${req.body["address1"]}'`) : null;
                const address2 = req.body["address2"] ? String(`'${req.body["address2"]}'`) : null;
                const city = req.body["city"] ? String(`'${req.body["city"]}'`) : null;
                const state = req.body["state"] ? String(`'${req.body["state"]}'`) : null;
                const zip = req.body["zip"] ? String(`'${req.body["zip"]}'`) : null;
                const country = req.body["country"] ? String(`'${req.body["country"]}'`) : null;

                // const sql = `INSERT INTO CourseCompass.user (password, firstName, lastName, bannerId, emailId, phone, address1, address2, city, state, zip, country) VALUES ('${password}', ${firstName}, ${lastName}, ${bannerId}, ${emailId}, ${phone}, ${address1}, ${address2}, ${city}, ${state}, ${zip}, ${country});`;
                // const sql = `INSERT INTO CourseCompass.user (password, firstName, lastName, bannerId, emailId, phone, address1, address2, city, state, zip, country) VALUES ?;`;
                const sql = `INSERT INTO CourseCompass.user (password, emailId, firstName) VALUES ?;`;

                console.log(sql)
                console.log(Object.entries(req.body))
                db.query(sql, [Object.entries(req.body)], (err, results) => {
                    if (err) throw err;
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