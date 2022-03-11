

//Menu
const menuIcon = document.querySelector
('.hamburger-menu');
const navbar = document.querySelector('.navbar');


menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("change");
});

//plan
Array.from(document.querySelectorAll
(".navigation-button")).forEach(item => {
    item.onclick = () => {
        item.parentElement.parentElement.classList.
        toggle("change")
    };
});