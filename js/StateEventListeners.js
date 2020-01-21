const home = document.querySelector(".home");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const home2 = document.querySelector(".home-s");
const about2 = document.querySelector(".about-s");
const contact2 = document.querySelector(".contact-s");

home.addEventListener('click', (e) => {
    e.preventDefault();
    page.change(new homeState);
});

about.addEventListener('click', (e) => {
    e.preventDefault();
    page.change(new aboutState);
});

contact.addEventListener('click', (e) => {
    e.preventDefault();
    page.change(new contactState);
});

home2.addEventListener('click', (e) => {
    e.preventDefault();
    page.change(new homeState);
});

about2.addEventListener('click', (e) => {
    e.preventDefault();
    page.change(new aboutState);
});

contact2.addEventListener('click', (e) => {
    e.preventDefault();
    page.change(new contactState);
});