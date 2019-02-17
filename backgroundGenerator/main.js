var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var message = document.querySelector('h3');
var body = document.getElementById("gradient");
setBackground();
  
function setBackground(){ 
    body.style.background = "linear-gradient(to right,"+color1.value+ " , "+color2.value+ ")";   
    message.textContent = body.style.background; 
}

color1.addEventListener('input',setBackground);
color2.addEventListener('input',setBackground);
