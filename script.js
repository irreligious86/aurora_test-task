const switcher = document.querySelector('.header-label');
const mainContainer = document.querySelector('.main');

const switchHandler = () => {
    mainContainer.classList.toggle('main-secondary-style');
};





switcher.addEventListener('click', switchHandler);