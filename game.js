// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let num1box = document.getElementById("number1")
let num2box = document.getElementById("number2")

let num1 = Math.round(Math.random()*100)
let num2 = Math.round(Math.random()*100)

num1box.innerHTML = num1;
num2box.innerHTML = num2;

// Iteration 3: Creating variables required to make the game functional
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let mul = document.getElementById("mul")
let divide = document.getElementById("divide")
let modulus = document.getElementById("modulus")
let timeBox = document.getElementById("timer")
let score = 0
let interval;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let num3box = document.getElementById("number3")

let num3;
// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    num1 = Math.round(Math.random()*100)
    num2 = Math.round(Math.random()*100)

    let operator = Math.ceil(Math.random()*5)
    switch(operator){
        case 1: num3 = num1 + num2; break;
        case 2: num3 = num1 - num2; break;
        case 3: num3 = num1 * num2; break;
        case 4: num3 = Math.floor(num1 / num2); break;
        case 5: num3 = num1 % num2; break;
    }
    num3box.textContent = num3;
    num1box.textContent = num1;
    num2box.textContent = num2;
    StartTimer()

}
randomise()
// Iteration 6: Making the Operators (button) functional
plus.onclick=()=>{
    if(num1+num2==num3){
        score++
        randomise()
    }else{
        gameOver()
    }
}
minus.onclick=()=>{
    if(num1-num2==num3){
        score++
        randomise()
    }else{
        gameOver()
    }
}
mul.onclick=()=>{
    if(num1*num2==num3){
        score++
        randomise()
    }else{
        gameOver()
    }
}
divide.onclick=()=>{
    if(num1/num2==num3){
        score++
        randomise()
    }else{
        gameOver()
    }
}
modulus.onclick=()=>{
    if(num1%num2==num3){
        score++
        randomise()
    }else{
        gameOver()
    }
}
function gameOver(){
    window.location.href = `./gameover.html?score=${score}`
}

// Iteration 7: Making Timer functional

function StartTimer(){
    let time = 15
    timeBox.textContent = time
    clearInterval(interval)
    interval = setInterval(()=>{
        time--;
        timeBox.textContent = time
        if(time==0){
            gameOver()
        }
    },1000)
}