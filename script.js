// ===== JavaScript for Kencho's Portfolio =====

// Ask visitor name
let visitorName = prompt("Welcome! What is your name?");
if (visitorName) {
  document.getElementById("welcomeText").innerText = `Welcome, ${visitorName}!`;
}

// Change text on button click
const button = document.getElementById("changeTextBtn");
button.addEventListener("click", () => {
  button.textContent = "Thanks for clicking!";
  button.style.backgroundColor = "#4CAF50";
});

// Highlight project cards
function highlight(card) {
  card.style.backgroundColor = "#f0f8ff";
  card.style.transform = "scale(1.03)";
  card.style.transition = "0.3s";
}
function removeHighlight(card) {
  card.style.backgroundColor = "";
  card.style.transform = "scale(1)";
}

// Form submission
const form = document.getElementById("contactForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById("formResponse").innerText = `Thank you, ${name}! Your message has been sent.`;
  form.reset();
});

// Dark/Light mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Light Mode";
  } else {
    themeToggle.textContent = "🌙 Dark Mode";
  }
});
