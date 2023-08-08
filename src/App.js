import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./components/Error404";
import Footer from "./Footer/Footer";
import Slider from "./components/Carousel/Carousel";
import Sales from "./components/Sales/Sales"
import CartProvider from "./context/CartContext";
import {Checkout} from "./components/Checkout/Checkout";
import {Cart} from "./components/Cart/Cart";

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter >
        <NavBar />
        <Slider/>
        <Sales/>
        <Routes>
            <Route path={"/"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"*"} element={<Error404 />} />
        </Routes>
        <Footer/>           
      </BrowserRouter>
    </CartProvider>
  </>
  );
}

export default App;
