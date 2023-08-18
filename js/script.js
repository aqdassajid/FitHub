const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
let isLoggedIn = true;

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");

  navToggle.firstElementChild.classList.contains("fa-bars")
    ? navToggle.firstElementChild.classList.replace("fa-bars", "fa-xmark")
    : navToggle.firstElementChild.classList.replace("fa-xmark", "fa-bars");
});

// Replace the window.location.href code with the following logic in your script.js file
document.addEventListener("DOMContentLoaded", () => {
  const loginButton = document.querySelector("#login-button");
  const profileSection = document.querySelector("#profile-section");
  const logoutButton = document.querySelector("#logout-button");

  // Check if the user is logged in (you need to implement your own logic)
  // Replace with your actual authentication logic

  // Toggle the display of the login button and profile section
  if (isLoggedIn) {
    loginButton.style.display = "none";
    profileSection.style.display = "block";
  } else {
    loginButton.style.display = "block";
    profileSection.style.display = "none";
  }

  // Add event listener to the logout button
  logoutButton.addEventListener("click", () => {
    // Perform logout logic (clear session, remove tokens, etc.)
    // Then redirect to the login page
    isLoggedIn = false;
    window.location.href = "http://127.0.0.1:5502/index.html"; // Replace with your actual login page URL
  });
});
