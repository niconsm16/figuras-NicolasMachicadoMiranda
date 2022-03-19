import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from "./components/ItemListContainer"

const greetingWelcome = 'Aquí está el catálogo joven'

function App() {

  let [cartCount, setCartCount] = useState(0)

  let valor = (cartNumber) => {
    setCartCount(cartCount = cartNumber)
  }

  return (
    <>
      <NavBar a={(cartCount)} />
      <ItemListContainer greeting={greetingWelcome} medida="60%" devolution={valor} />
    </>
  );
}

export default App;
