import { useState } from "react"
import Link from "next/link"

const Header = () => {
  const [menu, setMenuState] = useState(false)
  const toogleMenu = () => setMenuState(!menu)
  const closeMenu = () => setMenuState(false)

  return (
    <header className="container-fluid">
      <nav>
        <ul>
          <li>
            <strong>Logo</strong>
          </li>
        </ul>
        <ul className={`menu ${menu && "active"}`}>
          <li onClick={closeMenu}>
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/histoire">
              <a>Notre Histoire</a>
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <ul onClick={toogleMenu} className={`hamburger ${menu && "active"}`}>
          <li>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
