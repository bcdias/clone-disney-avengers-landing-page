import hiddenHeader from "./hiddenHeader.js";
import showHeader from "./showHeader.js";
import hiddenElementsHeader from "./hiddenElementsHeader.js";
import showElementsHeader from "./showElementsHeader.js";
import changeOpacity from "./changeOpacity.js";

// Waiting DOM load
document.addEventListener('DOMContentLoaded', () => {

    //Get HTML elements
    const btHeroToSign = document.querySelector('[data-hero-sign]')
    const btHeaderSign = document.querySelector('[data-header-toSign]');
    const vingadoresLogo = document.querySelector('[data-hero-movie]');
    const headerLogo = document.querySelector('[data-header-title]');
    const bgImg = document.querySelector('[data-bg-img]');
    const synopsis = document.querySelector('[data-about-synopsis]');

    // Get position elements
    const logoVingadoresY = vingadoresLogo.getBoundingClientRect().top;
    const synopsisBotton = synopsis.getBoundingClientRect().bottom

    // Listening scroll event
    window.addEventListener('scroll', () => {

        // Get window information
        const windowWidth = window.innerWidth;
        const userPosition = window.scrollY;


        // Get header tag
        const header = document.querySelector('[data-header]');

        // Calculating to sign button Y value
        const btHeroToSignY = btHeroToSign.offsetTop + header.clientHeight;

        

        // Handle with opacity
        changeOpacity(bgImg, userPosition);

        // Handle with header
        if (userPosition < logoVingadoresY) {
            hiddenHeader(header);
        } else {
            showHeader(header, windowWidth);
        }

        if (userPosition < btHeroToSignY || userPosition > synopsisBotton) {
            hiddenElementsHeader(btHeaderSign, headerLogo);
        } else {
            showElementsHeader(btHeaderSign, headerLogo);
        }
    })

})


