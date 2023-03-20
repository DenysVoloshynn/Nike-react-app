import React from 'react'
import styles from './Burger.module.scss'

interface IBurgerProps {
    onClick(e: React.SyntheticEvent): any 
}

function Burger({onClick}: IBurgerProps) {



    return (
        <button onClick={onClick} className={styles.burger}>
            <span className={styles.line1}></span>
            <span className={styles.line2}></span>
            <span className={styles.line3}></span>

        </button>
    )
}

export default Burger