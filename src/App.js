import Main from './Components/main/Main';
import WordleContext from './wordleContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <WordleContext>
        <Main />
      </WordleContext>
    </div>
  );
}

export default App;
