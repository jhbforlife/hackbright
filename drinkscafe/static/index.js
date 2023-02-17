'use strict';

// drinks menu
const menu = document.querySelector('#menu');

// fetch and add drinks to the menu on page load
(async () => {
    try {
        const drinks = await (await fetch('/api/drinks')).json();
        drinks.forEach(drink => {
            const element = createDrinkHTML(drink);
            insertDrinkHTML(element);
            addToCartListener(drink);
        });
    } catch (err) {
        console.log(err);
    }
})();

// create each drink html
const createDrinkHTML = (drink) => {
    return (
        `<div class="drink" id=${drink.id}>
        <div class="drink-img">
            <img src="${drink.imgURL}">
        </div>
        <div class="drink-body">
            <h3>${drink.name}</h3>
            <p>Price: $${drink.price}</p>
            <button class="add-to-cart" id=${drink.id} name="${drink.name}">Add to Cart</button>
        </div>
    </div>`
    );
}

// insert each drink html as last child in menu
const insertDrinkHTML = (element) => {
    menu.insertAdjacentHTML('beforeend', element);
}

// add event listener to each add to cart button
const addToCartListener = (drink) => {
    const addToCart = document.querySelector(`.add-to-cart[id="${drink.id}"]`);
    addToCart.addEventListener('click', addDrinkToCart);
}

// add drink to cart
const addDrinkToCart = async (e) => {
    try {
        await fetch('/api/cart/add', {
            method: 'POST',
            headers: { contentType: 'application/json' },
            body: JSON.stringify({ id: e.target.id, quantity: 1 })
        })
        alert(`Added ${e.target.name} to cart!`)
    }
    catch (err) {
        console.log(err)
    }
};