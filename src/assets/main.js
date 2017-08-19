let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}
function setHiddenFields() {
    let a = Math.floor(Math.random() * 10000);
    var answer = a.toString();
    while (answer.length <= 4) {
      answer.value = '0' + answer;
    }
}
