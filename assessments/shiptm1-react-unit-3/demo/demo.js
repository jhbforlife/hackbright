////////////////////////////////////////////
// Unit 3 Assessment ///////////////////////
// Prompt: Recreate this demo in React /////
////////////////////////////////////////////

////////////////////////////////////////////

// Activity Panel
// Generate <li>s for activity list

const activityPanel = document.querySelector('#activity-panel');

const myActivities = ['Snowshoeing', 'Rock Climbing', 'Reading', 'Crocodile Hunting (legal)', 'Photoshopping', 'Deep Sea Exploring', 'Painting', 'Singing A Cappella Music'];

for (let activity of myActivities) {
	activityPanel.insertAdjacentHTML('beforeend', `<li>${activity}</li>`);
}

////////////////////////////////////////////

// Activity Form
// Fetch data from the Bored API and place the response into the DOM

let activityFormBtn = document.querySelector('#activity-form button');

activityFormBtn.addEventListener('click', (evt) => {
	evt.preventDefault();
	fetch('https://www.boredapi.com/api/activity/')
		.then((response) => response.json())
		.then((results) => {
			let randomActivityCard = document.querySelector('#new-activity-card');
			randomActivityCard.innerHTML = `<h4>${results.activity}</h4> <h5>Price: ${results.price}</h5> <h5>Type: ${results.type}</h5> <h5>Num of Participants needed: ${results.participants}`;
		})
})

////////////////////////////////////////////
