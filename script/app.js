// #region ***  DOM references                           ***********
let emailInput;
let emailField;
let passwordInput;
let passwordField;
// #endregion

// Checks if email is valid and returns true or false
const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

// Checks if input is empty and returns true or false
const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const getDomElements = function () {
  emailInput = document.querySelector('.js-email');
  emailField = document.querySelector('.js-email-field');
  passwordInput = document.querySelector('.js-password');
  passwordField = document.querySelector('.js-password-field');

  listenToEmailChange();
  listenToPasswordChange();
};

const validateEmail = function () {
  const email = emailInput.value;
  if (isEmpty(email)) {
    console.info('Email is empty ❌');
    emailField.classList.add('has-error');
  } else {
    if (!isValidEmailAddress(email)) {
      console.info("Email isn't valid ❌");
      emailField.classList.add('has-error');
    } else {
      console.info('Email is valid ✅');
      emailField.classList.remove('has-error');
    }
  }
};

const validatePassword = function () {
  const password = passwordInput.value;
  if (isEmpty(password)) {
    passwordField.classList.add('has-error');
  } else {
    passwordField.classList.remove('has-error');
  }
};

const listenToEmailChange = function () {
  emailField.addEventListener('change', validateEmail);
};

const listenToPasswordChange = function () {
  passwordInput.addEventListener('change', validatePassword);
};

function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  const togglePasswordInput = document.querySelector(
    '.c-toggle-password__checkbox'
  );
  togglePasswordInput.addEventListener('change', function () {
    if (this.checked) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');

  getDomElements();

  handlePasswordSwitcher();
  handleFloatingLabel();
});
