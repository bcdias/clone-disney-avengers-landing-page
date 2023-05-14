import hiddenHeader from "./hiddenHeader.js";
import showHeader from "./showHeader.js";
import hiddenElementsHeader from "./hiddenElementsHeader.js";
import showElementsHeader from "./showElementsHeader.js";


document.addEventListener('DOMContentLoaded', () => {
    const btHeroToSign = document.querySelector('[data-hero-sign]')
    const btHeaderSign = document.querySelector('[data-header-toSign]');
    const vingadoresLogo = document.querySelector('[data-hero-movie]');
    const headerLogo = document.querySelector('[data-header-title]');
    
    const logoVingadoresY = vingadoresLogo.getBoundingClientRect().top;
    window.addEventListener('scroll', () => {
        const windowWidth = window.innerWidth;
        const userPosition = window.scrollY;
        const header = document.querySelector('[data-header]');

        console.log(window.scrollto)

        const btHeroToSignY = btHeroToSign.offsetTop + header.clientHeight;

        if (userPosition < logoVingadoresY) {
            hiddenHeader(header);
        } else {
            showHeader(header, windowWidth);
        }

        if (userPosition < btHeroToSignY) {
            hiddenElementsHeader(btHeaderSign, headerLogo);
        } else {
            showElementsHeader(btHeaderSign, headerLogo);
        }
    })

})
