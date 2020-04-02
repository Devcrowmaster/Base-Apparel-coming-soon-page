let form = document.querySelector('.form');

let email = document.querySelector('.form__email');
let success = document.querySelector('.error-valid');

form.addEventListener('submit', e =>{
  e.preventDefault();

  if(!validateEmail(email.value)){
    form.classList.add('error');
    success.classList.remove('success');
    success.classList.add('error-valid');
    success.innerHTML = 'Please provide a valid email';
  }else{
    form.classList.remove('error');
    success.classList.remove('error-valid');
    success.classList.add('success');
    success.innerHTML = 'Thanks you';
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}