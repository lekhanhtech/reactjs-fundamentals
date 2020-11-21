import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
}

export default Greeting