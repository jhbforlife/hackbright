import "./App.css";
import Dice from "./components/Dice.js";

function App() {
  return (
    <div className="App">
      <form>Add a dice</form>

      <div>
        <button>Roll all dice</button>
      </div>

      <div>
        <Dice nSides={6} />
        <Dice nSides={12} />
        <Dice nSides={20} />
      </div>
    </div>
  );
}

export default App;
