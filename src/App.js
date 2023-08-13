import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./components/Error404";
import Footer from "./components/Footer/Footer";
import Slider from "./components/Carousel/Carousel";
import Sales from "./components/Sales/Sales"
import CartProvider from "./context/CartContext";
import {Checkout} from "./components/Checkout/Checkout";
import {Cart} from "./components/Cart/Cart";
import BannerEnvios from "./components/BannerEnvios/BannerEnvios";

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
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/category/:categoriaId"} element={<ItemListContainer />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"*"} element={<Error404 />} />
        </Routes>
        <BannerEnvios/>
        <Footer/>           
      </BrowserRouter>
    </CartProvider>
  </>
  );
}

export default App;
