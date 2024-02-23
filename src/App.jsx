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

  // bg-gradient-to-br from-blue-950 to-blue-800
  return (
    <Router>
      <div className="App relative text-[1em] flex flex-col w-full p-1 select-none">

        <div className="w-full sticky top-0 z-50 mb-1">
          <Header />
        </div>

        <div className="w-full">
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/product/:catagory" element={<Products />} />
            <Route path="/product/:catagory/:productName" element={<ProductDetails ProductDetailsMainHeight={"h-[calc(100dvh-100px)]"} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
