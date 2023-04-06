import React from 'react'
import styles from './CartItem.module.scss'
import Calculator from './Calculator/Calculator'
import IProduct from '../../../interfaceProduct'

interface ICartItemProps {
    item: IProduct
}

function CartItem({ item }: ICartItemProps) {

    const brandArray = item.brand.split("")
    let updatedBrand = item.brand[0].toUpperCase()

    for (let i = 0; i < brandArray.length; i++) {
        if (i > 0) updatedBrand += brandArray[i]
    }

    return (
        <div className={styles.item}>
            <div className="item-col">
                <img src={item.img} alt={item.name} />
            </div>
            <div className={styles["item-col"]}>

                <div className={styles["top-row"]}>
                    <div>
                        <p className={styles.name}>{item.name}</p>
                        <p className={styles.brand}>{updatedBrand}</p>
                    </div>
                    <div>
                        <p className={styles.price}>kr{item.price}</p>
                    </div>
                </div>

                <div className={styles["bottom-row"]}>
                    <Calculator item={item} />
                    <div className="delete"></div>
                </div>
            </div>
        </div>
    )
}


export default CartItem