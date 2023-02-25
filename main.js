const toggleLanguage = document.getElementById("nav_menu_language");
const menuBtn = document.getElementById("mobile_menu_btn");
const mobileMenu = document.getElementById("navbar");

toggleLanguage.addEventListener('click', function() {
    toggleLanguage.textContent === "CZ" ? toggleLanguage.textContent = "EN" : toggleLanguage.textContent = "CZ"
})

menuBtn.addEventListener('click', function() {
    mobileMenu.style.display === "none" ? mobileMenu.style.display = "block" : mobileMenu.style.display = "none"
})

console.log(mobileMenu)
