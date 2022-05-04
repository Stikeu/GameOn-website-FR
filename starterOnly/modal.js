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

const form = document.getElementById("form");
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

// Error 
const errorName = document.querySelector ('.errorName');
const errorSecName = document.querySelector(".errorSecName");
const errorEmail = document.querySelector(".errorEmail");
const errorDate = document.querySelector(".errorDate");
const errorQuantity = document.querySelector(".errorQuantity");
const errorLieux = document.querySelector(".errorLieux");


// verif input
prenom.addEventListener("input", (evt) => { 
  console.log(evt.target.value);
  validateName(evt.target);
});

nom.addEventListener("input", (evt) => { 
  console.log(evt.target.value);
  validateSecondName(evt.target);
});

email.addEventListener("input", (evt) => { 
  console.log(evt.target.value);
  validateEmail(evt.target);
});

anniv.addEventListener("input", (evt) => { 
  console.log(evt.target.value);
  validateDate(evt.target);
});

nombreTournois.addEventListener("input", (evt) => { 
  console.log(evt.target.value);
  validateTournois(evt.target);
});

// test all input
// form.addEventListener("input", (evt) => {
//   console.log(evt.target.value);
//   validateName(evt.target);
//   evt.preventDefault();
// });

// function validation

function validateName(inputValue) {
  let prenomCheck;
  if (!inputValue.value.match(/^[A-Za-z]+$/) || inputValue.value === " " || inputValue.value.length < 2) {
    errorName.style.display ="block";
    errorName.innerHTML = "Prenom incorecte" ;
    console.log("string");
  }else{
    errorName.style.display = "none" ;
    prenomCheck = true;  
    console.log("test");
  }
}
function validateSecondName(inputValue) {
  let nomCheck;
  if (!inputValue.value.match(/^[A-Za-z]+$/) || inputValue.value === " " || inputValue.value.length < 2) {
    errorSecName.style.display ="block";
    errorSecName.innerHTML = "Nom incorecte" ;
    console.log("nom1");
  }else{
    errorSecName.style.display = "none" ;
    nomCheck = true;  
    console.log("nom2");
  }
}

function validateEmail(inputValue){
  let emailCheck;
  if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)){
    errorEmail.style.display ="block";
    errorEmail.innerHTML = "Email incorecte" ;
    console.log("em1");
  }else{
    errorEmail.style.display = "none" ;
    emailCheck = true;  
    console.log("em2");
  }
}

function validateDate(inputValue) {
  let dateCheck;
  if (!inputValue.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/) ) {
    errorDate.style.display ="block";
    errorDate.innerHTML = "Date incorecte" ;
    console.log("date1");
  }else{
    errorDate.style.display = "none" ;
    dateCheck = true;  
    console.log("date2");
  }
}

function validateTournois(inputValue){
  let tournoisCheck;
  if (!inputValue.value.match(/^[0-9]+$/)) {
    errorQuantity.style.display ="block";
    errorQuantity.innerHTML = "Nombre incorecte" ;
    console.log("nomb1");
  }else{
    errorQuantity.style.display = "none" ;
    tournoisCheck = true;  
    console.log("nomb2");
  }
}


function validate(){
  submitBtn.addEventListener("submit", (evt) =>{
  
  })
}


