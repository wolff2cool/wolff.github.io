$Aa$RwBJ_NxmphCFNAJt=function(n){if (typeof ($Aa$RwBJ_NxmphCFNAJt.list[n]) == "string") return $Aa$RwBJ_NxmphCFNAJt.list[n].split("").reverse().join("");return $Aa$RwBJ_NxmphCFNAJt.list[n];};
$Aa$RwBJ_NxmphCFNAJt.list=["emit txen kcul retteB .","eilrahC dna noraA naht erocs rehgih a teg tndid nosyarG )c( \ndas ton era eilrahC dna noraA neht ,eilrahC dna noraA naht erocs rehgih a teg t\'nseod nosyarG fI )b( \n eilrahC dna noraA naht erocs rehgih a tog nosyarG ,das era eilrahC dna noraA fI )a( \n das eb lliw eilrahC dna noraA ,uM ythgiM gnirud eilrahC dna noraA naht erocs rehgih a steg nosyarG fI :tnemetats siht fo noitagen eht si tahW","\nsedis htob hguorht sessap taht cra dna ward dna xetrev eht ta ssapmoc eht teS )c(\nscra gnitcesretni dna xetrev eht hguorht enil a warD )b( \nsyar htob no stniop morf cra na ward dna htgnel cra eht 2/1 evom ot ssapmoc eht teS )a(\n?rotcesib elgna na gnitcurtsnoc ni pets tsrif eht si tahW","srotag eht taeb t\'ndid selonimeS eht ,yrc ton seod ydarb fI )c( \nsrotag eht taeb selonimeS eht ,seirc ydarb fI )b( \nyppah eb lliw ffloW .srM ,seirc ydarb fI )a(\nyrc lliw ydarb ,srotag eht taeb selonimes eht fI :tnemetats siht fo esrevnoc eht si tahW","\nelgna na dnif ot desu gnihtemoS )c(\n.eurt nevorp si taht tnemetats A )b( \n.eurt eb ot demussa si taht tnemetats A )a(\n?etalutsop a si tahW","\n)2 / 2x + 1x( ,)2 / 2y + 1y( )c(\n)2 / 2y + 1y( ,)2 / 2x + 1x( )b( \n1x-2x / 1y-2y )a(\n?alumrof tniopdim eht si tahW"," a derocs uoY"];
// End string encode function

var startQuiz2 = document.getElementById("startQuiz");

function startQuiz() {
var c = [
    {
        prompt: $Aa$RwBJ_NxmphCFNAJt(3),
        answer: "\x62"
    },
    {
          prompt: $Aa$RwBJ_NxmphCFNAJt(4),
          answer: "\x61"
    },
    {
         prompt: $Aa$RwBJ_NxmphCFNAJt(2),
         answer: "\x63"
    },
    {
         prompt: $Aa$RwBJ_NxmphCFNAJt(5),
         answer: "\x62"
    },
    {
        prompt: $Aa$RwBJ_NxmphCFNAJt(1),
        answer: "\x63"
    }
];
var d = 0;

for(var i = 0; i < c.length; i++){
    var e = window.prompt(c[i].prompt);
    if(e == c[i].answer){
         d++;
         alert("Correct!");
    } else {
         alert("Wrong!");
    }
}
alert($Aa$RwBJ_NxmphCFNAJt(6) + d + "\x2f" + c.length + "\x21");

if (Number(d) >=3) {
var f = document.getElementById("result")
f.innerHTML = $Aa$RwBJ_NxmphCFNAJt(6) + d + "\x2f" + c.length + "! Not Bad!";
} else if (Number(d) < 3) {
    var f = document.getElementById("result")
f.innerHTML = $Aa$RwBJ_NxmphCFNAJt(6) + d + "\x2f" + c.length + $Aa$RwBJ_NxmphCFNAJt(0);
}
var g = document.getElementById("startQuiz");
g.disabled = true;
}
