function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.icon');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.src = "../assets/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg"; 
    } else {
        menuMobile.classList.add('open');
        icon.src = "../assets/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg";
    }
}