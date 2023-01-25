const quizArray = [
  {
    question: "Java Script de array kavramının anlamı nedir?",
    a: "Dizilimdir.",
    b: "Serbest dalıştır.",
    c: "Strinc bir ifadedir",
    d: "Numberdır",
    correct: "a",
  },
  {
    question: "Türkiyenin başkenti neresidir?",
    a: "Malatya",
    b: "İstanbul",
    c: "Giresun",
    d: "Ankara",
    correct: "d",
  },
  {
    question: " Dünyaya en yakın gezegen hangisidir?",
    a: "jüpiter",
    b: "venüs",
    c: "merkür",
    d: "satürn",
    correct: "c",
  },
  {
    question: " Güneş Sisteminin En Küçük Gezegeni Hangisidir?",
    a: "jüpiter",
    b: "merkür",
    c: "venüs",
    d: "satürn",
    correct: "b",
  },
  {
    question: " Satrançta hangi taş 'L' çizer?",
    a: "kale",
    b: "at",
    c: "vezir",
    d: "fil",
    correct: "b",
  },
];
const question = document.getElementById("question");
const text_a = document.getElementById("text_a");
const text_b = document.getElementById("text_b");
const text_c = document.getElementById("text_c");
const text_d = document.getElementById("text_d");
const submitBtn = document.getElementById("submitBtn");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
  deselected();

  const currentQuizDate = quizArray[currentQuiz];

  question.innerText = currentQuizDate.question;
  text_a.innerText = currentQuizDate.a;
  text_b.innerText = currentQuizDate.b;
  text_c.innerText = currentQuizDate.c;
  text_d.innerText = currentQuizDate.d;
}
function selected() {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselected() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = selected();

  if (answer) {
    if (answer === quizArray[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizArray.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Doğru cevaplama oranınız ${score}/${quizArray.length} dir.</h2><button onclick="location.reload()">Reload<button>`;
    }
  }
});
