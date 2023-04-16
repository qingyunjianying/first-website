// /////////////////menu show
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-nav');
    })

}


// // /////////menu hiddern
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-nav');
    })
}
/*==================== REMOVE MENU MOBILE ====================*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction() {
//     const navMenu = document.getElementById('nav-menu')
//     // 点击每个菜单链接后收起菜单栏
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))