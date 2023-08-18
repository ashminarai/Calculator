import './App.css';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Apples from './Apples';

function App() {
  return (
    <>
    <Header name="Anna" color="purple"/>
    <Main greet="Howdy"/>
    <Sidebar greet="Howdy"/>
    <Apples number="4" color="Red, Green"/>
    </>
  );
}

export default App;
