//Created by Mueed Qadri
var courseController = {};

courseController.AllTerm = function (req, res) {
  let sql = `SELECT * FROM term`;
  db.query(sql, (err, departments) =>
    checkResults(req, res, err, departments, "Terms found", "Terms not found")
  );
};

courseController.AllCourses = function (req, res) {
  if (
    (req.params.termId || req.query.termId) &&
    (req.params.depId || req.query.depId) &&
    (req.params.uid || req.query.uid)
  ) {
    const termId = req.params.termId ? req.params.termId : req.query.termId;
    const depId = req.params.depId ? req.params.depId : req.query.depId;
    const uid = req.params.uid ? req.params.uid : req.query.uid;
    let formattedDepIds = depId
      .split(",")
      .map((i) => `'${i}'`)
      .join();

    let sql = `SELECT 
        c.*, tc.*, d.*, it.*, IF(userId = ${uid}, 1, 0) AS binary_user_course
    FROM
        term_course AS tc
            JOIN
        department_course AS dc ON dc.courseId = tc.courseId
            JOIN
        instructor AS it ON it.instructorId = tc.instructorId
            JOIN
        course AS c ON c.courseId = tc.courseId
            JOIN
        department AS d ON d.departmentId = dc.departmentId
            LEFT JOIN
        user_course AS uc ON uc.courseId = c.courseId
    WHERE
        tc.termId IN (${termId})
            AND dc.departmentId IN (${formattedDepIds})`;

    db.query(sql, (err, courses) =>
      checkResults(req, res, err, courses, "Courses found", "Courses Not found")
    );
  } else {
    res.status(400).json({
      message: "Bad request",
      success: false,
    });
  }
};

courseController.AllDep = function (req, res) {
  let sql = `SELECT * FROM department;`;

  db.query(sql, (err, departments) =>
    checkResults(
      req,
      res,
      err,
      departments,
      "Departments found",
      "Departments Not found"
    )
  );
};

courseController.GetCourse = function (req, res) {
  if (req.params.courseId || req.query.courseId) {
    const id = req.params.courseId ? req.params.courseId : req.query.courseId;
    let sql = `SELECT * FROM course WHERE courseId = ${id}`;
    db.query(sql, (err, course) =>
      checkResults(req, res, err, course, "Course found", "Course Not found")
    );
  } else {
    res.status(400).json({
      message: "Bad request",
      success: false,
    });
  }
};

courseController.GetUserCourses = function (req, res) {
  if (req.params.uid || req.query.uid) {
    const id = req.params.uid ? req.params.uid : req.query.uid;
    let sql = `SELECT c.*, t.*,d.* FROM
              course AS c
                  INNER JOIN
              term_course AS tc ON c.courseId = tc.courseId
                  INNER JOIN
              term AS t ON tc.termId = t.termId
                  INNER JOIN
              department_course AS dc ON dc.courseId = c.courseId
                  INNER JOIN
              department AS d ON d.departmentId = dc.departmentId
          WHERE
              c.courseId IN (SELECT courseId FROM user_course WHERE userid = ${id})`;

    db.query(sql, (err, courses) =>
      checkResults(req, res, err, courses, "User found", "User Not found")
    );
  } else {
    res.status(400).json({
      message: "Bad request",
      success: false,
    });
  }
};

courseController.AddCourses = function (req, res) {
  const body = req.body;
  if (
    !(Object.keys(body).length === 2) ||
    !body.hasOwnProperty("userId") ||
    !body.hasOwnProperty("courseId")
  ) {
    return res.status(400).json({
      success: false,
      message: "Invalid request!",
    });
  }
  let sql = `INSERT INTO user_course (userId, courseId) VALUES(${body["userId"]} ,${body["courseId"]} )`;
  db.query(sql, function (err) {
    try {
      if (err) {
        throw err;
      }
      updateCourseCapacity(false, body["courseId"]);
      return res.status(201).json({
        success: true,
        message: "Course added!",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  });
};

function updateCourseCapacity(isDrop, courseId){
    let sql = `UPDATE course SET
    filled = filled ${isDrop? '-': '+'} 1
    WHERE  courseId = ${courseId};`;
    db.query(sql, function (err, result) {
      try {
        if (err) throw err;
      } catch (error) {
          console.log(error)
      }
    });
}

courseController.DeleteCourses = function (req, res) {
  if (
    (req.params.courseId || req.query.courseId) &&
    (req.params.uid || req.query.uid)
  ) {
    const uid = req.params.uid ? req.params.uid : req.query.uid;
    const courseId = req.params.courseId
      ? req.params.courseId
      : req.query.courseId;
    let sql = `DELETE FROM user_course WHERE userId = ${uid} AND courseId = ${courseId};`;
    db.query(sql, function (err, result) {
      try {
        if (err) throw err;
        if (result.affectedRows === 0) {
          return res.status(404).json({
            message: "record not found",
            success: false,
          });

        } else {
            updateCourseCapacity(true, courseId);

          return res.status(201).json({
            success: true,
            message: "Course deleted!",
          });
        }
      } catch (error) {}
    });
  } else {
    res.status(400).json({
      message: "Bad request",
      success: false,
    });
  }
};

function checkResults(req, res, err, objects, successMessage, failMessage) {
  try {
    console.log(err);
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
  } catch (ex) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

module.exports = courseController;
