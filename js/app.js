const menuItems = document.querySelectorAll('.menu a')

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
    const elementId = element.getAttribute('href');
    return document.querySelector(elementId).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 50;
    
    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: 'smooth',
    })
}


