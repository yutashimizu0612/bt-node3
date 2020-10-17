//*************************************
// 正答判定
//*************************************
document.querySelectorAll('.js-answer-button').forEach(button => {
  button.addEventListener('click', e => {
    const selectedAnswer = e.target.dataset.answer;
    const correctAnswer = document.getElementById('js-answer-buttons').dataset
      .correctAnswer;
    if (selectedAnswer === correctAnswer) {
      const newCounter = parseInt(localStorage.getItem('counter')) + 1;
      localStorage.setItem('counter', newCounter.toString());
    }
  });
});
