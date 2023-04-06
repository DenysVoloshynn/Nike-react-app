import React, {useContext} from 'react'
import CartIcon from '../../icons/CartIcon';
import CartItem from './CartItem/CartItem';
import {CartContext} from '../../store/cart-context';

import styles from './ProductsInCart.module.scss';



function ProductsInCart() {

    const itemsInCart = useContext(CartContext).items

    const productsAre = itemsInCart.length === 0 ? false : true

    return (
        <div className={styles["products-in-cart"]}>

            {productsAre 
                ? itemsInCart.map(item => <CartItem key={Math.floor(Math.random() * 100)} item={item} />)
                : <div>Cart is empty</div>}
        </div>
    )
}

export default ProductsInCart