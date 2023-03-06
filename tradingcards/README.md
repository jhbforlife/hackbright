# Exercise: Trading Cards

Practice your React skills by building components to display cards for a trading card game using data from the [Animal Crossing: New Horizons API](https://acnhapi.com/). You’ll create functional components that read data from props, use export and import, and apply CSS classes to add style.

<br>
<br>

## Getting started

In your terminal, run the following commands to create a new React project and open it in VS Code.

1. Use npx to create a new React project called tradingcards

   ```
   $ npx create-react-app tradingcards
   ```

2. Change into the directory that was created

   ```
   $ cd tradingcards
   ```

3. Open the directory (.) in VS Code

   ```
   $ cd .
   ```

<br>
<br>

## What you’ll build

The finished application should display trading cards with the name, portrait, birthday, hobby, and catchphrase of each animal.
Note the background and text colors can be different for each card. This is an optional challenge that you can try if you finish the main exercise.

To get you started, here’s how Wolfgang’s card might look in HTML and CSS. Your React components should produce the same HTML and use the same CSS rules.

_<sub>Example HTML</sub>_

```
<div class="Card">
  <h1 class="Card-name">Wolfgang</h1>

  <img class="Card-image" src="https://acnhapi.com/v1/images/villagers/383"
  alt="portrait"/>

  <dl class="Card-details">
    <dt>Birthday</dt>
    <dd>November 25th</dd>
    <dt>Hobby</dt>
    <dd>Education</dd>
    <dt>Catchphrase</dt>
    <dd>snarrrl</dd>
  </dl>
</div>
```

_<sub>Example CSS</sub>_

```
.Card {
  width: 300px;
  height: fit-content;
  padding: 1rem;
  margin: 0.5rem 1rem;
  display: inline-block;
  border-radius: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  word-wrap: break-word;
  box-sizing: border-box;
}

.Card-image {
  width: 100%;
}

.Card-name {
  margin: 0 0 0.5rem 0;
}

.Card-details dt {
  font-weight: bold;
}
.Card {
  width: 300px;
  height: fit-content;
  padding: 1rem;
  margin: 0.5rem 1rem;
  display: inline-block;
  border-radius: 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.125);
  word-wrap: break-word;
  box-sizing: border-box;
}

.Card-image {
  width: 100%;
}

.Card-name {
  margin: 0 0 0.5rem 0;
}

.Card-details dt {
  font-weight: bold;
}
```

<br>

You’ll also need to download the card data to get started. Importing this file in your React project will give you access to an array of objects. Here’s the object with data for Wolfgang; we’ve highlighted the properties you’ll need to display the card:

```
{
  "id": 383,
  "fileName": "wol02",
  "name": {
    "name-USen": "Wolfgang", <-
    "name-EUen": "Wolfgang",
    "name-EUde": "Weber",
    "name-EUes": "Wolfi",
    "name-USes": "Wolfi",
    "name-EUfr": "Wolfgang",
    "name-USfr": "Wolfgang",
    "name-EUit": "Wolfgang",
    "name-EUnl": "Wolfgang",
    "name-CNzh": "\u7f57\u535a",
    "name-TWzh": "\u7f85\u535a",
    "name-JPja": "\u30ed\u30dc",
    "name-KRko": "\ub85c\ubcf4",
    "name-EUru": "\u0412\u043e\u043b\u044c\u0444\u0438"
  },
  "personality": "Cranky", <-
  "birthdayString": "November 25th", <-
  "birthday": "25/11",
  "species": "Wolf",
  "gender": "Male",
  "subtype": "B",
  "hobby": "Education",
  "catchphrase": "snarrrl", <-
  "iconUri": "https://acnhapi.com/v1/icons/villagers/383",
  "imageUri": "https://acnhapi.com/v1/images/villagers/383", <-
  "bubbleColor": "#194c89",
  "textColor": "#fffad4",
  "saying": "Don't be afraid to show your fangs.",
  "catch-translations": {
    "catch-USen": "snarrrl",
    "catch-EUen": "snarrrl",
    "catch-EUde": "knurrr",
    "catch-EUes": "grauuuh",
    "catch-USes": "grauuuh",
    "catch-EUfr": "snurffff",
    "catch-USfr": "snurffff",
    "catch-EUit": "zanna",
    "catch-EUnl": "snauw",
    "catch-CNzh": "\u7f57\u7f57",
    "catch-TWzh": "\u7f85\u7f85",
    "catch-JPja": "\u306e\u306a",
    "catch-KRko": "\uac70\ubd10",
    "catch-EUru": "\u0430\u0443-\u0440\u0440"
  }
}
```

<br>

Use the import statement wherever you need to access the data. For example:

```
import cardData from './cardData.json';

const wolfgang = cardData[0];

console.log(wolfgang.personality);
// Expected output: Cranky
```

<br>
<br>

## Requirements

- Create one or more components to render the contents of **_cardData.json_**. What those components are and how they should be organized is up to you.

- Each card should display the name, portrait, birthday, hobby, and catchphrase of each object in **_cardData.json_**.

- Avoid hard-coding as much as possible and use the data from **_cardData.json_** to dynamically generate the cards.

- Optional: use **_obj.bubbleColor_** and **_obj.textColor_** to dynamically set the background color and text color for each card

- Optional: enhance the design of the cards by displaying additional data or by modifying the CSS.
