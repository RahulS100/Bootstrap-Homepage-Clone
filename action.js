burger_menu = document.querySelector('.ham_bur');
menulist = document.querySelector('.menu_item');
navbar = document.querySelector('.main_head');
down_btn = document.getElementById('d_btn');

burger_menu.addEventListener('click', ()=> {
    navbar.classList.toggle('resize_menu');
    menulist.classList.toggle('menu_ham_vi1');
    down_btn.classList.toggle('menu_ham_vi1');
});