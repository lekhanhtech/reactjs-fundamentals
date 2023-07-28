import './App.css';
import SplitPane from './components/SplitPane';
import Contacts from './components/Contacts';
import Chat from './components/Chat';

function App() {
  return (
    <SplitPane
      left={
        <Contacts />
      }
      right={
        <Chat />
      }
    />
  );
}

export default App;
