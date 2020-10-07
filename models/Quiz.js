const { shuffleQuizAnswers } = require('../functions/shuffleQuizAnswers');

class Quiz {
  constructor(quiz) {
    this.category = quiz.category;
    this.difficulty = quiz.difficulty;
    this.question = quiz.question;
    this.correctAnswer = quiz.correct_answer;
    this.answers = shuffleQuizAnswers([
      quiz.correct_answer,
      ...quiz.incorrect_answers,
    ]);
  }
}

module.exports = { Quiz };
