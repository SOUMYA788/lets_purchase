import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    masterKey: "e-Commerce-app_letsPurchase",
    theme: "day",
    cartItems: [
    ]
}

export const localStorageSlice = createSlice({
    name: "local_storage_slice",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload || "day";
        },
        setCartItem: (state, action) => {
            state.cartItems = action.payload
        },
        addItemToCart: (state, action) => {
            const newItem = action.payload;
            const productExists = state.cartItems.filter(product => product.productName === newItem.productName);
            if(productExists.length > 0){
                state.cartItems.forEach(product => {
                    if(product.productName === newItem.productName){
                        if(product?.quantity){
                            product.quantity = (product.quantity + 1);
                        }else{
                            product.quantity = 1
                        }
                    }
                })
            }else{
                state.cartItems.push(action.payload)
            }
            const localStorageItems = JSON.parse(localStorage.getItem(state.masterKey));
            localStorage.setItem(state.masterKey, JSON.stringify({
                ...localStorageItems,
                ...state
            }))
        },
        removeItemFromCart: (state, action) => {
            const itemToRemove = action.payload;
            const availableCartItems = state.cartItems.filter(item => item.productName !== itemToRemove.productName)
            state.cartItems = availableCartItems;

            const localStorageItems = JSON.parse(localStorage.getItem(state.masterKey));
            localStorage.setItem(state.masterKey, JSON.stringify({
                ...localStorageItems,
                ...state
            }))
        }
    }
})

export const {addItemToCart, removeItemFromCart, setCartItem, setTheme} = localStorageSlice.actions;

export default localStorageSlice.reducer;