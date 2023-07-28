import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const name = 'Josh Perez';
// const tasks = ['learning', 'play football'];
// const element = <h1>Tasks,
//     <ul>
//     {
//       tasks.map(o => <li>{o}</li>)
//     }
//     </ul>
//   </h1>;

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
  avatarUrl: 'https://www.pngfind.com/pngs/m/320-3209467_girl-cute-avatar-beautiful-png-and-psd-psd.png'
};

function GetGreeting(props) {
  if (props.user) {
    return (
      <div align="center">
        <h1>
          Hello, {formatName(user)}!
        </h1>;
        <img width={250} height={250} alt="avatar" src={props.user.avatarUrl}></img>
      </div>
    )
  }
  return <h1>Hello, Stranger.</h1>;
}

ReactDOM.render(
  // GetGreeting(user)
  <GetGreeting user={user}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
