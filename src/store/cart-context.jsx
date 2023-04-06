import React, { useReducer, useState } from 'react'






export const CartContext = React.createContext()

function CartContextProvider({ children }) {

    function cartReducer(state, action) {

        const itemIsInCart = state.items.find((item) => action.item.id === item.id)

        if (action.type === "ADD_ITEM") {
            if (itemIsInCart) {
                if (itemIsInCart.amount < 5) {

                    const newItems = [...state.items]
                    const index = newItems.indexOf(itemIsInCart)
                    const newAmount = newItems[index].amount + 1

                    const newItem = {
                        ...action.item,
                        amount: newAmount,
                    }

                    newItems[index] = newItem

                    return {
                        items: newItems,
                        totalPrice: 0
                    }
                }
                else return {
                    items: [...state.items],
                    totalPrice: 0
                }

            }

            else {
                const newItem = {
                    ...action.item,
                }
                const newItems = [...state.items, newItem]

                return {
                    items: newItems,
                    totalPrice: 0
                }
            }
        }

        if (action.type === "REMOVE_ITEM") {
            
        }


        return {
            items: [],
            totalPrice: 0
        }
    }







    const defState = {
        items: [{
            "name": "Air Jordan 6 Retro",
            "price": 2000,
            "img": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7cee5620-26ec-4139-aa52-62a4bd2e1f15/air-jordan-6-retro-shoes-DKXWD3.png",
            "imgPairSide": "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/5ebd5af5-19b9-40d4-98a7-4b61b41cccb0/air-jordan-6-retro-shoes-DKXWD3.png",
            "brand": "air-jordan",
            "id": 6,
            "amount": 1
        }],
        totalPrice: 0
    }

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defState)
    const [cartShowing, setCartShowing] = useState(false)

    function addItemHandler(item) {
        dispatchCartAction({ type: "ADD_ITEM", item: item })
    }

    function removeItemHandler(item) {
        dispatchCartAction({ type: "REMOVE_ITEM", item: item })
    }



    function setCartShowingHandler() {
        setCartShowing(prev => !prev)
    }

    const cartContextValue = {
        cartShowing: cartShowing,
        setCartShowing: setCartShowingHandler,

        items: cartState.items,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }





    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider






