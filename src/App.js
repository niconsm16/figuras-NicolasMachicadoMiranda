import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { ItemListContainer } from "./components/ItemListContainer"
import { ItemDetailContainer } from './components/ItemDetail';

const greetingWelcome = 'Aquí está el catálogo joven'

function App() {

  let [cartCount, setCartCount] = useState(0)

  let valor = (cartNumber) => {
    setCartCount(cartCount = cartNumber)
  }

  return (
    <>
      <NavBar cartCount={(cartCount)} />
      <ItemDetailContainer select='0' />
      <ItemListContainer greeting={greetingWelcome} medida="60%" devolution={valor} />
    </>
  );
}

export default App;
