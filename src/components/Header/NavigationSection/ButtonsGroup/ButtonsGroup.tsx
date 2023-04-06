import React, {useContext} from 'react'
import CartIcon from "../../../../icons/CartIcon"
import SearchBlock from "./SearchBlock/SearchBlock"
import styles from './ButtonsGroup.module.scss'

import {CartContext} from '../../../../store/cart-context'




function ButtonsGroup() {

    const setCartShowing = useContext(CartContext).setCartShowing

    function onClickIconCartHandler () {
        setCartShowing()
    }

    return (
        <>
            <SearchBlock />
            <button className={styles["cart-btn"]}>
                <CartIcon onClick={onClickIconCartHandler} />
            </button>
        </>
    )
}

export default ButtonsGroup