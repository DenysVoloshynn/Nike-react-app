import React, {useContext} from 'react'
import ReactDOM from 'react-dom'
import ProductsInCart from './ProductsInCart'
import styles from './Cart.module.scss'
import Backdrop from '../../UI/Backdrop'
import Ordering from './Ordering'

import {CartContext} from '../../store/cart-context'



function CartInner() {

    const setCartShowing = useContext(CartContext).setCartShowing

    return (
        <>
            <div className={styles.cart}>
                <ProductsInCart />
                <Ordering/>
            </div>
            <Backdrop onClick={setCartShowing} />
        </>
    )
}




function Cart() {

    const overlaysHTML = document.getElementById("overlays") as HTMLElement

    const cartShowing = useContext(CartContext).cartShowing

    return (
        cartShowing && ReactDOM.createPortal(<CartInner />, overlaysHTML)
    )
}

export default Cart