import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/**
 * 
 * @param {Array} values
 */

function getRandomFromArray(values){
  let randomIndex=Math.floor(Math.random()*values.length)
  return values[randomIndex]
}



window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  generateCard()
};


function generateCard (){
  
  let figura=getRandomFromArray([`♦`, `♥`, `♠`, `♣`])
  let valor=getRandomFromArray([`A`, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, `J`, `Q`, `K`])
  //console.log({figura, valor})

  let value= document.getElementById("card")
value.querySelector(".valor").innerHTML = valor;
value.querySelector(".figura").innerHTML = figura;
value.querySelector(".figuraInvertida").innerHTML = figura;


let color= document.getElementById("card")
color.querySelector(".figura").style.color="red"
color.querySelector(".figuraInvertida").style.color="red"



  return `${figura}${valor}`
 
}



