function submitForm(event) {
  event.preventDefault();
}

function getMyData() {
  const question =
    document.getElementById("qn").value +
    ". " +
    document.getElementById("q").value;
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;
  const d = document.getElementById("d").value;
  const correctAnswer = document.getElementById("ca").value;
  const newData = { question, answers: { a, b, c, d }, correctAnswer };
  if (
    question != "" &&
    a != "" &&
    b != "" &&
    c != "" &&
    d != "" &&
    correctAnswer != ""
  ) {
    questionBank.push(newData);
    document.getElementById("qCount").innerHTML = questionBank.length;
    document.getElementById("addQuestion").reset();
  }
  return questionBank;
}

function saveMyFile() {
  localStorage.setItem("questionBank", JSON.stringify(questionBank));
  location.replace("quiz.html");
}

const addQuestionButton = document.getElementById("submitQuestion");
const saveButton = document.getElementById("saveQuestionBank");
const questionBank = [];
const newObject = localStorage.getItem("questionBank");
let dataStored = JSON.parse(newObject);

if(dataStored != ""){
  console.log(dataStored);

  //if dataStored is not empty…
  for(i=0; i < dataStored.length; i++){
  questionBank.push(dataStored[i]);
  }
  //iterate through the dataStored array and push each question into the questionBank array
} else {
  for(i=0; i < data.length; i++){
  questionBank.push(data[i]);
  }
  //otherwise, iterate through the data array (brought in in the <head></head> section of our code) and push each question into the questionBank array
}