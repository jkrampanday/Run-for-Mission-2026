const navSlide = () =>{
    const burgerMenu = document.querySelector('.burgerMenu');
    const nav = document.querySelector('.menuList');

    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

}

navSlide();