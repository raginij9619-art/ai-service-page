const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  status.textContent = "Message sent successfully!";
  status.style.color = "lightgreen";
  form.reset();
});
