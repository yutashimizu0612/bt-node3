const express = require('express');
const quizRouter = express.Router();
const { getQuizData, showQuizPage } = require('../controllers/quiz');

// クイズデータを取得
quizRouter.get('/', async (req, res) => {
  const response = await getQuizData();
  res.header('Content-Type', 'application/json; charset=utf-8');
  res.send(response);
});

// 結果表示
quizRouter.get('/result', async (req, res) => {
  res.render('pages/result');
});

// 各クイズページ
quizRouter.get('/:quizId', async (req, res) => showQuizPage(req, res));

module.exports = quizRouter;
