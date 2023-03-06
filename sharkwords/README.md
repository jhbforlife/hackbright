# Exercise: Sharkwords

Complete functions that manipulate the DOM to implement user interactivity for a game called Sharkwords.

<br>

## Getting Started

<br>

### Install dependencies and start the development server

This exercise depends on live-server as a development server with live reload capabilities. A **_live reloading_** server automatically refreshes the browser whenever it detects a change in your code. Follow the instructions below to install the project’s dependencies (**_live-server_** is our only dependency) and start the dev server.

> ###### <sub>NOTE</sub>
>
> ### Watch servers
>
> Servers that monitor your filesystem for changes are called watch servers. A live reloading server is a type of watch server.

<br>

In the VS Code terminal, run the following command to install the project’s dependencies (make sure you’re in the project’s root directory):

```
npm install
```

Run `npm start` to start the development server. The server will open a browser window and display the project’s home page.

```
npm start
```

> ###### <sub>WARNING</sub>
>
> ### npm install reports high security vulnerabilities
>
> Ignore these warnings — they’re harmless for this exercise.
>
> The vulnerabilities come from a dependency of the live-server package and are fixed in the latest version of live-server. However, the latest version of live-server has a breaking change that causes the dev server to fail.
>
> The vulnerability caused by live-server is a [Regular Expression Denial of Service vulnerability](https://security.snyk.io/vuln/SNYK-JAVA-ORGWEBJARSBOWERGITHUBES128-1059093). Again, it doesn’t cause problems for this exercise.

<br>
<br>

## Overview

In Sharkwords, you’re given a random word. Your goal is to find the value of that word by guessing the letters that might make up the word. If you guess a letter that’s not in the word, sharks will begin to enter the screen so be careful! If you make 5 wrong guesses, the sharks will attack!

<br>

### Check out the demo

First, you should check out our demo of the complete version of Sharkwords since it’ll give you an idea of how the final result should work.

To see the demo, run your server and click on the `Play the Sharkwords demo` link to navigate to the demo page (_demo.html_). Start playing the game! Try to guess the word by clicking on the letter buttons.

Your goal is to get a comprehensive idea of the features you’ll be working toward implementing — what happens when you guess a word successfully? What happens when you can’t guess the word? Also since you will be building the user interface in this first part, focus on what the components of the page are. What things are similar and probably have the same CSS properties?

<br>

### What you’re building

The version of Sharkwords you’ll be working with is in sharkwords.html. Navigate to that page now, either by

<ul><li>going back to the homepage and clicking on Implement your version of Sharkwords</li>
<li>or by replacing demo.html with sharkwords.html in the URL bar</li></ul>

This is where your game will run! In this exercise, you’ll make some changes to **_sharkwords.html_** to set up a JavaScript environment for your game. Then, you’ll do the rest of your work in **_static/js/sharkwords.js_**. You will **not** need to make changes to any other files (do feel free to check them out if you’d like, for example, to learn how the CSS is written).

You should also open the web console in your browser. The web console is an interactive JavaScript shell. It’ll come in handy when you need to debug your code, since it’s where any error messages or print statements will appear. Check out the note below for how to open the web console for your specific browser.

> ###### <sub>NOTE</sub>
>
> ### How to open the web console
>
> [Firefox: how to open the web console](https://developer.mozilla.org/en-US/docs/Tools/Web_Console/Opening_the_Web_Console)
>
> [Chrome: how to open the dev tools](https://developers.google.com/web/tools/chrome-devtools#open); once you open the dev tools, the console will be in a panel called Console
>
> [Safari: how to enable the develop menu](https://support.apple.com/guide/safari/use-the-developer-tools-in-the-develop-menu-sfri20948/mac); then click on Develop > Show JavaScript Console

Now you’re ready to start!

<br>
<br>

## Setting Up JavaScript

<br>

### Import _sharkwords.js_

Now, you need to import **_static/js/sharkwords.js_** into your HTML. You’ll include this at the bottom of your **_body_** tag.

Create a **_script_** tag that imports **_sharkwords.js_**. You can add the **_script_** tag right before the closing body tag (`</body>`).

```
<body>
  <!-- (...snippet) -->
  <script src="/static/js/sharkwords.js"></script>
</body>
```

<br>

### Import _style.css_

You may notice there is a CSS file in **_static/css/style.css_** but we have not included it in the HTML file. Include this in the HTML file by adding it within your **_head_** tags. If you do this correctly, your page should have a light blue background after **_live-reload_** triggers a page refresh.

```
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Play Sharkwords!</title>
  <link rel="stylesheet" href="static/css/style.css">
</head>
```

<br>
<br>

## Investigate Code in **_sharkwords.js_**

Take a moment to skim the code in **_static/js/sharkwords.js_**.

At the top of the file, we’ve created two global variables:

<table>
<tr><td style="font-weight:bold; font-style:italic">numWrong</td><td>a variable to keep track of how many wrong guesses were made</td></tr>
<tr><td style="font-weight:bold; font-style:italic">words</td><td>an array of strings that can be used to generate a random word</td></tr>
</table>

<br>

Scroll past the function stubs, all the way to the end of the file until you see the **_startGame_** function. A lot of the syntax here may look mysterious, but don’t worry — all you need to know is that this is the part of the code that calls your functions and runs the game. Notice the commented out lines of code that end with `// FIXME:`

<br>

<sup style="font-style:italic">static/js/sharkwords.js</sup>

```
// An immediate invoked function expression (IIFE) used to kick off the game.
(function startGame() {
  // generateDivsForChars(word); // FIXME
  // generateLetterButtons(); // FIXME

  document.querySelectorAll("#letter-buttons button").forEach((button) => {
    button.addEventListener("click", (e) => {
      const clickedButton = e.target;
      const letter = clickedButton.innerText;

      if (!word.includes(letter)) {
        // handleIncorrectGuess(); // FIXME
      } else {
        // handleCorrectGuess(letter); // FIXME
      }

      // Disable the button so user doesn't accidentally guess the same letter twice
      clickedButton.disabled = true;

      // Check if game is over
      // const allLettersGuessed = isAllLettersGuessed(); // FIXME
      if (numWrong === 5 || allLettersGuessed) {
        document.querySelector("#play-again").innerText =
          numWrong === 5
            ? "The shark got you! Click here to play again."
            : "You won! Click here to play again.";
        // endGame(); // FIXME
      }
    });
  });
})();
```

As you work on each function, un-comment these lines of code to call your function so that you can run and test it in the browser.

> ###### TIP
>
> ### Shortcut for toggling comments in VS Code
>
> To comment/un-comment a line of code, place your curser on on the line and press `Ctrl-/` or `Cmd-/`.
>
> You can also use this shortcut to comment/un-comment multiple lines of code by selecting the lines before pressing the shortcut.

<br>
<br>

## Complete the Function Stubs

Read the instructions below to complete each function stub! Be sure to read them thoroughly — they’ll help you understand how each function should work.

<br>

### generateDivsForChars

**_generateDivsForChars_** is called to generate blank lines for each letter in the word.

The blank lines are actually **_div_** elements with the class **_letter-box_** — we used CSS to make any element with the **_letter-box_** class look like a blank line. The generated **_divs_** should also have an additional class whose value is a letter in the word. Later, we’ll use those classes to help us check if the word contains a certain letter or not.

**_generateDivsForChars_** takes in a string called **_word_**. Complete the function so it loops over each character in **_word_** and generates **_divs_**. The **_divs_** should be appended to the section with `id="word-container"`. For example, if **_word_** is `'apple'`, the generated **_divs_** should look like this:

```
<div class="letter-box"></div>
<div class="letter-box"></div>
<div class="letter-box"></div>
<div class="letter-box"></div>
<div class="letter-box"></div>
```

Make sure to call your function in **_startGame()_** by removing the comment in **_startGame_**:

```
(function startGame() {
  generateDivsForChars(word);
  // generateLetterButtons(); // FIXME

  // (...snippet)
})();
```

**Once you call this function there, check that your code runs in the browser.**

<br>

### _generateLetterButtons_

**_generateLetterButtons_** is called to generate the letter buttons.
Complete **_generateLetterButtons_** so it loops over each character in the alphabet and creates a **_button_**. You should append each **_button_** to the **_section_** with `id="letter-buttons"`. Here’s an example of how a button should look:

```
<button>a</button>
```

Remember to test your code as you go!

<br>

### _handleIncorrectGuess_

**_handleIncorrectGuess_** is called when the user guesses a letter _not_ in the word. The function should increment **_numWrong_** and update the image in the **_#shark-img_** to display the next shark image.

<br>

### _handleCorrectGuess_

**_handleCorrectGuess_** is called when the user guesses a letter that _is_ in the word. The function should set the **_innerText_** of the **_.letter-box_** elements that correspond with the guessed letter.

<br>

### _isAllLettersGuessed_

**_isAllLettersGuessed_** should return `true` if all the letters in the word have been guessed. Otherwise, it should return `false`.

<br>

### _endGame_

**_endGame_** is called when the user has won or lost the game. When the game ends, all letter buttons are disabled and the **_#play-again_** button is shown.

<br>
<br>

## **Finished?**

You can make any CSS or other improvements you see fit once you are finished. Try to change your code to choose a random word from WORDS instead of hard coding **_hello_**.
