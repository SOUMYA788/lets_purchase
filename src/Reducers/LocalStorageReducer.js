export const localStorageData = {
    masterKey: "e-Commerce-app_letsPurchase",
    theme: "day",
    cartItems: [
        /*

            {
                productName:"product_name",
                productImage:"string_url"
                productPrice:integer,
            },

            {
                productName:"product_name",
                productImages:"string_url"
                productPrice:integer,
            }

        */
    ]
}

const currentLocalStorageData = () => localStorage.getItem(localStorageData.masterKey);

export const localStorageDataUpdator = (state, action) => {
    switch (action.type) {
        case "addItems": {
            let prevLocalStorageData = currentLocalStorageData();
            localStorage.setItem(localStorageData?.masterKey, {
                ...prevLocalStorageData,
                cartItems: [
                    ...prevLocalStorageData.cartItems,
                    action.productDetails
                ]
            })
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    action.productDetails
                ]
            }
        }

        case "removeItems": {
            
            let prevLocalStorageData = currentLocalStorageData();

            let removeItem = action.removedItem;

            let availableItems = localStorageData.cartItems.filter((item, indx) => {
                if (item.name !== removeItem.name) {
                    return item
                }
            })

            localStorage.setItem(localStorageData?.masterKey, {
                ...prevLocalStorageData,
                cartItems: [
                    ...availableItems
                ]
            })

            return {
                ...state,
                cartItems: [
                    ...availableItems
                ]
            }
        }

        default: {
            return state;
        }
    }
}