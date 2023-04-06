import styles from './Icons.module.scss'


interface ICartIconProps {
    className?: string,
    onClick?(): void
}

function CartIcon({className, onClick}: ICartIconProps) {

    return (
        <span onClick={onClick} className={styles["cart-icon"] + " " + className} >
            <svg className={styles.svg} focusable="false" viewBox="0 0 24 24" role="img" fill="none">
                <path className={styles.path} stroke="currentColor" strokeWidth="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
            </svg>
        </span>
    )
}


export default CartIcon