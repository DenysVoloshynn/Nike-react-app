import React from 'react'


interface ICrossBtnProps {
    className: string,
    classNameSpan: string,
    onClick(): void
}

function CrossBtn ({className, classNameSpan, onClick}: ICrossBtnProps) {
    


    return(
        <div onClick={onClick} className={className}>
            <span className={classNameSpan}></span>
        </div>
    )
}


export default CrossBtn