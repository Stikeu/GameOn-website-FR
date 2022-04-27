function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");
const submitBtn = document.querySelector(".btn-submit");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
closeBtn.addEventListener("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal(){
  modalbg.style.display ="none";
}

// const element id 

const prenom = document.getElementById ("first");
const nom = document.getElementById ("last");
const email = document.getElementById("email");
const anniv = document.getElementById ("birthdate");
const nombreTournois = document.getElementById("quantity");
const loc1 = document.getElementById ('location1');
const loc2 = document.getElementById ('location2');
const loc3 = document.getElementById ('location3');
const loc4 = document.getElementById ('location4');
const loc5 = document.getElementById ('location5');
const loc6 = document.getElementById ('location6');
const errorName = document.querySelector ('.errorName');

prenom.addEventListener("input", (evt) => { 
  console.log(evt.target.value);
  validateName(evt.target);
});


console.log(prenom);


// function validation

function validateName(inputValue) {
  let prenomCheck;
  if (!inputValue.value === " " || inputValue.value.length < 2) {
    errorName.innerHTML = "Nom incorecte" ;
    console.log("string");
  }else{
    errorName.style.display = "none" ;
    prenomCheck = true;  
    console.log("test");
  }
}



function validate(){
  submitBtn.addEventListener("submit", (evt) =>{
  
  })
}
