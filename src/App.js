import './App.css';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

function App() {
  return (
    <>
    <Header name="Anna" color="purple"/>
    <Main greet="Howdy"/>
    <Sidebar greet="Howdy"/>
    </>
  );
}

export default App;
