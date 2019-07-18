//dice simulator
'use strict'
//GLobal Variables
let playNum = Math.floor(Math.random() * 6) + 1;
let houseNum = Math.floor(Math.random() * 6) + 1;
let randNum = Math.random();
let fundsNum = document.getElementById('funds').value
let betNum = document.getElementById('bet-input').value
//Event Listeners
document.getElementById('play-btn').addEventListener('click', playFunction)
document.getElementById('play-btn').addEventListener('click', houseFunction)
document.getElementById('purchase-btn').addEventListener('click', lootFunction)
document.getElementById('play-btn').addEventListener('click', btnFunction)
//Event Functions
function playFunction(){
    if (playNum == 1){
        document.getElementById('player-die').src = "images/1.png"
    } else if (playNum == 2){
        document.getElementById('player-die').src = "images/2.png"
    } else if (playNum == 3){
        document.getElementById('player-die').src = "images/3.png"
    } else if (playNum == 4){
        document.getElementById('player-die').src = "images/4.png"
    } else if (playNum == 5){
        document.getElementById('player-die').src = "images/5.png"
    } else {
        document.getElementById('player-die').src = "images/6.png"
    }
}

function houseFunction(){
    if (houseNum == 1){
        document.getElementById('house-die').src = "images/1.png"
    } else if (houseNum == 2){
        document.getElementById('house-die').src = "images/2.png"
    } else if (houseNum == 3){
        document.getElementById('house-die').src = "images/3.png"
    } else if (houseNum == 4){
        document.getElementById('house-die').src = "images/4.png"
    } else if (houseNum == 5){
        document.getElementById('house-die').src = "images/5.png"
    } else {
        document.getElementById('house-die').src = "images/6.png"
    }
}

function btnFunction() {
        
    if (document.getElementById('play-die') > document.getElementById('house-die')) {
        let fundsNum = fundsNum + betNum
    } else {
        let fundsNum = fundsNum - betNum
    }
}

function lootFunction(){
        if (document.getElementById('funds') < 1000){
        document.getElementById('loot').innerHTML = "images/socks.png"
     } else if (document.getElementById('funds') > 1000 && document.getElementById('funds') < 5000){
        if (randNum < 0.33){
        document.getElementById('loot').innerHTML = "images/ring.png" && fundsNum - 1000
    } else if (randNum =0.33){
        document.getElementById('loot').innerHTML = "images/bike.jpg" && fundsNum - 1000
    } else if (randNum >0.33){
        document.getElementById('loot').innerHTML = "images/trip.jpg" && fundsNum - 1000
    }
} else if (fundsNum >= 5000){
    if (randNum = 0.25){
        document.getElementById('loot').innerHTML = "images/motorcycle.jpg" && fundsNum - 5000
    }else if (randNum =0.25){
        document.getElementById('loot').innerHTML = "images/house.png" && fundsNum - 5000
    } else if (randNum = 0.25){
        document.getElementById('loot').innerHTML = "images/boat.png" && fundsNum - 5000
    } else {
        document.getElementById('loot').innerHTML ="images/car.png" && fundsNum - 5000
    }
}
}
   
