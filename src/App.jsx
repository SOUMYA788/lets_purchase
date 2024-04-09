import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AllProducts, Cart, Footer, Header, ProductDetails, Products } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem, setTheme } from "./store/slices/localStorageSlice";
import { Login, SignIn } from "./components/Pages"
import { hideUserWindow, toggleUserWindow } from "./store/slices/windowSlice";
import { Dashboard } from "./components/Layouts";
import { auth as firebaseAuth } from "./Firebase";
import { onAuthStateChanged } from "firebase/auth";
import { updateUser } from "./store/slices/authSlice";


function App() {

  const { masterKey, theme, cartItems } = useSelector(state => state.localStorageReducer)

  const { auth } = useSelector(state => state.authReducer)
  const { user } = auth

  const dispatch = useDispatch();

  const closeAllWindows = () => {
    dispatch(hideUserWindow())
  }

  useEffect(() => {

    const prevLocalStorageData = JSON.parse(localStorage.getItem(masterKey));

    if (prevLocalStorageData) {
      dispatch(setTheme(prevLocalStorageData.theme))
      dispatch(setCartItem(prevLocalStorageData.cartItem))
    } else { localStorage.setItem(masterKey, JSON.stringify({ theme, masterKey, cartItems })) }

  }, [])

  useEffect(() => {

    // Monitor user authentication.
    ; (async () => {
      onAuthStateChanged(firebaseAuth, user => {
        if (user) {
          console.log('user from featch, ',user)
          const userData = {
            userId: user?.uid,
            userProfile: user?.photoURL || "",
            userName: user?.displayName || "",
            userEmail: user?.email || "",
            userNumber: user?.phoneNumber || ""
          }
          dispatch(updateUser(userData));
        } else {
          dispatch(updateUser(null));
        }
      })
    })();


  }, [])



  // bg-gradient-to-br from-blue-950 to-blue-800
  return (
    <Router>
      <div className="App relative text-[1em] flex flex-col w-full p-1 select-none" onClick={closeAllWindows}>

        <div className="w-full sticky top-0 z-50 mb-1">
          <Header />
        </div>

        <div className="w-full">
          <Routes>
            <Route path="/" element={<AllProducts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product/:catagory" element={<Products />} />
            <Route path="/product/:catagory/:productName" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>

      </div>
    </Router>
  );
}

export default App;
