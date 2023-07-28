import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Clock from './Clock'

function App() {
  return (
    <div className="App">
      <Welcome name='a' />
      <Clock />
    </div>
  );
}

export default App;
