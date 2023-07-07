// Login form submission
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Fetch user input
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Validate the form inputs
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // Validate email
  if (!isValidEmail(email)) {
    setError(emailInput, 'Please enter a valid email address');
    return;
  }

  // Validate password
  if (password === '') {
    setError(passwordInput, 'Please enter your password');
    return;
  }

  // If all validations pass, submit the form
  // Replace this with your actual form submission logic
  submitForm(email, password);
});

// Function to set error message and apply error styling to input field
function setError(input, message) {
  const formGroup = input.parentElement;
  const errorText = formGroup.querySelector('.error-text');
  errorText.innerText = message;
  formGroup.classList.add('error');
}

// Function to validate email format using a regular expression
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to submit the form (replace with your actual form submission logic)
function submitForm(email) {

  // Example code to display a success message
  const container = document.querySelector('.container');
  container.innerHTML = `
    <h1>Login Successful</h1>
    <p>Welcome back, ${email}!</p>
  `;
}
