import React, { useRef, useState } from 'react'
import styles from './SearchBlock.module.scss'
import PopularTerms from './PopularTerms/PopularTerms';
import SearchBar from './SearchBar/SearchBar';
import Backdrop from '../../../../../UI/Backdrop';



function SearchBlock() {

    const [activeSearch, setActiveSearch] = useState(false)
    const searchWrapperStyles = `${styles["search-bar-wrapper"]} ${activeSearch ? styles["active-search"] : ""}`

    const inputRef = useRef()

    function closeActiveSearch() {
        setActiveSearch(false);
        inputRef.current.value = ""
    }

    return (
        <>
            <div className={searchWrapperStyles}>
                <div className={styles.row}>
                    <SearchBar setActive={setActiveSearch} isActive={activeSearch} ref={inputRef} />
                    {activeSearch && <button onClick={closeActiveSearch} className={styles.cancel}>Cancel</button>}
                </div>
                {activeSearch && <PopularTerms />}
            </div>

            {activeSearch && <Backdrop onClick={closeActiveSearch}/>}
        </>
    )
}



export default SearchBlock