import styles from './Product.module.scss'
import IProduct from '../../interfaceProduct'
import CartIcon from '../../icons/CartIcon'

interface IProductProps {
    product: IProduct
}


function Product({product}: IProductProps) {


    return (
        <div className={styles.product}>
            <div className={styles.images}>
                <img className={styles.image + " " + styles["def-img"]} src={product.img} alt={product.name} />
                <img className={styles.image + " " + styles["hover-img"]} src={product.imgPairSide} alt={product.name} />
            </div>
            <div>
                <p className={styles["best-seller"]}>
                    Best Seller
                </p>
                <p className={styles.name}>
                   {product.name}
                </p>
                <p className={styles["shoes-class"]}>
                    Men`s Shoes
                </p>
                <p className={styles.colors}>
                    3 Colors
                </p>
                <p className={styles.price}>
                    kr{product.price}
                </p>

                <button className={styles["btn-cart"]}>
                    <CartIcon className={styles["cart-icon"]}/>
                </button>
            </div>
        </div>
    )
}


export default Product