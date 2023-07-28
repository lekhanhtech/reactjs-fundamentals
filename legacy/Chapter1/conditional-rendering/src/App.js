import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting'
import LoginControl from './LoginControl'
import Mailbox from './Mailbox'
import Page from './Page'

function App() {
  const messages = ['React', 'Re: React', 'Re:Re: React']
  // const messages = [];
  const count = 0;
  return (
    <div className="App">
      <Greeting isLoggedIn={true}/>
      <LoginControl />
      <Mailbox unreadMessages={messages} />
      { count && <h1>Messages: {count}</h1>}
      <Page />
    </div>
  );
}

export default App;
