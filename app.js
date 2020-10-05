const express = require('express');

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

app.listen(3000, function () {
  console.log('Server is started.');
});
