import React, { useContext } from 'react'
import styles from './Calculator.module.scss'
import { CartContext } from '../../../../store/cart-context'

import IProduct from '../../../../interfaceProduct'

interface ICalculatorProps {
    item: IProduct
}

function Calculator({item}: ICalculatorProps) {

    const cartContext = useContext(CartContext)

    function onClickMinusHandler() {
        cartContext.removeItem(item)
    }

    function onClickPlusHandler () {
        cartContext.addItem(item)
    }

    return (
        <div className={styles.calculator}>
            <button onClick={onClickMinusHandler} className={styles.minus}>-</button>
            <div className={styles.amount}>{item.amount}</div>
            <button onClick={onClickPlusHandler} className={styles.plus}>+</button>
        </div>
    )
}

export default Calculator