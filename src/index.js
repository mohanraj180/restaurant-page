import loadHome from "./home";
import menuContainer from "./menu";
import contactContainer from "./contact";
import './styles.css';
import './home-image.jpg'

console.log('test');
const home = document.querySelector('.home-container');
if (home === null) {
    loadHome();
}

const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', () => {

    const home = document.querySelector('.home-container');
    const contact = document.querySelector('.contact-container');
    console.log(home);
    if (home !== null) {
        console.log('home removed');
        const homeBtn = document.getElementById('home');
        homeBtn.style.borderBottom = 'none';
        home.remove();
    } else if (contact !== null) {
        console.log('contact removed');
        const contactBtn = document.getElementById('contact');
        contactBtn.style.borderBottom = 'none';
        contact.remove();
    }

    const menuBtn = document.getElementById('menu');
    menuBtn.style.borderBottom = '2px solid white';

    const content = document.getElementById('content');
    content.appendChild(menuContainer);
});

const contactBtn = document.querySelector('#contact');
contactBtn.addEventListener('click', () => {
    const home = document.querySelector('.home-container');
    const menu = document.querySelector('.menu-container');
    if (home !== null) {
        console.log('home removed');
        const homeBtn = document.getElementById('home');
        homeBtn.style.borderBottom = 'none';
        home.remove();
    } else if (menu !== null) {
        console.log('menu removed');
        const menuBtn = document.getElementById('menu');
        menuBtn.style.borderBottom = 'none';
        menu.remove();
    }

    const contactBtn = document.getElementById('contact');
    contactBtn.style.borderBottom = '2px solid white';

    const content = document.getElementById('content');
    content.appendChild(contactContainer);
});

const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', () => {
    const home = document.querySelector('.home-container');
    if (home !== null) {
        console.log('home removed');
        home.remove();
    }

    const menu = document.querySelector('.menu-container');
    const contact = document.querySelector('.contact-container');

    if (menu !== null) {
        console.log('menu removed');
        const menuBtn = document.getElementById('menu');
        menuBtn.style.borderBottom = 'none';
        menu.remove();
    }
    else if (contact !== null) {
        console.log('contact removed');
        const contactBtn = document.getElementById('contact');
        contactBtn.style.borderBottom = 'none';
        contact.remove();
    }

    loadHome();

});
