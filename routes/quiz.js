const express = require('express');
const quizRouter = express.Router();

quizRouter.get('/', async(req, res) => {
  res.render('pages/quiz');
});

module.exports = quizRouter;
