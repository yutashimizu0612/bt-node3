const express = require('express');
const quizRouter = express.Router();
const { showQuizPage } = require('../controllers/quiz');

// 結果表示
quizRouter.get('/result', async (req, res) => {
  res.render('pages/result', { numbersOfCorrectAnswer: 10 });
});

// 各クイズページ
quizRouter.get('/:quizId', async (req, res) => showQuizPage(req, res));

module.exports = quizRouter;
