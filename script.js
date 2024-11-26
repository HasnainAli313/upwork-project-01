document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = mobileNav.querySelectorAll('a');

    menuToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileNav.classList.remove('open');
        });
    });
});



let currentDate = new Date();
let currentYear =currentDate.getFullYear();

let footerText = document.getElementById('footerText');    
footerText.innerHTML=`Captain Appliance | PO Box 252 Germantown, OH 45327 | © CAPTAIN APPLIANCE LLC ${currentYear} `
// let currentYear = currentDate.getFullYear();