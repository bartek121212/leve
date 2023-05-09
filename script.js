let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

hamMenuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-times");
});
navLinks.forEach((navLinks) => {
  navLinks.addEventListener("click", () => {
    navBar.classList.remove("active");
    hamMenuIcon.classList.toggle("fa-times");
  });
});


// Pobierz aktualny adres URL
const currentUrl = window.location.href;

// Pobierz protokół
const protocol = window.location.protocol;

// Pobierz nazwę hosta
const host = window.location.host;

// Pobierz ścieżkę
const path = window.location.pathname;

// Wyświetl wyniki w konsoli
console.log("Aktualny adres URL:", currentUrl);
console.log("Protokół:", protocol);
console.log("Nazwa hosta:", host);
console.log("Ścieżka:", path);