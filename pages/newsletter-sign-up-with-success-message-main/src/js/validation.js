

/**
 * Essa função valida as informações do input email
 */
function validarEmail() {
  var email = document.querySelector('#email');
  var error = document.querySelector('#error-email');

  if (!email.checkValidity()) {
    error.innerHTML = "Email invalido";
    document.querySelector('#email').style.borderColor = 'crimson'
    document.querySelector('#email').style.backgroundColor = 'rgb(228, 136, 155)'
  } else {
    document.querySelector('#email').style.borderColor = '#00fd34'
    document.querySelector('#email').style.backgroundColor = '#b2ff94'
  }

}

/**
 * Redefine valor no input email
 */
function redefinirMsg() {
  var error = document.querySelector('#error-email');
  if (error.innerHTML == "Email invalido") {
    error.innerHTML = "";
    document.querySelector('#email').style.borderColor = 'crimson'
  }
}


