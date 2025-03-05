document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the values from the input fields
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const messageDiv = document.getElementById('message');

  // Basic validation
  if (name === '' || email === '' || password === '') {
      messageDiv.innerText = 'Please fill in all fields.';
      messageDiv.classList.remove('hidden');
      return;
  }

  // Simulate successful registration
  messageDiv.innerText = 'Registration successful! Welcome, ' + name + '!';
  messageDiv.classList.remove('hidden');

  // Clear the form
  document.getElementById('registration-form').reset();
});