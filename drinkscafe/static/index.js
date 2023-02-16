// fetch drinks
const fetchDrinks = () => fetch('/api/drinks')
    .then((response) => response.json())
    .then((drinks) => { displayDrinks(drinks); });

// display drinks
const displayDrinks = (drinks) => {
    const menu = document.querySelector('#menu');
    for (const drink of drinks) {
        // create parent div
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('drink');
        drinkDiv.id = drink.id;

        // create child div for drink image
        const drinkImgDiv = document.createElement('div');
        drinkImgDiv.classList.add('drink-img');
        const drinkImgImg = document.createElement('img');
        drinkImgImg.src = drink.imgURL;
        drinkImgDiv.append(drinkImgImg);

        // create child div for drink body
        const drinkBodyDiv = document.createElement('div');
        drinkBodyDiv.classList.add('drink-body');
        const drinkBodyH3 = document.createElement('h3');
        drinkBodyH3.innerText = drink.name;
        const drinkBodyP = document.createElement('p');
        drinkBodyP.innerText = `Price: $${drink.price}`;
        const drinkBodyButton = document.createElement('button');
        drinkBodyButton.classList.add('add-to-cart');
        drinkBodyButton.innerText = 'Add to Cart';
        drinkBodyButton.id = drink.id;
        drinkBodyButton.addEventListener('click', addDrinkToCart);

        // append child elements to parent
        drinkBodyDiv.append(drinkBodyH3, drinkBodyP, drinkBodyButton);
        drinkDiv.append(drinkImgDiv, drinkBodyDiv);
        menu.append(drinkDiv);
    }
}

// add drink to cart
const addDrinkToCart = (e) => {
    fetch('/api/cart/add', {
        method: 'POST',
        headers: { contentType: 'application/json' },
        body: JSON.stringify({ id: e.target.id, quantity: 1 })
    })
        .then((response) => {
            console.log(response);
        })
};

// fetch drinks when the page is loaded
fetchDrinks();