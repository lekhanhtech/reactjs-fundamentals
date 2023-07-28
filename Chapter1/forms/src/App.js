import './App.css';
import NameForm from './components/NameForm';
import EssayForm  from './components/EssayForm';
import FlavorForm from './components/FlavorForm';
import Reservation from './components/Reservation';

function App() {
  return (
    <div>
      <NameForm />
      <EssayForm />
      <FlavorForm />
      <Reservation />
    </div>
  );
}

export default App;
