import React from 'react'
import ButtonsGroup from './ButtonsGroup/ButtonsGroup';
import CartIcon from '../../../icons/CartIcon';
import NikeLogo from '../../../icons/NikeLogo';
import SearchIcon from '../../../icons/SearchIcon';
import NavBar from './NavBar/NavBar';
import styles from './NavigationSection.module.scss'


function NaviationSection() {

    return (
        <section className={styles.section}>
            <div className={styles.col}>
                <NikeLogo/>
            </div>
            <div className={styles.col}>
                <NavBar/>
            </div>
            <div className={styles.btns}>
                <ButtonsGroup/>
            </div>
        </section>
    )
}

export default NaviationSection