import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllProducts, Cart, Footer, Header, ProductDetails, Products } from "./components";
import { useCurrentLocalStorageState } from "./Context/LocalStorageDataContext";

function App() {
  const [localStorageReducerState, dispatch] = useCurrentLocalStorageState();
  const { masterKey } = localStorageReducerState;

  useEffect(() => {

    let prevLocalStorageData = JSON.parse(localStorage.getItem(masterKey));

    if (prevLocalStorageData) {
      dispatch({
        type: "syncWithLocalStorage",
        localStorageState: prevLocalStorageData
      })
    } else {
      localStorage.setItem(masterKey, JSON.stringify(localStorageReducerState))
    }

  }, [])


  return (
    <Router>
      <div className="App relative bg-gradient-to-br text-[1em] from-blue-950 to-blue-800 flex flex-col w-full h-[100dvh] px-[10px] py-1 overflow-hidden select-none">
        <Header />
        <div className="w-full h-[calc(100%-100px)] overflow-y-scroll scroll-smooth">
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/product/:catagory" element={<Products />} />
            <Route path="/product/:catagory/:productName" element={<ProductDetails ProductDetailsMainHeight={"h-[calc(100dvh-100px)]"}/>} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
