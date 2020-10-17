//*************************************
// ローカルストレージ設定
//*************************************
localStorage.setItem('counter', '0');

//*************************************
// クイズ開始ボタン押下
//*************************************
console.log(document.getElementById('start'));
document.getElementById('start').addEventListener('click', () => {
  // 取得中の表示
  document.getElementById('title').textContent = '取得中';
  document.getElementById('description').textContent = '少々お待ちください';
  // クイズデータの取得完了後、1問目へ遷移
  fetch('http://localhost:3000/quiz').then(() => {
    window.location.href = 'http://localhost:3000/quiz/1';
  });
});
