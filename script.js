const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message){
  const formConctol = input.parentElement;
  formConctol.className = 'form-control error';
  const small = formConctol.querySelector('small');
  small.innerText = message;
}

// Show input error message
function showSuccess(input){
  const formConctol = input.parentElement;
  formConctol.className = 'form-control success';
  const small = formConctol.querySelector('small');

}

// Check Email is Valid

function checkEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(re.test(email.value.trim())){
    showSuccess(email);
  } else {
    showError(email, 'Email is not valid');
  }

}

// Check required fields
function checkRequired(inputArray){
  inputArray.forEach(function(input){
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// Check password match
function checkPasswordMatch(input1, input2){
  if(input1.value !== input2.value){
    showError(input2, "Password don't match!");
  }
}

//Get getFieldName
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkInputLength(input, min, max){
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if(input.value.length > max) {
    showError(input, `${getFieldName(input)} must be less then ${max} characters`);
  } else {
    showSuccess(input);
  }

}

// Event addEventListener
form.addEventListener('submit', function(e){
  e.preventDefault();

  checkRequired([username, email, password, password2]);
  checkInputLength(username, 3, 15);
  checkInputLength(password, 6, 23);
  checkInputLength(password2, 6, 23);
  checkEmail(email);
  checkPasswordMatch(password, password2);
});
