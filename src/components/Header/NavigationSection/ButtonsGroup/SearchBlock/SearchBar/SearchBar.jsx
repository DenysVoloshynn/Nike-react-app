import React, {useRef} from "react"
import styles from './SearchBar.module.scss'
import SearchIcon from '../../../../../../icons/SearchIcon'

// interface ISearchBarProps {
//     isActive: boolean,
//     setActive(prev: boolean): void
// }

const SearchBar = React.forwardRef(({isActive, setActive}, ref) => {

    const searchBarStyles = `${styles["search-bar"]} ${isActive ? styles["active-search-bar"] : ""}`

    function onChangeInputNandler(e) {
        ref.current.focus()
        setActive(true)
    }

    function onClickIconHandler(e) {
        ref.current.focus()
        setActive(prev => !prev)
    }

    
    return (
        <div className={searchBarStyles}>
            <span onClick={onClickIconHandler} className={styles.icon}>
                <SearchIcon id="search-icon" />
            </span>
            <input onChange={onChangeInputNandler} ref={ref} placeholder='Search...' className={styles.input} type="text" />
        </div>
    )
})

export default SearchBar