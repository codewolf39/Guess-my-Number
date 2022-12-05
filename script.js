'use strict';

// console.log(document.querySelector(".message").textContent);

let secretNumber = Math.trunc(Math.random()*20)+1// here math.trunc function gives integer value of randomly generated number by the help of math.random and *20 gives all the numbers between 1 to 19 thats why we did +1 to get all the numbers from 1 to 20.

let score = 20; 
let highscore = 0;




document.querySelector(".check").addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector(".message").textContent = "⛔ No Number";
    }
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = "🎉 Correct Answer!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = "30rem";
        document.querySelector('.number').textContent= secretNumber;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    }
    else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? "High!" : "Low!"
            score--
            document.querySelector('.score').textContent= score;
        }
        else{
            document.querySelector(".message").textContent = "You Lose the Game!";
            document.querySelector(".score").textContent = "0";
            document.querySelector('body').style.backgroundColor = "red";
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;

    document.querySelector('.message').textContent = "Start Guessing..."
    document.querySelector(".score").textContent = score;
    document.querySelector('.number').textContent= "?";
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = "15rem";

})







