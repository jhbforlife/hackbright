# Exercise: Tic-Tac-Toe in React Native

You’ve seen Tic-Tac-Toe in React. This time, you’ll re-implement it in React Native. Along the way, you’ll practicing building custom components with React Native’s core components, specifically: _View_, _Text_, _Button_, and _TouchableHighlight_. You’ll also practice the pattern of importing and exporting components from other files instead of putting everything in _App.js_.

<br>
<br>

## What You’ll Be Building

The React Native version of Tic-Tac-Toe has two main areas:

- The game board

- A list of moves

The game board has a status message at the top. As players take turns to make moves on the board, their moves are added to the list of moves. Tapping on an item in the list of moves will jump to that move in the game.

<br>
<br>

## Overview

- Set up a new expo project

- Create static version of app

We’ll start with step two of the process for building React apps from [Thinking in React](https://beta.reactjs.org/learn/thinking-in-react). In this step, you’ll build a static version of the app. To quote from **_Thinking in React_**:

> The most straightforward approach is to build a version that renders the UI from your data model without adding any interactivity… yet! It’s often easier to build the static version first and then add interactivity separately. Building a static version requires a lot of typing and no thinking, but adding interactivity requires a lot of thinking and not a lot of typing.

<br>
<br>

## Getting Started

There’s no starter code to download — we’re going to with a new Expo project using **_create-expo-app_**.

<br>

### Generate a new Expo project and open it in VS Code

In the terminal, run the following commands to create a new Expo project folder:

```
$ npx create-expo-app tic-tac-toe
```

Then, navigate into the new project folder and open it in VS Code:

```
$ cd tic-tac-toe
$ code .
```

<br>

### Run the development server

In the VS Code terminal, start the development server with the command below:

```
expo start
```

This will get the app running, and you should see a QR code in the terminal.

<br>

### View the app in Expo Go

Depending on your device, you can view the app in Expo Go in one of two ways:

**Android**: Open up your Expo App and scan the QR code to view the app on your phone.

**iPhone**: Open up your camera app, scan the QR code, and choose to open it up in Expo Go.

<br>
<br>

## The _Game_ Component

We’ll start with the largest component and work our way down, starting with the **_Game_** component.

<br>

### Build the basic layout

Create a file named **_components/Game.js_** and add the following (don’t forget to import the components needed from **_react-native_**):

_<sub>components/Game.js</sub>_

```
export default function Game() {
  return (
    <>
      <View>
        <Text>Board placeholder</Text>
      </View>
      <ScrollView>
        <Text>Moves placeholder</Text>
      </ScrollView>
    </>
  );
}
```

The **_Game_** component has two areas: the top half is the game board and the bottom half is our list of moves. Note that we’re using a [ScrollView](https://reactnative.dev/docs/scrollview) for our list of moves which will enable scrolling if the list gets too long.

<br>

### Apply styles to the layout

You’ll need to style the **_View_** and **_ScrollView_** components to make the layout look right. The way you style **_ScrollView_** is different than the way you style other components: it has a **_style_** prop, which works the way you’d expect it to, but it also has a prop called [contentContainerStyle](https://reactnative.dev/docs/scrollview#contentcontainerstyle). Styles passed to **_contentContainerStyle_** will be applied to the view container that wraps all child components.

Create a **_StyleSheet_** object at the bottom of **_Game.js_** using **_StyleSheet.create_**:

_<sub>components/Game.js</sub>_

```
const styles = StyleSheet.create({
  boardContainer: {},
  movesContainer: {},
  movesContainerContent: {},
});
```

**_boardContainer_** will be used to style the top half of **_Game_** and **_movesContainer_** will style the bottom half. **_movesContainerContent_** will style the content container in **_ScrollView_**. Add style properties so that:

- Both views take up 50% of the entire screen

- **_boardContainer_** is centered horizontally and vertically

- content in the **_ScrollView_** is centered horizontally and aligned to the top of the view

Remember to pass the styles to their respective components as props.

<br>
<br>

## Import and render _Game_ in _App.js_

Add an **_import_** statement to **_App.js_** to **_import_** the **_Game_** component. Then, render the **_Game_** component in the **_App_** component.

_<sub>App.js</sub>_

```
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Game from "./components/Game";

export default function App() {
  return (
    <View style={styles.container}>
      <Game />
      <StatusBar style="auto" />
    </View>
  );
}
```

Next, we’ll create the **_Board_** and **_Square_** components.

<br>
<br>

## _Board_ and _Square_ Components

The **_Board_** component will render a text view to display the status of the game and three rows of **_Square_** components. We’ll start with the smallest piece of the UI — the **_Square_** component — and build up to the **_Board_** component.

<br>

### Create the _Square_ component

**_Square_** will be an 80x80 view with a border and centered text.

Since we’ll never use **_Square_** outside of **_Board_**, we’ll define it in the same file as **_Board_**. Create the **_Square_** component in a new file named **_components/Board.js_**.

_<sub>components/Board.js</sub>_

```
function Square() {
  return (
    <View>
      <Text>X</Text>
    </View>
  );
}
```

Before we add styles, let’s make the **_Board_** component so we have a place to render **_Square_**.

<br>

### Create the _Board_ component

**_Board_** will be the default export of **_Board.js_**. Add the following to **_Board.js_**, after the definition of **_Square_**:

_<sub>components/Board.js</sub>_

```
export default function Board() {
  return (
    <>
      <Text>Status</Text>
      <View>
        <Square />
        <Square />
        <Square />
      </View>
      <View>
        <Square />
        <Square />
        <Square />
      </View>
      <View>
        <Square />
        <Square />
        <Square />
      </View>
    </>
  );
}
```

Notice that the three **_View_** components in **_Board_** will become the three rows of **_Square_** components.

<br>

### Render _Board_ in Game

The last thing to do before you start styling is to render **_Board_** in the **_Game_** component. This will allow you to see the results of any changes you make to **_Board.js_** as you add styles.

Import **_Board_** in **_Game.js_** and replace `<Text>Board placeholder</Text>`with `<Board />`. After you complete this step, you’ll be able to see the results of any changes you make to **_Board.js_** and **_Game.js_** in Expo Go.

<br>

### Style _Board_ and _Square_

Add styles to **_components/Board.js_** to the **_Board_** and **_Square_** components.

<br>
<br>

## The _Move_ Component

Follow the same process you used to create **_Board_** and **_Square_** to create the **_Move_** component:

1.  Define a simple version of **_Move_** with placeholder content in **_components/Move.js_**:

    _<sub>components/Move.js</sub>_

    ```
    import { View, Text, Button } from "react-native";

    export default function Move() {
        return (
            <View>
            <Text>0.</Text>
            <Button title="Go to game start" />
            </View>
        );
    }
    ```

2.  Import and render **_Move_** in **_Game.js_** so you can see the results of changes you make as you add styles

3.  Style **_Move_**.

<br>
<br>

# Exercise: Tic-Tac-Toe in React Native, Part 2

Previously, you built a static version of the Tic-Tac-Toe game. Now, you’ll add interactivity to your app.

<br>
<br>

## Overview

The parts of the game that change with user interaction are:

- The status message at the top of the screen

- The squares on the board

- The list of moves at the bottom of the screen

<br>
<br>

## Modeling State

Before we start building, we need to determine the data model for the game — we need to decide what types and data structures we should use to represent the state of the game. This is the most difficult and most important part of building a React app. A bad data model will cause your app to become more error-prone and difficult to maintain. A good data model will make it easier to orchestrate state changes and add new features.

<br>

### Representing the board

The board is a grid of squares. Each square holds a value: either `"X"` or `"O"`. This sounds a lot like an **_array_**. A naive approach would be to create a 3x3, 2-dimensional array like so:

```
[
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];
```

This would work, but since the board is so small, it wouldn’t add too much complexity to save space by using a 1-dimensional array:

```
[
  "X", "O", "X",
  "O", "X", "O",
  "X", "O", "X",
]
```

<br>

### Representing move history

Each time a player makes a move, they alter the state of the board.

Each step in history is like a snapshot of what the board looked like at that moment in time. Since history is a collection of ordered steps, we can use an array to store a bunch of boards, with each board representing a step in history. For example:

```
[
  [null, null, null, null, null, null, null, null, null],
  [null, null, null, null, "X", null, null, null, null],
  [null, null, "O", null, "X", null, null, null, null],
]
```

To keep track of which move we’re on so we can display the correct board, we’ll use a number to represent the current move index. We’ll be able to use this number to get the current board state from the history array. We can also derive the status message to display from this number: even numbered moves should display `"Next player: X"` and odd numbered moves should display `"Next player: O"`.

<br>
<br>

## Set Up State in _Game_

We’ll set up state variables in the highest component in our hierarchy: **_Game_**. The state values will be shared with children components via props.

<br>

### Add state variables to _Game_

At the top of the **_Game_** component, create two state variables: **_history_** and **_currentMove_**. Do this by calling **_useState_** with an initial value for each variable.

<br>

### Initialize derived state variables

We previously discussed how we can use **_currentMove_** to calculate the game status and current board state. This is an example of **_derived state_** — the game status and current board are also state values, but since we can calculate these values based on **_currentMove_**, we don’t need to call **_useState_** to create them.

In **_Game_**, below the **_useState_** calls, create two variables:

- **_xIsNext_**, which is true if **_currentMove_** is even and false if **_currentMove_** is odd.

- **_currentSquares_**, which is the value of **_history[currentMove]_**.

<br>
<br>

## Share State with _Board_

**_Board_** has two areas that need to be interactive:

- The status message at the top of the screen

- The squares on the board

You’ll implement these interactions with the state variables you created in **_Game_**.

<br>

### Pass state to _Board_ via props

Update the return value of **_Game_** to pass the **_xIsNext_** and **_currentSquares_** variables to the **_Board_** element:

_<sub>In the return value of Game</sub>_

```
<Board xIsNext={xIsNext} squares={currentSquares} />
```

This will allow us to access these values in **_Board_** through **_props.xIsNext_** and **_props.squares_**.

<br>

### Render the status message in _Board_

Update **_Board_** to access the **_xIsNext_** prop and render a status message:

- If **_xIsNext_** is **_true_**, display `"Next player: X"`

- If **_xIsNext_** is **_false_**, display `"Next player: 0"`

<br>

### Render values from _currentSquares_ in _Square_

We need to pass the values from **_props.squares_** to the **_Square_** components. Pass the values to each of the **_Square_** components returned by **_Board_** as a prop called **_value_**.

Then, update **_Square_** so it renders **_props.value_**.

<br>
<br>

## Implement Pressable Squares

In our game, users will take turns to make plays by pressing squares to place an X or O. You’ll need to make the squares pressable and handle the **_onPress_** event. You’ll also need to update the state in **_Game_** to reflect the new move.

<br>

### Create an interface for handling plays

An **_interface_** in software engineering is like a remote control. It gives us buttons we can use to turn a device on and off, change the volume, etc. We can also give the remote to other people, which enables them to control the device too. Similarly, we can create interfaces in our React code that operate on state values in a top-level component. By passing the interface to child components, we can give them the ability to control state values.

Create an interface to handle all the state changes that should happen after someone makes a play by defining function in **_Game_**. To do this, add the following code to **_Game_**:

_<sub>components/Game.js</sub>_

```
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // etc...
}
```

**_handlePlay_** will take in the next set of squares to be added to the history of moves. Since we want to allow users to jump to different parts of the history, we can’t just append **_nextSquares_** to **_history_**. Instead, we use slice to insert **_nextSquares_** after **_history_**[currentMove]. Then, we use **_setHistory_** and **_setCurrentMove_** to update the state variables.

Finally, pass **_handlePlay_** to **_Board_** as a prop called **_onPlay_**.

<br>

### Handle presses in _Board_

Now, we’ll update **_Board_** to handle presses on individual squares:

1. Create a function named **_handlePress_** in **_Board_** that takes in the index of the square that was pressed. The function should:

   - Use the index to build a new array of squares based on **_props.squares_**

   - Call **_onPlay_** with the new squares as an argument

2. Pass **_handlePress_** to each **_Square_** component as a prop called **_onSquarePress_**

Hint: you’ll need to wrap **_handlePress_** in an anonymous function to pass it to **_onSquarePress_** to preserve the index value (ex.: `() => handlePress(0)`)

<br>

### Make _Square_ pressable

Make **_Square_** pressable by wrapping it in a **_Pressable_** component (remember to import **_Pressable_** from **_react-native_** first). Then, pass **_props.onSquarePress_** to the **_onPress_** prop.

<br>
<br>

## Your Turn: Add Time Travel

Apply the practice and concepts you’ve learned so far to add time travel to the game. Users should be able to press on a move in the history to jump to that point in the game.

Try to write as much of the code as you can on your own. If you get stuck and need a hint, a great alternative to just looking at a solution is to refer to the [Tic-Tac-Toe tutorial from the React docs](https://beta.reactjs.org/learn/tutorial-tic-tac-toe) — it’ll give you hints for the React bits so you’ll still get to figure out the React Native-related stuff on your own.
