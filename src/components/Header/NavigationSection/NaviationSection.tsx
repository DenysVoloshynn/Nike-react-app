import React from 'react'

import ButtonsGroup from './ButtonsGroup/ButtonsGroup';
import NikeLogo from '../../../icons/NikeLogo';
import NavBar from './NavBar/NavBar';
import styles from './NavigationSection.module.scss'


function NaviationSection() {

    return (
        <>
            <section className={styles.section}>
                <div className={styles.col}>
                    <NikeLogo />
                </div>
                <div className={styles.col}>
                    <NavBar />
                </div>
                <div className={styles.btns}>
                    <ButtonsGroup />
                </div>
            </section>

            <div className={styles["fill-empty-place"]}></div>
        </>
    )
}

export default NaviationSection