const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const confirmPasswordInput = document.querySelector("#password-confirm-input");

const submitBtn = document.querySelector("#submit-btn");
const clearBtn = document.querySelector("#clear-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};

confirmPasswordInput.onkeyup = () => {
  confirmPasswordInput.classList.remove("is-valid");
  confirmPasswordInput.classList.remove("is-invalid");
};

clearBtn.onclick = () => {
  firstNameInput.value = "";
  firstNameInput.classList.remove("is-invalid");
  firstNameInput.classList.remove("is-valid");

  lastNameInput.value = "";
  lastNameInput.classList.remove("is-invalid");
  lastNameInput.classList.remove("is-valid");

  emailInput.value = "";
  emailInput.classList.remove("is-invalid");
  emailInput.classList.remove("is-valid");

  passwordInput.value = "";
  passwordInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-valid");

  confirmPasswordInput.value = "";
  confirmPasswordInput.classList.remove("is-invalid");
  confirmPasswordInput.classList.remove("is-valid");
};
submitBtn.onclick = () => {
  isFirstNameOk = false;
  isLastNameOk = false;
  isEmailOk = false;
  isPasswordOk = false;
  isConfirmPasswordOk = false;

 
  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameOk = true;
  }

 
  if (validateEmail(emailInput.value) === false) {
    emailInput.classList.add("is-invalid");
  } else {
    emailInput.classList.add("is-valid");
    isEmailOk = true;
  }

  if (passwordInput.value.length >= 6) {
    passwordInput.classList.add("is-valid");
    isPasswordOk = true;
  } else {
    passwordInput.classList.add("is-invalid");
  }


  if (
    confirmPasswordInput.value.length >= 6 &&
    confirmPasswordInput.value === passwordInput.value
  ) {
    confirmPasswordInput.classList.add("is-valid");
    isConfirmPasswordOk = true;
  } else {
    confirmPasswordInput.classList.add("is-invalid");
  }

  if (
    isFirstNameOk &&
    isLastNameOk &&
    isEmailOk &&
    isPasswordOk &&
    isConfirmPasswordOk

  )
    alert("Registered successfully");
};
