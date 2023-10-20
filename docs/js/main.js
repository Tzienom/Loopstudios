const NAV_LINKS = document.querySelectorAll('.nav_link');
const NAV_LIST = document.querySelector('.nav_list');
const MENU_OPEN = document.querySelector('.menu_open');
const MENU_CLOSE = document.querySelector('.menu_close');

// for (let i = 0; i < NAV_LINKS.length; i++) {
//    NAV_LINKS[i].addEventListener('mouseover', (e) => {
//     e.target.setAttribute('class', 'line');
//     e.target.style.color = 'white';
//    });

//    NAV_LINKS[i].addEventListener('mouseout', (e) => {
//     e.target.removeAttribute('class', 'line');
//    });
// }

MENU_OPEN.addEventListener('click', () => {
    NAV_LIST.style.width = '100%';

    MENU_OPEN.style.display = 'none';
    MENU_CLOSE.style.display = 'block';

    // MENU_CLOSE.style.position = 'fixed';
});

MENU_CLOSE.addEventListener('click', () => {
    NAV_LIST.style.width = '0';

    MENU_CLOSE.style.display = 'none';
    MENU_OPEN.style.display = 'block';

});