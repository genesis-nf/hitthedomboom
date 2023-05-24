function Menu(e) {
    let list = document.querySelector('ul');

    e.name === 'menu' ? (e.name = "close", list.classList.add('left-[0px]'), list.classList.add('opacity-100')
    ) : (e.name = "menu", list.classList.remove('left-[0px]'), list.classList.remove('opasity-100'))
};