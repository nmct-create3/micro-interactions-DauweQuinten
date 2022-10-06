// #region ***  DOM references                           ***********
let emailInput;
let emailField;
let passwordInput;

// #endregion

function handleFloatingLabel() {}

const getDomElements = function () {
  emailInput = document.querySelector('.js-email');
  emailField = document.querySelector('.js-email-field');
  passwordInput = document.querySelector('.js-password');

  listenToEmailChange();
};

const isValidEmailAddress = function (emailAddress) {
  // Basis manier om e-mailadres te checken.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function (fieldValue) {
  return !fieldValue || !fieldValue.length;
};

const validateEmail = function () {
  const email = emailInput.value;
  if (!isValidEmailAddress(email)) {
    emailField.classList.add('has-error');
  } else {
    emailField.classList.remove('has-error');
  }
};

const listenToEmailChange = function () {
  emailField.addEventListener('change', validateEmail);
};

function handlePasswordSwitcher() {
  const togglePasswordInput = document.querySelector(
    '.c-toggle-password__checkbox'
  );
  togglePasswordInput.addEventListener('change', function () {
    if (this.checked) {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');

  getDomElements();

  handleFloatingLabel();
  handlePasswordSwitcher();
});
