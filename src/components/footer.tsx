import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="d1">
          <div className="d2">
            <div className="container-fluid">
              <h6>CONTACT</h6>
            </div>
          </div>
          <div className="d3">
            <div className="container-fluid">
              <h6>HORAIRES D&apos;OUVERTURE AU PUBLIC</h6>
            </div>
          </div>
        </div>
        <div className="d4">
          <div className="container-fluid">
            <h6>GALLERIE</h6>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="container-fluid">
          <nav>
            <ul>
              <li>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Pacifique-Habitat-294401990731485/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  <Link href="#">
                    <a>Conditions</a>
                  </Link>
                </small>
              </li>
              <li>
                <small>
                  <Link href="#">
                    <a>Politique de confidentialité</a>
                  </Link>
                </small>
              </li>
              <li>
                <small>
                  <Link href="#">
                    <a>Nous contacter</a>
                  </Link>
                </small>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
