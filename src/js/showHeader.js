// const header = document.querySelector('[data-header]');

function showHeader(header, windowWidth) {
        if(windowWidth >= 768){
        header.classList.remove('header--is-transparent')
    }
}

export default showHeader