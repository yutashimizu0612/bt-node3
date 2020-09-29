const express = require('express');
const { getQuizData } = require('./controllers/quiz');

const app = express();

exports.quizzes = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

const quizRouter = require('./routes/quiz');
app.use('/quiz', quizRouter);

// トップページ
app.get('/', (req, res) => {
  res.render('pages/index');
});

// クイズ開始
app.post('/', async (req, res) => {
  quizzes = await getQuizData();
  res.redirect('/quiz/1');
});

app.listen(3000, function () {
  console.log('Server is started.');
});
