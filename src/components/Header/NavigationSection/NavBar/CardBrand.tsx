import React from 'react'
import styles from './CardBrand.module.scss';

interface ICardBrandProps {
    img: string, 
    title: string
}


function CardBrand ({img, title}: ICardBrandProps) {
    


    return (
        <div className={styles["card-brand"]}>
            <img src={img} alt={title} />
            <p className={styles.title}>{title}</p>
        </div>
    )
}


export default CardBrand