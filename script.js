function submitForm(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Thank you for your message, ${name}!\nWe will get back to you at ${email}.`);

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

