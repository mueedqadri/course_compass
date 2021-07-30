const {encrypt, decrypt, generateToken} = require("../config/encryption");
const userManagementController = {};

userManagementController.create = function (req, res) {
    const {body} = req;
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
                    success: true,
                    token: generateToken(body["emailId"])
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
}

userManagementController.authenticate = function (req, res) {
    const {emailId, password} = req.body
    let id;
    console.log("Authentication started...")
    console.log(emailId)
    console.log(password)
    const success = () =>
        res.status(200).json({
            message: "User authenticated",
            success: true,
            id: id,
            token: generateToken(emailId)
        })
    const invalidUser = () =>
        res.status(200).json({
            message: "User not found",
            success: false
        })
    const invalidPassword = () =>
        res.status(200).json({
            message: "Invalid password",
            success: false
        })
    const internalServerError = () =>
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    try {
        const sql = `SELECT password, userId FROM CourseCompass.user WHERE emailId = '${emailId}';`;
        db.query(sql, (err, results) => {
            if (err) throw err;
            if (results) {
                // console.log(results[0].password)
                const hash = JSON.parse(results[0].password);
                id = results[0].userId
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
}

userManagementController.get = function (req, res) {
    console.log("Getting user info...")
    try {
        if (req.params.id || req.query.id) {
            const id = req.params.id ? req.params.id : req.query.id;
            console.log(id);
            let sql = `SELECT * FROM CourseCompass.user WHERE emailId = '${id}';`;
            console.log(sql);
            db.query(sql, function (err, users) {
                if (err) throw err;
                const user = users[0];
                if (users) {
                    res.status(200).json({
                        message: "User found",
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
}

userManagementController.update = function (req, res) {
    try {
        const sql = `UPDATE CourseCompass.user SET ? WHERE emailId = '${req.body["emailId"]}'`;
        console.log(req.body)
        if (req.body.password) {
            req.body.password = JSON.stringify(encrypt(req.body.password))
            console.log(req.body.password)
        }
        db.query(sql, [req.body], (err) => {
            if (err) throw err;
            return res.status(201).json({
                message: "User updated",
                success: true,
            })
        })
    } catch (ex) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

module.exports = userManagementController;