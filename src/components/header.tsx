import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { telephone } from "@utils/schema"

const Header = () => {
  const [menu, setMenuState] = useState(false)
  const toogleMenu = () => setMenuState(!menu)
  const closeMenu = () => setMenuState(false)

  return (
    <header className="container-fluid">
      <nav>
        <ul>
          <li>
            <Image src="/assets/logo.webp" width={111} height={80} />
          </li>
        </ul>
        <ul className={`menu ${menu && "active"}`}>
          <li onClick={closeMenu}>
            <small>
              <Link href="/">
                <a>Accueil</a>
              </Link>
            </small>
          </li>
          <li onClick={closeMenu}>
            <small>
              <Link href="/histoire">
                <a>Notre Histoire</a>
              </Link>
            </small>
          </li>
          <li onClick={closeMenu}>
            <small>
              <Link href="/secteur">
                <a>Secteurs d'activité</a>
              </Link>
            </small>
          </li>
        </ul>
        <ul>
          <li>
            <a href="mailto:pacifique.habitat@mail.pf">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </a>
          </li>
          <li>
            <a href={`tel:${telephone}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                <path
                  fill-rule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pacifique-Habitat-294401990731485/">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
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
