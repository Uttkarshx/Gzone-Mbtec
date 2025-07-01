// Modal Elements
const authModal = document.getElementById("authModal");
const loginLink = document.querySelector("a[href='#login']");
const signupLink = document.querySelector("a[href='#signup']");
const closeModal = document.querySelector(".auth-close");

// Show Login Modal
loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  showLogin();
  authModal.classList.remove("hidden");
  document.body.style.overflow = 'hidden';
});

// Show Signup Modal
signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  showSignup();
  authModal.classList.remove("hidden");
  document.body.style.overflow = 'hidden';
});

// Close Modal
closeModal.addEventListener("click", () => {
  authModal.classList.add("hidden");
  document.body.style.overflow = '';
});

// Switch to Login Tab
function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
  document.getElementById("signupForm").classList.add("hidden");
  document.querySelectorAll(".auth-tab")[0].classList.add("active");
  document.querySelectorAll(".auth-tab")[1].classList.remove("active");
}

// Switch to Signup Tab
function showSignup() {
  document.getElementById("signupForm").classList.remove("hidden");
  document.getElementById("loginForm").classList.add("hidden");
  document.querySelectorAll(".auth-tab")[1].classList.add("active");
  document.querySelectorAll(".auth-tab")[0].classList.remove("active");
}
