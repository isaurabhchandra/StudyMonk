// Register form submission
const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Fetch user input
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Create a data object with the user input
  const data = {
    name,
    email,
    password
  };

  try {
    // Send registration request to the server
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      // Registration successful
      const container = document.querySelector('.container');
      container.innerHTML = `
        <h1>Registration Successful</h1>
        <p>Thank you for registering, ${name}!</p>
        <p>An email has been sent to ${email} for verification.</p>
        <p>Click <a href="login.html">here</a> to log in.</p>
      `;
    } else {
      // Registration failed
      throw new Error('Registration failed');
    }
  } catch (error) {
    console.error(error);
    // Handle error and display an error message
    const container = document.querySelector('.container');
    container.innerHTML = `
      <h1>Error</h1>
      <p>Registration failed. Please try again.</p>
    `;
  }
});
