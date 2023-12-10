// Iteration 2: Generate 2 random number and display it on the screen

// range for math.random is (low=0 & high=1)

// ceil - 1 to 100
// floor - 0 to 99

var num1;
var num2;
let num1_box = document.getElementById("number1");
let num2_box = document.getElementById("number2");

num1_box.textContent = num1;
num2_box.textContent = num2;

function generateRandomNumbers() {
  num1 = Math.floor(Math.random() * 100);
  num2 = Math.floor(Math.random() * 100);

  num1_box.textContent = num1;
  num2_box.textContent = num2;
}

generateRandomNumbers();

// Iteration 3: Make the options button functional

let score = 0;
localStorage.setItem("score" ,score);

let greater_than = document.getElementById("greater-than");
let equal_to = document.getElementById("equal-to");
let lesser_than = document.getElementById("lesser-than");

greater_than.onclick = () => {
  if (num1 > num2) {
    console.log(score);
    update()
} else {
    window.open("./gameover.html", "_self");
}
generateRandomNumbers();
};

equal_to.onclick = () => {
  if (num1 == num2) {
    console.log(score);
    update()

} else {
    window.open("./gameover.html", "_self");
}
generateRandomNumbers();
};

lesser_than.onclick = () => {
  if (num1 < num2) {
    console.log(score);
    update()

} else {
    window.open("./gameover.html", "_self");
}
generateRandomNumbers();
};

// Iteration 4: Build a timer for the game

// let num = 1;
// // like loop (execute until condition is true)
// let interval = setInterval(()=>{
//     console.log("I am in interval");
// },1000)

//
// like if statement (certain amount of task only once)
// setTimeout(()=>{
//     clearInterval(interval)
//     console.log("I am in time out");
// },4000 )

// clearTimeout(setTimeout)

let time;
let timer_box = document.getElementById("timer");
let interval;
timer_box.textContent = 5;

function startInterval() {
    time=5;
    interval = setInterval(() => {
    // console.log("time")
    timer_box.textContent = time;
    time--;

    if (time == 0) {
      clearInterval(interval);
      location.href = "./gameover.html";
    }
  },1000);
}

// localStorage.clear()
localStorage.setItem("score" ,score)

clearInterval(interval);
startInterval()


function update(){
    score++;
    localStorage.setItem("score" ,score);     //  for updating the score to local storage
    clearInterval(interval)                   // for clearing the old timer
    startInterval()
}
