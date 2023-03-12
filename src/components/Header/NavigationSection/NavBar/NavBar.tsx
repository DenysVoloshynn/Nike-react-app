import styles from './NavBar.module.scss'
import NavItem from './NavItem'

function NavBar() {

    const links = ["New & Featured", "Men", "Woman", "Kids", "Accessories", "Sale"]
    const linksHTML = links.map((el, index) => <NavItem text={el} key={index} className={styles["nav-item"]} />)

    return (
        <nav className={styles.nav} >
            {linksHTML}
        </nav>
    )
}

export default NavBar
