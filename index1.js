/*// const ffname = document.querySelector('.ffname').value;
const ffname = document.forms[0]['ffname'].value;
const btnSubmit = document.querySelector('.btn--submit');

const check = () => {
  return false;
};

// --------clearing field--------------
const clearFields = () => {
  errors = document.querySelectorAll('.err');

  for (let item of errors) {
    item.textContent = '';
  }
};

//-----------------setting error---------------
const setError = (id, err) => {
  element = document.getElementById(id);
  const errEl = element.getElementsByClassName('err')[0];
  errEl.innerHtml = err;
};

// -------------Validation function----------------
const validate = () => {
  let returnVal = true;
  clearFields();

  if (ffname.length < 5) {
    setError('ffname', 'First Name should not be empty');
    returnVal = false;
  }

  return returnVal;
};

btnSubmit.addEventListener('click', check);
*/

/*
  Form Validation
*/

// submitting event on form
const formEl = document.querySelectorAll('.form')[0];
formEl.addEventListener('submit', (e) => {
  if (!validate()) {
    e.preventDefault();
  }
});

// Setting error function
const setError = (id, err) => {
  document.querySelector(`#${id} .err`).innerText = err;
  // console.log(id, err);
  // console.log('serError is called');
  // let element = document.getElementById(id);
  // console.log(element.getElementsByClassName('err')[0].innerHtml);
  // console.log(element.getElementsByClassName('err')[0].innerHtml);
  // let value = (element.getElementsByClassName('err')[0].innerHtml = err);
  // console.log(element);
  // console.log(value);
};

// clear Error function
const clearErrors = () => {
  let errors = document.getElementsByClassName('err');

  for (let item of errors) {
    item.innerText = '';
  }
};
// validation function
const validate = () => {
  clearErrors();
  let returnVal = true;
  const ffnameEl = document.querySelector('.ffname').value;
  const flnameEl = document.querySelector('.flname').value;
  const femailEl = document.querySelector('.femail').value;
  const fpasswordEl = document.querySelector('.fpassword').value;
  const fcpasswordEl = document.querySelector('.fcpassword').value;
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (ffnameEl === '') {
    setError('ffname', 'This field must be filled');
    returnVal = false;
  }
  if (flnameEl === '') {
    setError('flname', 'This field must be filled');
    returnVal = false;
  }

  if (!femailEl.match(mailformat)) {
    setError('femail', 'please enter valid email');
  }

  if (fpasswordEl === '') {
    setError('fpassword', 'This field must be filled');
    returnVal = false;
  } else if (fpasswordEl.includes('password')) {
    setError('fpassword', `Password can't contain password`);
    returnVal = false;
  }
  if (fcpasswordEl === '') {
    setError('fcpassword', 'This field must be filled');
    returnVal = false;
  } else if (fcpasswordEl !== fpasswordEl) {
    setError('fcpassword', 'Password must match');
    returnVal = false;
  }

  return returnVal;
};
// document.querySelector('form').addEventListener('submit', (e) => {
//   e.preventDefault();
//   return false; //validate();
// });
// const check = (e) => {
//   console;
// };

// const validate = () => {
//   return false;
// };
