'use strict';

// table elements
const tableBody = document.querySelector('#cart-table__body');
const totalPrice = document.querySelector('#cart-table__foot__price');

// fetch and display the cart on load
(async () => {
    try {
        const resp = await fetch('/api/cart');
        const cart = await resp.json();
        loadCartDrinks(cart);
    } catch (err) {
        console.log(err);
    }
})();

// fetch and display each drink in the cart
const loadCartDrinks = (cart) => {
    const filteredCart = cart.filter((drink) => drink.quantity > 0);
    if (filteredCart.length <= 0) { loadCartIsEmpty(); return; }

    filteredCart.forEach(async (idWithQuantity) => {
        const drink = await fetchCartDrink(idWithQuantity);
        const rowHTML = createRowHTML(drink);
        insertRowHTML(rowHTML);
        addRemoveListener(drink);
        updateCartPrice(drink);
    })
}

// display if there are no drinks in the cart
const loadCartIsEmpty = () => {
    const cartIsEmpty =
        `<tr>
            <td>Your cart is empty</td>
        </tr>`
    tableBody.insertAdjacentHTML('beforeend', cartIsEmpty);
}

// fetch each drink in the cart
const fetchCartDrink = async (idWithQuantity) => {
    const { id, quantity } = idWithQuantity;
    const resp = await fetch(`/api/drinks/${id}`);
    const drink = await resp.json();
    drink.quantity = quantity;
    return drink;
}

// create row for each drink in the cart
const createRowHTML = (drink) => {
    return (
        `<div>
            <tr drinkID=${drink.id}>
                <td>${drink.name}</td>
                <td>${drink.quantity}</td>
                <td id="price">$${drink.quantity * drink.price}</td>
                <td><button drink-id=${drink.id} drink-name="${drink.name}" drink-quantity=${drink.quantity}>x</button></td>
            </tr>
        </div>`)
}

// insert row into table for each drink in the cart
const insertRowHTML = (rowHTML) => {
    tableBody.insertAdjacentHTML('beforeend', rowHTML);
}

// add listener to each remove from cart button
const addRemoveListener = (drink) => {
    const removeButton = document.querySelector(`button[drink-id="${drink.id}"]`);
    removeButton.addEventListener('click', removeFromCart);
}

// update shopping cart price each time drink is fetched
const updateCartPrice = (drink) => {
    const currentPrice = Number.parseFloat(totalPrice.innerText.replace('$', ''));
    totalPrice.innerText = `$${currentPrice + (drink.price * drink.quantity)}`;
};

// remove drink from cart and refetch / display the cart
const removeFromCart = async (e) => {
    try {
        let resp = await fetch('/api/cart/remove', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ id: e.target.getAttribute('drink-id'), quantity: 1 })
        })
        const cart = await resp.json();
        alert(`Removed one ${e.target.getAttribute('drink-name')} from cart`);
        resetCartTable();
        loadCartDrinks(cart);
    } catch (err) {
        console.log(err);
    }
}

// clear the table elements for reload
const resetCartTable = () => {
    tableBody.textContent = '';
    totalPrice.innerText = '$0.00';
}