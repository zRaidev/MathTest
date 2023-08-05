const bar = document.querySelector(".fa-bars");
const aside = document.querySelector(".left-aside");
const restAside = document.querySelector(".rest-aside")
const h1 = document.querySelector("h1");
const additionOp = document.querySelector(".addition-op");
const subtractionOp = document.querySelector(".subtraction-op");
const multOp = document.querySelector(".mult-op");
const mixOp = document.querySelector(".mix-op");
const asideTitle = document.querySelector(".title-container");
const difficultiesDiv = document.querySelector(".difficulties");
const operationsDiv = document.querySelector(".operations");
const asideH2 = document.querySelector(".h2-asd");
const arrowLeft = document.querySelector(".fa-arrow-left")
const easy = document.querySelector(".easy");
const mid = document.querySelector(".mid");
const hard = document.querySelector(".hard");
const extreme = document.querySelector(".extreme");
const opContainer = document.querySelector(".op-container");
const opName = document.querySelector(".operation-name");
const finalResults = document.querySelector(".final-results");
const bgResults = document.querySelector(".bg-results");
const extStyle = document.querySelector(".external-style");
const responsiveAside = document.querySelector(".responsive-aside");
const correctLi = document.querySelector(".correct__li");
const incorrectLi = document.querySelector(".incorrect__li");
const totalLi = document.querySelector(".total__li");
const totalPercentageLi = document.querySelector(".total-percentaje__li");
const rightAside = document.querySelector(".right-aside");

let correct = 0;
let incorrect = 0;

additionOp.addEventListener("click", () => opDifficulties("Addition"));
subtractionOp.addEventListener("click", () => opDifficulties("Subtraction"));
multOp.addEventListener("click", () => opDifficulties("Multiplication"));
mixOp.addEventListener("click", () => opDifficulties("Mix"));

function opDifficulties(operation) {
  let opString = operation.toLowerCase()
  operationsDiv.style.display = "none";
  difficultiesDiv.style.display = "block";
  arrowLeft.style.display = "inline"
  asideH2.innerHTML = `${operation} Difficulties`
  selectionsArray = [operation]
};

easy.addEventListener("click", () => {
  finalOptions("Easy");
  correct = 0;
  incorrect = 0;
});
mid.addEventListener("click", () => {
  finalOptions("Mid");
  correct = 0;
  incorrect = 0;
});
hard.addEventListener("click", () => {
  finalOptions("Hard");
  correct = 0;
  incorrect = 0;
});
extreme.addEventListener("click", () => {
  finalOptions("Extreme");
  correct = 0;
  incorrect = 0;
});

function finalOptions(difficulty) {
  let diffString = difficulty.toLowerCase()
  //console.log(diffString)
  selectionsArray.push(difficulty);
  if (selectionsArray.length == 3) selectionsArray.splice(1, 1)
  readyToStart = true;




  function myFunction(x) {
    if (x.matches) { // If media query matches
      aside.style.animation = "aside-disappears .4s forwards";
      aside.classList.remove("show");
    }
  }
  let x = window.matchMedia("(max-width: 1199.97px)")
  myFunction(x)
  x.addEventListener("change", myFunction);


  if (readyToStart) {
    //console.log("Ready to Start");
    if (selectionsArray[0] == 'Addition') addition(diffString);
    else if (selectionsArray[0] == 'Subtraction') subtraction(diffString);
    else if (selectionsArray[0] == 'Multiplication') multiplication(diffString);
    else if (selectionsArray[0] == 'Mix') mixOperation(diffString);
  }
}




const restartOp = () => finalOptions(selectionsArray[1]);

function generalOperationSistem(answer, ops) {
  const inputNum = document.getElementById("number-input");
  opName.innerHTML = `${selectionsArray[0]} ${selectionsArray[1]}`;

  inputNum.addEventListener("keyup", e => {
    let result = parseInt(document.getElementById("number-input").value);
    if (e.key === 'Enter') {
      if (result == answer) {
        extStyle.innerHTML = `#number-input { animation: correct-answer .46s forwards; }`
        correctLi.style.animation = "correct-answer_responsive .46s forwards";
        console.log('correcto');
        correct++;
        restartOp();
      }
      else if (result != answer) {
        extStyle.innerHTML = `#number-input { animation: incorrect-answer .46s forwards; }`
        incorrectLi.style.animation = "incorrect-answer_responsive .46s forwards";
        incorrectLi.style.background = "none";
        console.log('incorrecto');
        incorrect++;
        restartOp();
      }
    }
  })
  let totalAnswers = correct + incorrect;
  let percentageFormula = (correct / totalAnswers) * 100;
  let totalPercentage = percentageFormula.toFixed(1)

  correctLi.innerHTML = `Correct: ${correct}`
  incorrectLi.innerHTML = `Incorrect: ${incorrect}`
  totalLi.innerHTML = `Total: ${correct + incorrect}`
  if (totalPercentage == 'NaN') totalPercentageLi.innerHTML = `Total Percentage: 0%`
  else totalPercentageLi.innerHTML = `Total Percentage: ${totalPercentage}%`
  if (totalAnswers == ops) {

    finalResults.innerHTML = `
      <h2>Final Results</h2>
      <h3 class="correct">Correct Answers: ${correct}</h3>
      <h3 class="incorrect">Incorrect Answers: ${incorrect}</h3>
      <h3 class="percentage">${totalPercentage}% of Correct Answers</h3>
      <button class="final-btn">Press to continue</button>
    `
    finalResults.style.display = "block"
    bgResults.style.display = "block"
    const btnFinal = document.querySelector(".final-btn")
    btnFinal.addEventListener("click", () => {
      location.reload();
    })
  }
}