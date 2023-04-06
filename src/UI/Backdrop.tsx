import styles from './Backdrop.module.scss'
import ReactDOM from 'react-dom'

interface IBackdropProps {
    onClick?(): void
}

function Backdrop({onClick}: IBackdropProps) {

    const overlaysHTML = document.getElementById("overlays") as HTMLElement

    return (
        <>
            {ReactDOM.createPortal(<div onClick={onClick} className={styles.backdrop}></div>, overlaysHTML)}
        </>
    )
}

export default Backdrop