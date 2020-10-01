const fetch = require('node-fetch');
const app = require('../app');
const { Quiz } = require('../models/Quiz');
const jsdom = require('jsdom');
const got = require('got');

const url = 'https://opentdb.com/api.php?amount=';
const AMOUNT = '10';

const { JSDOM } = jsdom;

exports.getQuizData = async () => {
  try {
    // '/'のDOMを取得し、ロード中の表示に変更
    const response = await got('http://localhost:3000');
    const { document } = new JSDOM(response.body.toString()).window;
    document.getElementById('title').textContent = '取得中';
    document.getElementById('description').textContent = '少々お待ちください';
    // クイズデータを取得
    const res = await fetch(url + AMOUNT);
    const data = await res.json();
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
