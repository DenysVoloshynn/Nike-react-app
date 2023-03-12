import CartIcon from "../../../../icons/CartIcon"
import SearchBlock from "./SearchBlock/SearchBlock"
import styles from './ButtonsGroup.module.scss'

function ButtonsGroup() {
    return (
        <>
            <SearchBlock />
            <button className={styles["cart-btn"]}>
                <CartIcon />
            </button>
        </>
    )
}

export default ButtonsGroup