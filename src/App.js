import NavBar from './components/NavBar/NavBar';
// import Home from './components/Home/Home';
import { ItemListContainer } from "./components/Item/ItemList/ItemListContainer"
import { ItemDetailContainer } from './components/Item/ItemDetail/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './components/Cart/CartContext';



function App() {


  return (
    <>
      <CartProvider>
        <BrowserRouter>

          <NavBar />

          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/item/:item' element={<ItemDetailContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>


        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
