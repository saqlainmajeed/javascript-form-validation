const form = document.querySelector('.form');
const formGroupEls = document.querySelectorAll('.form-group');
const firstNameEl = document.querySelector('.first_name');
const lastNameEl = document.querySelector('.last_name');
const emailEl = document.querySelector('.email');
const passwordEl = document.querySelector('.password');
const confirmPasswordEl = document.querySelector('.confirm_password');
const submitbtn = document.querySelector('.btn--submit');
const body = document.querySelector('body');
const errorEl = document.querySelector('.error-msg');
const headingEl = document.querySelector('.heading');
const inputEls = document.querySelectorAll('input');
const errText = document.querySelector('.err-text');

submitbtn.addEventListener('click', (e) => {
  e.preventDefault();
  validate();
});

const validate = () => {
  // ----------alert on each form-group--------
  formGroupEls.forEach((element) => {
    let id = element.id;

    if (id !== '') {
      const errMsg = document.createElement('span');
      errMsg.innerHTML = 'This field is required';
      element.classList.add('error');
      element.appendChild(errMsg);
    }
  });

  if (confirmPasswordEl) {
    if (confirmPasswordEl.value === '' && passwordEl.value !== '') {
      errText.innerHTML += 'please re-enter password';
      return;
    }
    if (
      confirmPasswordEl.value === passwordEl.value &&
      confirmPasswordEl.value !== ''
    ) {
      console.log('password matched');
      return;
    } else if (
      confirmPasswordEl.value !== passwordEl.value &&
      confirmPasswordEl.value !== ''
    ) {
      console.log('password not matched');
      return;
    }
  } else if (confirmPasswordEl.value === '') {
    console.log('please confirm password');
  }

  inputEls.values = '';
};

const required = (input) => {
  if (input.value === '') {
    const msg = document.createElement('p');
    msg.innerHTML = `${input.name} is required`;
    msg.classList.add('error_msg');
    errorEl.appendChild(msg);

    setTimeout(() => {
      msg.innerHTML = '';
    }, 3000);
  } else if (input.value !== '') {
    return;
  }
};

// let messages = [];
// form.addEventListener('submit', (e) => {
//   if (firstNameEl) {
//     requiredCheck(firstNameEl);
//   }

//   if (lastNameEl) {
//     requiredCheck(lastNameEl);
//   }

//   if (messages.length > 0) {
//     e.preventDefault();
//     errorEl.innerText = messages.join(', ');
//   }
// });

// const requiredCheck = (input) => {
//   if (messages.length > 0) {
//     messages = [];
//   }
//   if (input.value === '' || input.value === null) {
//     messages.push(`${input.name} is required`);
//   }
// };

/*
// ------------PREVIOUS FIELD CHECK------------
// empty field checks

  if (firstNameEl.value === '') {
    // required(firstNameEl);
    console.log(firstNameEl.parentElement);
    errText.innerHTML = 'First Name is required <br>';
  }

  if (lastNameEl.value === '') {
    errText.innerHTML += 'Last Name is required <br>';
    // required(lastNameEl);
  }

  if (emailEl.value === '') {
    // required(emailEl);
    errText.innerHTML += 'Email is required <br>';
  }

  if (passwordEl.value === '') {
    errText.innerHTML += 'Password is required <br>';
    // required(passwordEl);
  }
  */
