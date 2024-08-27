const data = [
    {
      id: 1,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 1,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
  ];

  const question = document.querySelector(".question")
  const answerContainer = document.querySelector(".answers")
  const submit = document.querySelector(".submit")
  const game = document.querySelector(".game")
  const result = document.querySelector(".result")
  const play = document.querySelector(".play")
  const correct = document.querySelector(".correct")
  const wrong = document.querySelector(".wrong")
  const score = document.querySelector(".score")


let qInd = 0
let correctAns = 0
let wrongAns = 0
let length = data.length
let selectedAnswer


submit.addEventListener("click", () => {
    if(selectedAnswer !== null) {

    
    selectedAnswer === "true" ? correctAns++ : wrongAns++
    qInd++
    showQuestion(qInd)

    }
    else {
        alert("Please select an option!")
    }
})

const playAgain = () => {
    qInd = 0
    correctAns = 0
    wrongAns = 0
    showQuestion(qInd)
}

play.addEventListener("click", () => {
    game.style.display = "block"
    result.style.display = "none"
    playAgain()
})

const showResult = () => {
    game.style.display = "none"
    result.style.display = "block"

    correct.textContent = `Correct Answers: ${correctAns}`
    wrong.textContent = `Wrong Answers: ${wrongAns}`
    score.textContent = `Score: ${(correctAns - wrongAns) * 10}`
}

const selectAnswer = () => {
    answerContainer.querySelectorAll("input").forEach((ele) => {
        ele.addEventListener("click", (e) => {
            selectedAnswer = e.target.value
        })
    })
}
 
const showQuestion = (qNumber) => {
    if(qInd === length) return showResult()
    selectedAnswer = null
    question.textContent = data[qNumber].question
    answerContainer.innerHTML = data[qNumber].answers.map((item, index) => 
        `<div class="answer">
            <input type="radio" name="answer" id="${index}" value="${item.isCorrect}">
            <label for="${index}">${item.answer}</label>
        </div>
        `
    ).join("")
    selectAnswer()
}

showQuestion(qInd)



  
