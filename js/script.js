let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
    menubar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');  
    searchForm.classList.remove('active');
    loginform.classList.remove('active');
    menubar.classList.remove('active');
}

let loginform = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginform.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    menubar.classList.remove('active');
}
        
let menubar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    menubar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginform.classList.remove('active');
}

window.onscroll = () =>
    {
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginform.classList.remove('active');
        menubar.classList.remove('active');
}



