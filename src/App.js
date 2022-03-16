import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer"


const greetingWelcome = 'Aquí está el catálogo joven'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={greetingWelcome} medida="60%" />
    </>
  );
}

export default App;
