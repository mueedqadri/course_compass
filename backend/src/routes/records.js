const express = require('express');

const router = express.Router();

const RecordController = require('../controllers/record');
router.get('/grades/:termId/:uid', RecordController.GetUserGrades);
router.get('/grade_terms/:uid', RecordController.GradeTerms);
router.post('/transcripts/add', RecordController.postTranscripts);

module.exports = router;