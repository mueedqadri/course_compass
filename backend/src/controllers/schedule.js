var scheduleController = {};

scheduleController.userSchedule = function (req, res) {
    try {
        if (req.params.id || req.query.id) {
            const id = req.params.id ? req.params.id : req.query.id;
            let sql = 'SELECT * FROM course JOIN user_course WHERE user_course.userId=' + id
                + ' AND user_course.courseId=course.courseId';
            db.query(sql, function (err, course) {
                if (err)
                    throw err;
                if (course.length) {
                    res.status(200).json({
                        success: true,
                        courseInfo: course
                    });
                }
                else {
                    res.status(404).json({
                        message: "Courses not found",
                        success: false
                    });
                }
            })
        }
        else {
            res.status(400).json({
                message: "Bad request",
                success: false
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

module.exports = scheduleController;