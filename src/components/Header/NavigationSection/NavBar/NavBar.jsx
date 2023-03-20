import React, { useState, useContext } from 'react'
import ReactDOM from 'react-dom'
import Burger from './Burger'
import CrossBtn from './CrossBtn'
import styles from './NavBar.module.scss'
import NavItem from './NavItem'
import Backdrop from '../../../../UI/Backdrop'
import CardBrand from './CardBrand'


function NavBar() {



    const links = ["New & Featured", "Men", "Woman", "Kids", "Accessories", "Sale"]
    const linksHTML = links.map((el, index) => <NavItem text={el} key={index} className={styles["nav-item"]} />)

    const [addClassShow, setAddClassShow] = useState(false)

    function onClickBurgerHandler(e) {
        setAddClassShow(true)
    }

    function onClickBackdropHandler() {
        setAddClassShow(false)
    }

    function onClickCrossNadler (e) {
        setAddClassShow(false)
    }

    const navStyles = `${styles.nav} ${addClassShow ? styles["show-nav"] : ""}`

    const overlaysHTML = document.getElementById("overlays") 



    const cardsBrand = [
        {
            title: "Jordan",
            img: "https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg"
        },
        {
            title: "Converse",
            img: "https://upload.wikimedia.org/wikipedia/commons/3/30/Converse_logo.svg"
        },
    ]




    const navHTML =
        <nav className={navStyles}>
            {linksHTML}
            <CrossBtn onClick={onClickCrossNadler} className={styles["cross-btn"]} classNameSpan={styles["span-lines"]} />
            <div className={styles["cards-brand"]}>
                {cardsBrand.map((item, index) => <CardBrand key={index} title={item.title} img={item.img} />)}
            </div>
        </nav>


    return (
        <>

            {addClassShow ? ReactDOM.createPortal(navHTML, overlaysHTML) : navHTML}

            <Burger onClick={onClickBurgerHandler} />
            { addClassShow && <Backdrop onClick={onClickBackdropHandler} /> }
        </>
    )
}

export default NavBar