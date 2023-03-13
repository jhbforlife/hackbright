/////////////////////////////////////////////
// Unit 2 Assessment - DOM Manipulation /////
/////////////////////////////////////////////

'use strict';

//
// PROMPT 1
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out".
//
// If a user clicks on the button again, its text should switch from "Log Out" -> I like what you did there
// to "Log In".

const loginButton = document.querySelector('#login-button');
loginButton.addEventListener('click', () => {
    const authStatus = loginButton.textContent;
    switch (authStatus) {
        case 'Log In':
            loginButton.textContent = "Log Out";
            break;
        case "Log Out":
            loginButton.textContent = "Log In";
            break;
    }
});

//
// PROMPT 2
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

const alertText = document.querySelector('#alert-text');
const sendAlertButton = document.querySelector('#prompt-2 button');
sendAlertButton.addEventListener('click', (e) => {
    e.preventDefault();
    alert(alertText.value);
});


//
// PROMPT 3
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Click to add item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ul id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ul>

const listAdderButton = document.querySelector('#list-adder');
const list = document.querySelector('#list');
listAdderButton.addEventListener('click', () => {
    list.insertAdjacentHTML('beforeend', '<li>Item</li>');
});
