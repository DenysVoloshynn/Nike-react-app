interface INavItemProps {
    text: string,
    className: string
}

function NavItem({text, className}: INavItemProps) {

    return (
        <a className={className} href="/">{text}</a>    
    )
}

export default NavItem