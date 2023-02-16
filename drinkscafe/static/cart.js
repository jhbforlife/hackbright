'use strict';
// fetch shopping cart
const fetchCart = () => {
    fetch('/api/cart')
        .then((response) => response.json())
        .then((cart) => { fetchCartDrinks(cart) })
        .catch((err) => { console.log(err) });
};

// fetch each drink in the shopping cart
// mock API calls return drinks with quantities of 0 or less
// handled by checking item quantity before making call to fetch
const fetchCartDrinks = (cart) => {
    let actualDrinks = 0;
    for (const item of cart) {
        if (item.quantity > 0) {
            actualDrinks++;
            fetch(`/api/drinks/${item.id}`)
                .then((response) => response.json())
                .then((drink) => ({ drink: drink, quantity: item.quantity }))
                .then((drinkWithQuantity) => displayCartDrink(drinkWithQuantity))
                .then((priceOfQuantity) => { updateCartPrice(priceOfQuantity) })
                .catch((err) => { console.log(err); });
        }
    }
    // if there are no drinks with an actual quantity to buy
    // display 'Your cart is empty'
    if (actualDrinks === 0) {
        const tableBody = document.querySelector('#cart-table__body');
        const newRow = document.createElement('tr');
        const newTitle = document.createElement('td');
        newTitle.innerText = 'Your cart is empty';
        newRow.append(newTitle);
        tableBody.append(newRow);
    }
};

// display each drink when it is fetched
const displayCartDrink = (drink) => {
    const tableBody = document.querySelector('#cart-table__body');

    const newRow = document.createElement('tr');
    const newTitle = document.createElement('td');
    newTitle.innerText = drink.drink.name;

    const newQuantity = document.createElement('td');
    newQuantity.innerText = drink.quantity;

    const newPrice = document.createElement('td');
    const priceOfQuantity = (drink.drink.price * drink.quantity)
    newPrice.innerText = `$${priceOfQuantity}`;

    const newButton = document.createElement('button');
    newButton.innerText = 'Remove';
    newButton.id = drink.drink.id;
    newButton.name = drink.drink.name;
    newButton.addEventListener('click', removeOneDrink);

    newRow.append(newTitle, newQuantity, newPrice, newButton);
    tableBody.appendChild(newRow);
    return priceOfQuantity;
};

// update shopping cart price each time drink is fetched
const updateCartPrice = (price) => {
    const tablePrice = document.querySelector('#cart-table__foot__price');
    const currentPrice = Number.parseFloat(tablePrice.innerText.replace('$', ''));
    tablePrice.innerText = `$${(currentPrice + price)}`;
};

// remove one drink from shopping cart
const removeOneDrink = (e) => {
    fetch('/api/cart/remove', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ id: e.target.id, quantity: 1 })
    })
        .then(() => {
            alert(`Removed one ${e.target.name} from cart`);
            resetUI();
            fetchCart();
        })
        .catch((err) => { console.log(err); });
}

// reset table and price to reload after drink is removed
const resetUI = () => {
    const tableBody = document.querySelector('#cart-table__body');
    const emptyBody = document.createElement('tbody');
    emptyBody.id = 'cart-table__body';
    tableBody.replaceWith(emptyBody);

    const tablePrice = document.querySelector('#cart-table__foot__price');
    tablePrice.innerText = '$0.00';
}

// load shopping cart when page is loaded
fetchCart();