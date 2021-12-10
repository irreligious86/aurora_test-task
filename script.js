const switcher = document.querySelector('.header-label');
const mainContainer = document.querySelector('.main');
const styledIcons = document.querySelectorAll('.styled-icon');
const searchButton = document.querySelector('.search-button-sm');
const dropdownSearchForm = document.querySelector('.header-search');
const userState = document.querySelector('.user-state');
const userStateCase = document.querySelectorAll('.user-state-case');




const userStateHandler = () => {
    userStateCase.forEach(i => {
        console.log(i)
        i.classList.toggle('hidden');
    })
};

const switchHandler = () => {
    mainContainer.classList.toggle('main-secondary-style');
    styledIcons.forEach(i => {
        i.classList.toggle('hidden');
    })
};

const searchButtonHandler = () => {
    dropdownSearchForm.style.display = 'flex';
};


switcher.addEventListener('click', switchHandler);
searchButton.addEventListener('click', searchButtonHandler);
userState.addEventListener('click', userStateHandler);