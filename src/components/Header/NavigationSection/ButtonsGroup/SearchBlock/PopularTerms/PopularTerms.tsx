import styles from './PopularTerms.module.scss'



function PopularTerms() {

    const termsList = ["Air Force 1", "Jordan", "Air Max", "Blazer", "Pegasus"]
    const termsListHTML = termsList.map((el, index) => <li key={index}><a href="#">{el}</a></li> )

    return (
            <div className={styles["popular-block"]}>
                <p className={styles.title}>
                    Popular Search Terms
                </p>
                <ul className={styles["terms-list"]}>
                    {termsListHTML}
                </ul>
            </div>
    )
}


export default PopularTerms