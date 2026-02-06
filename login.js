// login.js

// Allowed credentials
const users = {
  "ramjadhav": "Ram123",
  "ravikirangadhe": "Ravi123",
  "sagarchavan": "Sagar123",
  "sanjayasodekar": "Sanjay123",
  "tusharsonwane": "Tushar123",
  "bhagwatdighule": "Bhagwat123",
  "rupeshpatil": "Rupesh123",
  "mahadeokhirsagar": "Mahadeo123",
  "prakashmorale": "Prakash123",
  "surendragarbade": "Surendra123",
  "dhanumisal": "Dhanu123",
  "shubhambhise": "Shubham123",
  "devidasrathod": "Devidas123"
};

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const errorDiv = document.getElementById("error");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (users[username] && users[username] === password) {
      localStorage.setItem("loggedUser", username);
      // ✅ Redirect only if correct
      window.location.href = "home.html";
    } else {
      // ✅ Show error, no redirect
      errorDiv.textContent = "Invalid username or password!";
      errorDiv.style.color = "red";
    }
  });
});
