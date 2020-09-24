const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('pages/index');
})

app.post('/', function(req, res) {
  res.render('pages/index');
})

app.get('/result', function(req, res) {
  res.render('pages/result');
})

app.listen(3000, function () {
  console.log('Server is started.');
});
