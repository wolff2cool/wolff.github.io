var startQuiz2 = document.getElementById("startQuiz");

function startQuiz() {
var questions = [
    {
        prompt: "What is the converse of this statement: If the seminoles beat the gators, brady will cry\n(a) If brady cries, Mrs. Wolff will be happy\n\ (b) If brady cries, the Seminoles beat the gators\n\ (c) If brady does not cry, the Seminoles didn't beat the gators",
        answer: "b"
    },
    {
          prompt: "What is a postulate?\n(a) A statement that is assumed to be true.\n\ (b) A statement that is proven true.\n(c) Something used to find an angle\n",
          answer: "a"
    },
    {
         prompt: "What is the first step in constructing an angle bisector?\n(a) Set the compass to move 1/2 the arc length and draw an arc from points on both rays\n\ (b) Draw a line through the vertex and intersecting arcs\n(c) Set the compass at the vertex and draw and arc that passes through both sides\n",
         answer: "c"
    },
    {
         prompt: "What is the midpoint formula?\n(a) y2-y1 / x2-x1\n\ (b) (x1 + x2 / 2), (y1 + y2 / 2)\n(c) (y1 + y2 / 2), (x1 + x2 / 2)\n",
         answer: "b"
    },
    {
        prompt: "What is the negation of this statement: If Grayson gets a higher score than Aaron and Charlie during Mighty Mu, Aaron and Charlie will be sad \n (a) If Aaron and Charlie are sad, Grayson got a higher score than Aaron and Charlie \n\ (b) If Grayson doesn't get a higher score than Aaron and Charlie, then Aaron and Charlie are not sad\n (c) Grayson didnt get a higher score than Aaron and Charlie",
        answer: "c"
    }
];
var score = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score++;
         alert("Correct!");
    } else {
         alert("Wrong!");
    }
}
alert("You scored a " + score + "/" + questions.length + "!");

if (Number(score) >=3) {
var result = document.getElementById("result")
result.innerHTML = "You scored a " + score + "/" + questions.length + "! Not Bad!";
} else if (Number(score) < 3) {
    var result = document.getElementById("result")
result.innerHTML = "You scored a " + score + "/" + questions.length + ". Better luck next time";
}
var startQuiz2 = document.getElementById("startQuiz");
startQuiz2.disabled = true;
}
