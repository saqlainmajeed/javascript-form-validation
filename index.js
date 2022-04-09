// submitting event on form
const formEl = document.querySelectorAll('.form')[0];
formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validate()) {
    alert('Hurrah! Your form is submitted Successfully');
    clearFields();
  }
});

// Setting error function
const setError = (id, err) => {
  document.querySelector(`#${id} .err`).innerText = err;
};

// Clearing field function After Submittion
const clearFields = () => {
  let inputsEl = Array.from(document.getElementsByTagName(`input`));

  inputsEl.forEach((input) => {
    if (input.value === 'submit') {
      return;
    }
    input.value = '';
  });
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
    setError('ffname', 'Please! enter first name');
    returnVal = false;
  }
  if (flnameEl === '') {
    setError('flname', 'Please! enter last name');
    returnVal = false;
  }

  if (femailEl === '') {
    setError('femail', 'Please enter email');
  } else if (!femailEl.match(mailformat)) {
    setError('femail', 'Please enter valid email');
  }

  if (fpasswordEl === '') {
    setError('fpassword', 'Please! enter password');
    returnVal = false;
  } else if (fpasswordEl.includes('password')) {
    setError('fpassword', `Password can't contain word "password"`);
    returnVal = false;
  }
  if (fcpasswordEl === '') {
    setError('fcpassword', 'Please! re-enter the password');
    returnVal = false;
  } else if (fcpasswordEl !== fpasswordEl) {
    setError('fcpassword', `Oops! Password doesn't match`);
    returnVal = false;
  }

  return returnVal;
};
