const navSlide = () =>{
    const burgerMenu = document.querySelector('.burgerMenu');
    const nav = document.querySelector('.menuList');
    const navLinks = document.querySelectorAll('.menuList');

    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

     navLinks.forEach((link, index) => {
       link.style.animation = 'menuListFade 0.5s ease forawards ${index / 7 + 1.2}s';
    });

}

navSlide();