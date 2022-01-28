alert("siz login form qilib bo'lganingizdan keyin sizga profile yaratiladi va sizga profilni pastida matematika savollar beriladi va siz ularni yechasiz")
function change() {
  let lvl = (document.getElementById("lvl").style.display = "block");
  let name = document.getElementById("name").value;
  let surname = document.getElementById("surname").value;
  let outputname = document.getElementById("output_name");
  let output_surname = document.getElementById("output_surname");
  outputname.innerHTML = name;
  output_surname.innerHTML = surname;
  if (name == null || name == "" || surname == null || surname == "") {
    alert("plsss enter your name or surname");
  } else {
    document.querySelector(".container").style.display = "none";
    document.getElementById("changebtn").style.display='none'
    document.querySelector(".container2").style.display = "block";
    document.querySelector(".container2").style.display = 'flex';
    document.getElementById("game").style.display = "block";
  }
}
let countXP = 0;
let countLVL = 0;
var randomNum = Math.floor(Math.random() * 2 + 1);
var randomNum2 = Math.floor(Math.random() * 2  + 1);
var num1 = (document.getElementById("num1").value = randomNum);
var num2 = (document.getElementById("num2").value = randomNum2);
var ans = num1 + num2;
function submit() {
  var solution = document.getElementById("solution").value;
  let outputXP = document.getElementById("xp");
  let level = document.getElementById("level");
  let outputLevel = document.getElementById('output2')
  if (solution == ans) {
    countXP += 10;
    countLVL += 5;
  } else {
    alert("wrong, correct answer was " + ans);
  }
  if (countXP == 20) {
    level.textContent += 1;
    outputLevel.innerHTML="agar sizdagi xp 40 bo'lsa sizning levelingiz 2 bo'ladi"
  }
  if (countXP == 40) {
    level.textContent = "";
    level.textContent += 2;
    outputLevel.innerHTML="agar sizdagi xp 60 bo'lsa sizning levelingiz 3 bo'ladi"

  }
  if (countXP == 60) {
    level.textContent = "";
    level.textContent += 3;
    outputLevel.innerHTML="agar sizdagi xp 80 bo'lsa sizning levelingiz 4 bo'ladi"

  }
  if (countXP == 80) {
    level.textContent = "";
    level.textContent += 4;
    outputLevel.innerHTML="agar sizdagi xp 100 bo'lsa sizning levelingiz 5 bo'ladi va siz yutasiz"
  }
  if (countXP == 100) {
    level.textContent = "";
    level.textContent += 5;
    outputLevel.innerHTML="tabriklayman siz yutdingiz"
    document.getElementById("game").style.display = "none";

  }
  solution.value = "";
  randomNum = Math.floor(Math.random() * 10 + 1);
  randomNum2 = Math.floor(Math.random() * 10 + 1);
  num1 = document.getElementById("num1").value = randomNum;
  num2 = document.getElementById("num2").value = randomNum2;
  ans = num1 + num2;
  outputXP.textContent = countXP;

}
