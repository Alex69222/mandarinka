const navMenu = document.querySelector('.nav-list');
const burgerBtns = document.querySelectorAll('.burger');
const links = navMenu.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', () => {
        document.body.style.overflowY = 'scroll';
        navMenu.classList.remove('active');
    })
})
burgerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.body.style.overflowY =  navMenu.classList.contains('active') ? 'scroll' : 'hidden';
        navMenu.classList.toggle('active');

    });
});
