import './Header.css'
import LeftMenu from "./left-menu/LeftMenu.js"
import Search from "./search/Search.js"

function Header() {
    return (
    <header className="header">
        <LeftMenu />

        <Search />
    </header>
    )
}

export default Header