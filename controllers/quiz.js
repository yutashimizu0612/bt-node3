const fetch = require('node-fetch');
const { quizzes } = require('../app');
const { Quiz } = require('../models/Quiz');

exports.getQuizData = async () => {
  const url = 'https://opentdb.com/api.php?amount=';
  const AMOUNT = '10';
  try {
    const response = await fetch(url + AMOUNT);
    const data = await response.json();
    quizzes = new Quiz(...data.results);
    return quizzes;
  } catch (error) {
    console.log(error);
  }
};
