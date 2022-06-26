import { Fragment, MouseEventHandler, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { fbLink, telephone } from "@utils/schema"

const Header = () => {
  const [menu, setMenuState] = useState(false)
  const toogleMenu = () => setMenuState(!menu)
  const closeMenu = () => setMenuState(false)

  return (
    <header className="container-fluid">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>
                <Image priority alt="logo de pacifique habitat" src="/assets/logo.webp" width={111} height={80} />
              </a>
            </Link>
          </li>
        </ul>
        <ul className={`menu ${menu && "active"}`}>
          <Li href="/" linkName="Accueil" onClick={closeMenu} />
          <Li href="/histoire" linkName="Notre histoire" onClick={closeMenu} />
          <Li href="/secteurs" linkName="Secteurs d'activité" onClick={closeMenu} />

          <Li onClick={closeMenu} className="list-sm" href="/services/resine" linkName="Applicateur de résine" />
          <Li onClick={closeMenu} className="list-sm" href="/services/piscine" linkName="Piscine" />
          <Li onClick={closeMenu} className="list-sm" href="/services/conception" linkName="Conception, étude et plans" />
          <Li onClick={closeMenu} className="list-sm" href="/services/construction" linkName="Construction" />

          <li className="contact" role="list" onClick={closeMenu}>
            <summary aria-haspopup="listbox">
              <small style={{ color: "var(--primary)" }}>Plus</small>
            </summary>
            <ul role="listbox">
              <Li href="/services/resine" linkName="Applicateur de résine" />
              <Li href="/services/piscine" linkName="Piscine" />
              <Li href="/services/conception" linkName="Conception, étude et plans" />
              <Li href="/services/construction" linkName="Construction" />
            </ul>
          </li>
          <li className="contact-sm">
            <ContactLi />
          </li>
        </ul>
        <ul className="contact">
          <ContactLi embedByUl />
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

type LiProps = { href: string; linkName: string; className?: string; onClick?: MouseEventHandler<HTMLLIElement> }
const Li = ({ href, linkName, className, onClick }: LiProps) => {
  return (
    <li className={className || ""} onClick={onClick}>
      <small>
        <Link href={href}>
          <a>{linkName}</a>
        </Link>
      </small>
    </li>
  )
}

const ContactLi = ({ embedByUl }: { embedByUl?: boolean }) => {
  return (
    <Fragment>
      {embedByUl ? (
        <Fragment>
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
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noopener noreferrer" href={fbLink}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>
            </a>
          </li>
        </Fragment>
      ) : (
        <Fragment>
          <a href="mailto:pacifique.habitat@mail.pf">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
            </svg>
          </a>
          <a href={`tel:${telephone}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
              />
            </svg>
          </a>
          <a target="_blank" rel="noopener noreferrer" href={fbLink}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Header
