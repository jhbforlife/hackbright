import './App.css';
import AboutMe from './components/AboutMe'
import FindToDo from './components/FindToDo';
import MyFavoriteActivities from './components/MyFavoriteActivities';

function App() {
  return (
    <div className="App">
      <h1>Welcome to my super cool, feature-rich website!</h1>
      <AboutMe />
      <MyFavoriteActivities />
      <FindToDo />
    </div>
  );
}

export default App;