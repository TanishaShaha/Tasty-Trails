// Function to open the side navigation bar without animation
function openNavInstant() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("overlay").style.display = "block";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; // Slightly dark background
}

// Function to open the side navigation bar with animation
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("overlay").style.display = "block";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.3)"; // Slightly dark background
  // Store the state in localStorage
  localStorage.setItem("sidenavOpen", "true");
}

// Function to close the side navigation bar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("overlay").style.display = "none";
  document.body.style.backgroundColor = "#FFFDD0"; // Reset to default background color
  // Store the state in localStorage
  localStorage.setItem("sidenavOpen", "false");
}

// Check localStorage for the state of the side navigation bar on page load
window.onload = function() {
  var sidenavOpen = localStorage.getItem("sidenavOpen");
  if (sidenavOpen === "true") {
      openNavInstant(); // Open instantly without animation if previously open
  }
  else {
    closeNav();
  }
};

// Toggle side navigation bar visibility when the triple line icon is clicked
document.querySelector(".openbtn").addEventListener("click", function() {
  var sidenav = document.getElementById("mySidenav");
  if (sidenav.style.width === "0px") { // Check if the side navigation bar is closed
      openNav(); // If closed, open it
  }
});
