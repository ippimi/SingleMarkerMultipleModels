document.getElementById("btn1").addEventListener("click", (e) => {

   var test = document.querySelector('#vid').play();

})

document.getElementById("btn2").addEventListener("click", (e) => {

   var test = document.querySelector('#vid').pause();

})

document.getElementById("btn3").addEventListener("click", (e) => {

   var test = document.querySelector('#vid').muted=false;

})

document.getElementById("btn4").addEventListener("click", (e) => {

   var test = document.querySelector('#vid').muted=true;

})