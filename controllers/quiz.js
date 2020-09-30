const fetch = require('node-fetch');
const app = require('../app');
const { Quiz } = require('../models/Quiz');

const url = 'https://opentdb.com/api.php?amount=';
const AMOUNT = '10';

exports.getQuizData = async () => {
  try {
    const response = await fetch(url + AMOUNT);
    const data = await response.json();
    app.quizzes = new Quiz(...data.results);
    return app.quizzes;
  } catch (error) {
    console.log(error);
  }
};

exports.showQuizPage = (req, res) => {
  const currentId = req.params.quizId;
  const currentQuiz = app.quizzes['quiz' + currentId];
  console.log('currentQuiz', currentQuiz);
  res.render('pages/quiz', {
    id: currentId,
    next: currentId === AMOUNT ? 'result' : parseInt(currentId) + 1,
    quiz: currentQuiz,
  });
};
