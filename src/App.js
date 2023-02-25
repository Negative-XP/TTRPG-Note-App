import logo from './logo.svg';
import './components/css/App.css';
import Header from './components/noteComponents/header'
import Notes from './components/noteComponents/notes'

function App() {
  return (
    <div className="main">
      <Header></Header>
      <Notes></Notes>
    </div>
  );
}
export default App;