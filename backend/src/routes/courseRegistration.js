const express = require('express');

const router = express.Router();

const CourseController = require('../controllers/courseRegistration');
router.get('/courses/:termId/:depId/:uid', CourseController.AllCourses);
router.get('/course/:courseId', CourseController.GetCourse);
router.get('/department/', CourseController.AllDep);
router.get('/terms/', CourseController.AllTerm);
router.get('/user_courses/:uid', CourseController.GetUserCourses);
router.post('/courses/add/', CourseController.AddCourses);
router.delete('/courses/delete/:uid/:courseId', CourseController.DeleteCourses); 
module.exports = router;