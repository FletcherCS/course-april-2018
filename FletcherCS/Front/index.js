(function () {
'use strict';

const navbarButtonMobile = document.querySelector('.navbar_button-mobile');
const sidenav = document.querySelector('.sidenav');
const sidenavClose = document.querySelector('.sidenav-close');

navbarButtonMobile.addEventListener('click', () => {
    sidenav.classList.add('sidenav-activate');
});

sidenavClose.addEventListener('clicl', () => {
    sidenav.classList.remove('sidenav-activate')
})

})();
