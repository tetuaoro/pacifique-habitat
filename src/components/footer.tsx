import Image from "next/image"
import Link from "next/link"
import { isAndroid, isDesktop, isIOS } from "react-device-detect"
import { fbLink, hasMap, telephone } from "@utils/schema"
import { useEffect } from "react"

const Footer = () => {
  const fn = async () => {
    console.log("call fn", isAndroid, isIOS, isDesktop)

    const relatedApps = await navigator.getInstalledRelatedApps()
    relatedApps.forEach((app) => {
      console.log(app.id, app.platform, app.url)
    })
  }

  useEffect(() => {
    fn()
  }, [])

  return (
    <footer>
      <div className="footer" style={{ paddingTop: "5rem" }}>
        <div className="d1">
          <div className="d2">
            <div className="container-fluid">
              <h6>CONTACT</h6>
              <ul className="txt14 nostyle">
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>{" "}
                  <a className="nostyle" target="_blank" rel="noopener noreferrer" href={hasMap}>
                    Puna&apos;auia, Polynésie
                  </a>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>{" "}
                  <a href={`tel:${telephone}`} className="nostyle">
                    +689 40832220
                  </a>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>{" "}
                  <a href="mailto:pacifique.habitat@mail.pf" className="nostyle">
                    pacifique.habitat@mail.pf
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d3">
            <div className="container-fluid">
              <h6>HORAIRES D&apos;OUVERTURE AU PUBLIC</h6>
              <ul className="txt14 nostyle">
                <li>06:30 - 15:30 du Lundi au Jeudi</li>
                <li>06:30 - 12:00 le Vendredi</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="d4">
          <div className="container-fluid">
            <h6>GALLERIE</h6>
            <div className="gallery">
              {new Array(12).fill(0).map((_, k) => (
                <span key={k} style={{ width: "100px", height: "100px", position: "relative" }}>
                  <Image alt={`Projet réalisé ${k + 1}`} src={`/assets/images/projets/${k + 1}.png`} layout="fill" />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="container-fluid">
          <nav>
            <ul>
              <li>
                <a target="_blank" rel="noopener noreferrer" href={fbLink}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <small>
                  <Link href="/rgpd/conditions">
                    <a>Conditions</a>
                  </Link>
                </small>
              </li>
              <li>
                <small>
                  <Link href="/rgpd/confidentialite">
                    <a>Politique de confidentialité</a>
                  </Link>
                </small>
              </li>
              {/* <li>
                <small>
                  <Link href="/contact">
                    <a>Nous contacter</a>
                  </Link>
                </small>
              </li> */}
              <li>
                <small>
                  <a href="#">
                    Licence © 2022 Tous droits réservés{" "}
                    <span style={{ color: "var(--primary)" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hammer" viewBox="0 0 16 16">
                        <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z" />
                      </svg>
                    </span>
                  </a>
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
