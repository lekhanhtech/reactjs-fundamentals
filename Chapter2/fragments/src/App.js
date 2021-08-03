import logo from './logo.svg';
import './App.css';
import Table from './Table'
import Glossary from './Glossary'

const data = [
  {
      term: 'Register account',
      description: 'ID card is required'
  },
  {
      term: 'Change passowrd',
      description: 'Phone number is required'
  },
  {
      term: 'Data sharing',
      description: 'We commit does not sharing for any third parties'
  }
]

function App() {
  return (
    <>
      <Table />
      <Glossary items={data} />
    </>
  );
}

export default App;
