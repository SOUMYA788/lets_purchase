import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllProducts, Cart, Header, ProductDetails, Products } from "./components";

function App() {
  
  return (
    <Router>
      <div
        className="App bg-gradient-to-br text-[1em] from-blue-950 to-blue-800
        flex flex-col w-full h-[100dvh] p-[10px] overflow-y-scroll scroll-smooth select-none" focus="true">

        <Header />

        <Routes>
          <Route path="/" element={<AllProducts />} />
          <Route path="/product/:catagory" element={<Products />} />
          <Route path="/product/:catagory/:productName" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>

        {/* <Footer/> */}

      </div>
    </Router>
  );
}

export default App;
