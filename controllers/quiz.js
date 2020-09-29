const fetch = require('node-fetch');
const app = require('../app');
const { Quiz } = require('../models/Quiz');

const url = 'https://opentdb.com/api.php?amount=';
const AMOUNT = '10';

// 正誤判定後、次のクイズ画面へ遷移 // 【TODO】遷移もさせるなら関数名を変更したい
const checkQuizAnswer = (selectedAnswer, correctAnswer, next, res) => {
  if (selectedAnswer === correctAnswer) {
    const currentCounter = localStorage.getItem('counter');
    if (!currentCounter) {
      localStorage.setItem('counter', '1');
    } else {
      const newCounter = parseInt(currentCounter) + 1;
      localStorage.setItem('counter', newCounter.toString());
    }
  }
  res.redirect('/quiz/' + next);
};

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
    checkQuizAnswer,
    res,
  });
};
