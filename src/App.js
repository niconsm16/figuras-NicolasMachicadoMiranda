import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from "./components/Item/ItemList/ItemListContainer"
import { ItemDetailContainer } from './components/Item/ItemDetail/ItemDetailContainer';
import { Error } from './components/Error/Error';
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
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/buscados' element={<ItemListContainer />} />
            <Route path='/:solicitados' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='/item/:item' element={<ItemDetailContainer />} />
            <Route path='/error' element={<Error />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>


        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
