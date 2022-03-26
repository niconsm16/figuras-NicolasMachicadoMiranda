import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
// import Home from './components/Home/Home';
import { ItemListContainer } from "./components/Item/ItemListContainer"
import { ItemDetailContainer } from './components/Item/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';


function App() {

  let [cartCount, setCartCount] = useState(0)

  let valor = cartNumber => setCartCount(cartCount = cartNumber)

  return (
    <>

      <BrowserRouter>

        <NavBar cartCount={(cartCount)} />

        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={<ItemListContainer devolution={valor} />} />
          <Route path='/item/:item' element={<ItemDetailContainer />} />
          <Route path='/category/:category' element={<ItemDetailContainer />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
