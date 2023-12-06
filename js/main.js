const menuSwitcherButton = document.querySelector('.mn_sw');
const navigation = document.querySelector('.nav_lst');
menuSwitcherButton.addEventListener('click', (e) => {
    navigation.classList.toggle('navigation__list--opened');
    menuSwitcherButton.classList.toggle('menu-switcher--opened');
});

navigation.querySelectorAll('.lnk').forEach(link => {
    link.addEventListener('click', e => {
        navigation.classList.toggle('navigation__list--opened');
        menuSwitcherButton.classList.toggle('menu-switcher--opened');
    })
})