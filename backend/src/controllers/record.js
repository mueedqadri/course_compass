var recordController = {};

//method to get terms that contains grades of a student
recordController.GradeTerms = function (req, res) {
    if ((req.params.uid || req.query.uid)) {
        const termId = req.params.termId ? req.params.termId : req.query.termId;
        const uid = req.params.uid ? req.params.uid : req.query.uid;
        console.log(uid + termId);
        let sql = `select distinct(grade.termid),term.term from grade,course,term where grade.termid = term.termId and course.courseId = grade.courseid and grade.userId = ${uid}`;
        db.query(sql, (err, terms) =>
            checkResults(req, res, err, terms, "Terms found", "Terms not found")
        );
    }
};

//method to get grades of student
recordController.GetUserGrades = function (req, res) {
    if ((req.params.termId || req.query.termId) && (req.params.uid || req.query.uid)) {
        const termId = req.params.termId ? req.params.termId : req.query.termId;
        const uid = req.params.uid ? req.params.uid : req.query.uid;
        console.log(uid + termId);

        let sql = `select gradeid,userid, grade.termid,term.term,course.courseId,course.courseCode,course.title,grade.grade,earnedcredits,earnedcredits from grade,course,term where grade.termid = term.termId and course.courseId = grade.courseid and grade.userId = ${uid} and term.termId = ${termId}`;

        db.query(sql, (err, grades) => checkResults(
            req,
            res,
            err,
            grades,
            "Grades found",
            "Grades Not found"
        ));
    }
    else {
        return res.status(400).json({
            message: "Bad request",
            success: false
        });
    }
};

//method to save form details to database
recordController.postTranscripts = function (req, res) {

    const bannerid = req.body.bannerid;
    const copies = req.body.copies;
    const address = req.body.address;
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const country = req.body.country;

    console.log(bannerid, copies, address, city, state, zip, country)

    if (bannerid && copies && address && city && state && zip && country) {
        console.log("request in here")


        let sql = `INSERT INTO transcripts (bannerid, copies,address,city,state,zip,country) VALUES('${bannerid}' ,'${copies}','${address}','${city}','${state}','${zip}','${country}' )`;
        console.log(sql);
        db.query(sql, function (err) {
            try {
                if (err) {
                    throw err;
                }
                return res.status(201).json({
                    success: true,
                    message: "Transcripts request sent!"
                });
            } catch (error) {
                console.log(error)
                return res.status(500).json({
                    success: false,
                    message: "Internal Server Error"
                });
            }
        })

    }
    else {
        return res.status(400).json({
            message: "Bad request",
            success: false
        });
    }
};


//A reusable method to check data from database and submit response to frontend
function checkResults(req, res, err, objects, successMessage, failMessage) {

    try {
        if (err) throw err;
        if (!objects || !objects.length) {
            res.status(404).json({
                message: failMessage,
                success: false,
            });
        } else {
            res.status(200).json({
                message: successMessage,
                success: true,
                data: objects,
            });
        }
    }
    catch (ex) {
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

module.exports = recordController;
