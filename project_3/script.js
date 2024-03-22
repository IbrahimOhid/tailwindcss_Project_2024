// select all needed element
const MenuButton = document.querySelector('#menu-btn');
const CloseButton = document.querySelector('#close-btn');
const NavItem = document.querySelector('#nav-item');

// addEventListener

// menu button
MenuButton.addEventListener('click', ()=>{
    NavItem.style.display = 'flex';
    CloseButton.style.display  = 'block';
    MenuButton.style.display  = 'none';
})

// close button
CloseButton.addEventListener('click', ()=>{
    NavItem.style.display = 'none';
    CloseButton.style.display  = 'none';
    MenuButton.style.display  = 'block';
})