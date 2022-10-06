function handleFloatingLabel() {}

function handlePasswordSwitcher() {
  const togglePasswordInput = document.querySelector(
    '.c-toggle-password__checkbox'
  );
  togglePasswordInput.addEventListener('change', function () {
    console.log('👀');
    const passwordInput = document.querySelector('.js-password');
    if (this.checked) {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  handleFloatingLabel();
  handlePasswordSwitcher();
});
