import styles from './ProductsList.module.scss'
import Product from "./Product";
import IProduct from '../../interfaceProduct'


// interface IProductsListProps {
//     products: IProduct[]
// }

//: IProductsListProps
function ProductsList({ products }) {


    return (
        <div className={styles.wrapper}>
            <p className={styles.title}>
                Men's Shoes & Sneakers
            </p>

            <div className={styles["products-list"]}>
                {products.map(p => <Product key={p.id} product={p} />)}
            </div>
        </div>
    )
}


export default ProductsList