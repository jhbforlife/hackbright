// fetch shopping cart
const fetchCart = () => {
    fetch('/api/cart')
        .then((response) => response.json())
        .then((cart) => { fetchCartDrinks(cart) })
        .catch((err) => { console.log(err) })
};

// fetch each drink in the shopping cart
const fetchCartDrinks = (cart) => {
    for (const item of cart) {
        fetch(`/api/drinks/${item.id}`)
            .then((response) => response.json())
            .then((drink) => ({ drink: drink, quantity: item.quantity }))
            .then((drinkWithQuantity) => displayCartDrink(drinkWithQuantity))
            .then((priceOfQuantity) => updateCartPrice(priceOfQuantity))
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
    priceOfQuantity = (drink.drink.price * drink.quantity)
    newPrice.innerText = `$${priceOfQuantity}`;

    newRow.append(newTitle, newQuantity, newPrice);
    tableBody.appendChild(newRow);
    return priceOfQuantity;
};

// update shopping cart price each time drink is fetched
const updateCartPrice = (price) => {
    const tablePrice = document.querySelector('#cart-table__foot__price');
    const currentPrice = Number.parseFloat(tablePrice.innerText.replace('$', ''));
    tablePrice.innerText = `$${(currentPrice + price)}`;
};

// load shopping cart when page is loaded
fetchCart();