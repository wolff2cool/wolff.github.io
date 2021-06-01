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

if (Math.floor((score / questions.length) * 100) >= 80) {
    var result = document.getElementById("result")
    result.innerHTML = "You scored a " + score + "/" + questions.length + ` (${Math.floor((score / questions.length) * 100)}%)` + "! Not Bad!";
    } else if (Math.floor((score / questions.length) * 100) < 80) {
        var result = document.getElementById("result3")
    result.innerHTML = "You scored a " + score + "/" + questions.length + ` (${Math.floor((score / questions.length) * 100)}%)` + ". Better luck next time";
    }
var startQuiz2 = document.getElementById("startQuiz");
startQuiz2.disabled = true;
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////
var startQuiz3 = document.getElementById("startQuiz2");

function startQuizTwo() {
var questions = [
    {
        prompt:"What is the Same-Side Interior Angles Postulate?\n (a) If a transversal intersects 2 parallel lines, then the alternate interior angles are congruent\n\ (b) If a transversal intersects 2 parallel lines, then same side interior angles are supplementary\n (c) If a transversal intersects 2 parallel lines, then same side interior angles are congruent",
        answer:"b"
    },
    {
        prompt:"What is the Converse of the Alternate Exterior Angles Theorem?\n (a) If 2 lines and a transversal form congruent alternate exterior angles, then the lines are parallel\n\ (b) If a transversal intersects 2 parallel lines, then alternate interior angles are congruent\n (c)  If 2 lines and a transversal form supplementary alternate exterior angles, then the lines are parallel",
        answer:"a"
    },
    {
        prompt: "If two angles in a triangle are 42 and the other is x, what is x?\n (a) 96\n\ (b) 138\n (c) 69",
        answer:"a"
    },
    {
        prompt:"What is the measure of the exterior angle of a triangle with two remote interior angles that are each 69?\n (a) 69\n\ (b) 139\n (c) 138",
        answer: "c"
    },
    {
        prompt:"What is the equation of a line perpendicular to a line with a slope of -1/2 passing through point (1,3)?\n (a) 2\n\(b) 1\n (c) 3",
        answer:"b"
    }
];
var score2 = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score2++;
         alert("Correct!");
    } else {
         alert("Wrong!");
    }
}
alert("You scored a " + score2 + "/" + questions.length + "!");

if (Math.floor((score2 / questions.length) * 100) >= 80) {
    var result2 = document.getElementById("result2")
    result2.innerHTML = "You scored a " + score2 + "/" + questions.length + ` (${Math.floor((score2 / questions.length) * 100)}%)` + "! Not Bad!";
    } else if (Math.floor((score2 / questions.length) * 100) < 80) {
        var result2 = document.getElementById("result2")
    result2.innerHTML = "You scored a " + score2 + "/" + questions.length + ` (${Math.floor((score2 / questions.length) * 100)}%)` + ". Better luck next time";
    }
var startQuiz3 = document.getElementById("startQuiz2");
startQuiz3.disabled = true;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var startQuiz4 = document.getElementById("startQuiz3");

function startQuizThree() {
var questions = [
    {
        prompt: "",
        answer: "b"
    }
];
var score3 = 0;

for(var i = 0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
         score3++;
         alert("Correct!");
    } else {
         alert("Wrong!");
    }
}
alert("You scored a " + score3 + "/" + questions.length + "!");

if (Math.floor((score3 / questions.length) * 100) >= 80) {
var result3 = document.getElementById("result3")
result3.innerHTML = "You scored a " + score3 + "/" + questions.length + ` (${Math.floor((score3 / questions.length) * 100)}%)` + "! Not Bad!";
} else if (Math.floor((score3 / questions.length) * 100) < 80) {
    var result3 = document.getElementById("result3")
result3.innerHTML = "You scored a " + score3 + "/" + questions.length + ` (${Math.floor((score3 / questions.length) * 100)}%)` + ". Better luck next time";
}
var startQuiz4 = document.getElementById("startQuiz3");
startQuiz4.disabled = true;
}

