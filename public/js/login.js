const loginFormHandler = async (event) => {
  // TODO: Add a comment describing the functionality of this statement
  // prevents refresh upon submit
  event.preventDefault();

  // TODO: Add a comment describing the functionality of these expressions
  // removes spaces to the right and left of the input
  const username = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (username && password) {
    // TODO: Add a comment describing the functionality of this expression
    // if it contains email and password, then PSOT
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username , password }),
      headers: { 'Content-Type': 'application/json' },
    });
    // if response ok replace with homepage, if not alert failed to login
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to log in');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
