class Quiz {
  constructor(
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    quiz6,
    quiz7,
    quiz8,
    quiz9,
    quiz10
  ) {
    this.quiz1 = {
      category: quiz1.category,
      difficulty: quiz1.difficulty,
      question: quiz1.question,
      correctAnswer: quiz1.correct_answer,
      answers: [quiz1.correct_answer, ...quiz1.incorrect_answers],
    };
    this.quiz2 = {
      category: quiz2.category,
      difficulty: quiz2.difficulty,
      question: quiz2.question,
      correctAnswer: quiz2.correct_answer,
      answers: [quiz2.correct_answer, ...quiz2.incorrect_answers],
    };
    this.quiz3 = {
      category: quiz3.category,
      difficulty: quiz3.difficulty,
      question: quiz3.question,
      correctAnswer: quiz3.correct_answer,
      answers: [quiz3.correct_answer, ...quiz3.incorrect_answers],
    };
    this.quiz4 = {
      category: quiz4.category,
      difficulty: quiz4.difficulty,
      question: quiz4.question,
      correctAnswer: quiz4.correct_answer,
      answers: [quiz4.correct_answer, ...quiz4.incorrect_answers],
    };
    this.quiz5 = {
      category: quiz5.category,
      difficulty: quiz5.difficulty,
      question: quiz5.question,
      correctAnswer: quiz5.correct_answer,
      answers: [quiz5.correct_answer, ...quiz5.incorrect_answers],
    };
    this.quiz6 = {
      category: quiz6.category,
      difficulty: quiz6.difficulty,
      question: quiz6.question,
      correctAnswer: quiz6.correct_answer,
      answers: [quiz6.correct_answer, ...quiz6.incorrect_answers],
    };
    this.quiz7 = {
      category: quiz7.category,
      difficulty: quiz7.difficulty,
      question: quiz7.question,
      correctAnswer: quiz7.correct_answer,
      answers: [quiz7.correct_answer, ...quiz7.incorrect_answers],
    };
    this.quiz8 = {
      category: quiz8.category,
      difficulty: quiz8.difficulty,
      question: quiz8.question,
      correctAnswer: quiz8.correct_answer,
      answers: [quiz8.correct_answer, ...quiz8.incorrect_answers],
    };
    this.quiz9 = {
      category: quiz9.category,
      difficulty: quiz9.difficulty,
      question: quiz9.question,
      correctAnswer: quiz9.correct_answer,
      answers: [quiz9.correct_answer, ...quiz9.incorrect_answers],
    };
    this.quiz10 = {
      category: quiz10.category,
      difficulty: quiz10.difficulty,
      question: quiz10.question,
      correctAnswer: quiz10.correct_answer,
      answers: [quiz10.correct_answer, ...quiz10.incorrect_answers],
    };
  }
}

module.exports = { Quiz };
