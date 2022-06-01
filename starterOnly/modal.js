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
const formData = document.querySelectorAll("form");
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
function closeModal() {
  modalbg.style.display = "none";
}

// const element id 

const form = document.getElementById("form");
const prenom = document.getElementById("first");
const nom = document.getElementById("last");
const email = document.getElementById("email");
const anniv = document.getElementById("birthdate");
const nombreTournois = document.getElementById("quantity");
const locInput = document.querySelectorAll('input[name="location"]');
const validation = document.getElementById('checkbox1');
const confirmation = document.getElementById ('confirmation');
const confirmationCloseBtn = document.getElementsByClassName('btn-close');
// Error 
const errorName = document.querySelector('.errorName');
const errorSecName = document.querySelector(".errorSecName");
const errorEmail = document.querySelector(".errorEmail");
const errorDate = document.querySelector(".errorDate");
const errorQuantity = document.querySelector(".errorQuantity");
const errorLieux = document.querySelector(".errorLieux");
const errorValidation = document.querySelector('.errorValidation');

let prenomCheck;
let nomCheck;
let emailCheck;
let dateCheck;
let tournoisCheck;
let locationCheck;
let conditionsChecked;
let lieuCheck = false;
// verif input

prenom.addEventListener("input", (evt) => {
  validateName(evt.target)
});


nom.addEventListener("input", (evt) => {
  validateSecondName(evt.target);
});

email.addEventListener("input", (evt) => {
  validateEmail(evt.target);
});

anniv.addEventListener("input", (evt) => {
  validateDate(evt.target);
});

nombreTournois.addEventListener("input", (evt) => {
  validateTournois(evt.target);
});

locInput.forEach((radio) => {
  radio.addEventListener("input", (evt) => {
    lieuCheck = true;
    (validateLoc(evt))
  });
});
  validation.addEventListener("input", (evt) => {
    (validateCondition(evt))
  });



// function validation


function validateName(inputValue) {

  if (!inputValue.value.match(/^[a-zA-Z].*[\s\.]*$/) || inputValue.value === " " || inputValue.value.length < 2) {
    errorName.style.display = "block";
    errorName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du Prénom.";
    errorName.style.color = "red";
    errorName.style.fontSize = '0.8rem';
    prenom.style.border = 'solid red 2px';
    prenomCheck = false;
  } else {
    errorName.style.display = "none";
    prenom.style.border = 'none';
    prenomCheck = true;
  }
}

function validateSecondName(inputValue) {
  
  if (!inputValue.value.match(/^[a-zA-Z].*[\s\.]*$/) || inputValue.value === " " || inputValue.value.length < 2) {
    errorSecName.style.display = "block";
    errorSecName.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    errorSecName.style.color = "red";
    errorSecName.style.fontSize = '0.8rem';
    nom.style.border = 'solid red 2px';
    nomCheck = false;
  } else {
    errorSecName.style.display = "none";
    nom.style.border = "none"
    nomCheck = true;
  }
}

function validateEmail(inputValue) {

  if (!/^[A-Za-z](([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
    errorEmail.style.display = "block";
    errorEmail.innerHTML = "Veuillez entrer une adresse mail correct.";
    errorEmail.style.color = "red";
    errorEmail.style.fontSize = '0.8rem';
    email.style.border = 'solid red 2px';
    emailCheck = false;
  } else {
    errorEmail.style.display = "none";
    email.style.border = 'none';
    emailCheck = true;
  }
}

function validateDate(inputValue) {

  if (!inputValue.value.match(/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/)) {
    errorDate.style.display = "block";
    errorDate.innerHTML = "Vous devez entrer votre date de naissance.";
    errorDate.style.color = "red";
    errorDate.style.fontSize = '0.8rem';
    anniv.style.border = 'solid red 2px';
    dateCheck = false;
  } else {
    errorDate.style.display = "none";
    anniv.style.border = "none";
    dateCheck = true;
  }
}

function validateTournois(inputValue) {
  if (!inputValue.value.match(/^[0-9]+$/)) {
    errorQuantity.style.display = "block";
    errorQuantity.innerHTML = "Veuillez choisir un numéro";
    errorQuantity.style.color = "red";
    errorQuantity.style.fontSize = '0.8rem';
    nombreTournois.style.border = 'solid red 2px';
    tournoisCheck = false;
  } else {
    errorQuantity.style.display = "none";
    nombreTournois.style.border = "none";
    tournoisCheck = true;
  }
}

function validateLoc(evt) {
  if (lieuCheck === false) {
    errorLieux.style.display = 'block';
    errorLieux.innerHTML = 'Veuillez choisir un lieux.';
    errorLieux.style.color = "red";
    errorLieux.style.fontSize = '0.8rem';
    locationCheck = false;
  } else if (evt.target.checked) {
    errorLieux.style.display = "none";
    locationCheck = true;
  }
}

function validateCondition(evt) {
  if (validation.checked === true || evt.target.checked) {
    conditionsChecked = true;
    errorValidation.style.display = 'none';
  }else if (!validation.checked === true ){
    errorValidation.style.display = "block";
    errorValidation.innerText = "Vous devez vérifier que vous acceptez conditions d'utilisation";
    errorValidation.style.color = 'red';
    errorValidation.style.fontSize = '0.8rem';
    conditionsChecked = false;
  }
}

function checkReset() {
  document.getElementById("test").style.opacity = "1";
}

submitBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  prenom.addEventListener("input", (evt) => {
    validateName(evt.target);
  });

  nom.addEventListener("input", (evt) => {
    validateSecondName(evt.target);
  });

  email.addEventListener("input", (evt) => {
    validateEmail(evt.target);
  });

  anniv.addEventListener("input", (evt) => {
    validateDate(evt.target);
  });

  nombreTournois.addEventListener("input", (evt) => {
    validateTournois(evt.target);
  });

  locInput.forEach((radio) => {
    radio.addEventListener("input", (evt) => {
      (validateLoc(evt))
    });
  });

  validation.addEventListener("input", (evt) => {
    (validateCondition(evt))
  });
})

submitBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  (validateCondition(evt));
  validateName(prenom);
  validateSecondName(nom);
  validateEmail(email);
  validateDate(anniv);
  validateTournois(nombreTournois);
  locInput.forEach((radio) => 
    {
     validateLoc(evt)
    }
  );
  if (prenomCheck === true && nomCheck === true && emailCheck === true && dateCheck === true && tournoisCheck === true && locationCheck === true && conditionsChecked === true) {
    form.style.display = "none";
    confirmation.style.display = "flex";
    form.reset();
  }
})
// close modal confirmation
confirmationCloseBtn[0].addEventListener("click", closeModal);

//
modalBtn.forEach( (btn) => btn.addEventListener ("click", (evt) => {
  form.style.display = 'block';
  confirmation.style.display = 'none';
})
)