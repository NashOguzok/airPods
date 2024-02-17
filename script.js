const btn = document.querySelector('.btn-burger');
const navMenu = document.querySelector('.nav-menu');
btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    navMenu.classList.toggle('open')
})