const express = require('express');
const quizRouter = express.Router();
const { showQuizPage } = require('../controllers/quiz');

quizRouter.get('/result', async (req, res) => {
  res.render('pages/result');
});

quizRouter.get('/:quizId', async (req, res) => showQuizPage(req, res));

module.exports = quizRouter;
