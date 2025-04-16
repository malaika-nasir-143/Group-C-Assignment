// Get elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
const submitButton = document.getElementById('submitButton');
const togglePasswordButton = document.getElementById('togglePassword');

// Handle password visibility toggle
togglePasswordButton.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  togglePasswordButton.textContent = type === 'password' ? '👁' : '👁';
});

// Handle form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get values
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Simulate authentication
  if (username === 'admin' && password === 'hospital123') {
    // Store login data in localStorage
    localStorage.setItem('username', username);
    alert('Login successful!');
  } else {
    errorMessage.textContent = 'Invalid username or password';
  }
});

// Check if user is already logged in (optional)
window.addEventListener('load', () => {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    alert('You are already logged in as ' + savedUsername);
  }
});

// login.js

document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    // Save to localStorage
    localStorage.setItem("ffh_username", username);
    localStorage.setItem("ffh_password", password);

    // Optional: Alert or redirect
    alert("Login successful! Data saved in local storage.");
    // window.location.href = "dashboard.html"; // If needed

  } else {
    document.getElementById("error-message").textContent = "Please fill in all fields.";
  }
});

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("click", function () {
  const passwordField = document.getElementById("password");
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});




document.getElementById('togglePassword').addEventListener('click', () => {
  document.getElementById('password').type = 'text';