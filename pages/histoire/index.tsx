import Head from "next/head"
import Image from "next/image"
import { sitename, siteurl } from "@utils/schema"
import commonStyle from "@styles/Common.module.css"

const title = "Notre Histoire"
const description = "PACIFIQUE HABITAT a ouvert ses portes en 2000. Elle est le fruit d’un entrepreneur professionnel, dans le secteur du bâtiment depuis 30 ans, Laurent MALDI."

const Histoire = () => {
  return (
    <main className="container">
      <Head>
        <title>{title + " | " + sitename}</title>
        <meta name="description" content={description} />
        <meta property="og:url" content={siteurl + "/histoire"} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title + " | " + sitename} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteurl}/assets/images/histoire.png`} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="506" />
      </Head>

      <section className={commonStyle.marginTop}>
        <center>
          <h1>{title.toUpperCase()}</h1>
          <Image alt="Couverture de la page histoire" priority src="/assets/images/histoire.png" width={1024} height={506} layout="responsive" />
          <article>
            <ul className={commonStyle.marginTop}>
              <li>
                <p>{"PACIFIQUE HABITAT a ouvert ses portes en 2000. Elle est le fruit d’un entrepreneur professionnel, dans le secteur du bâtiment depuis 30 ans, Laurent MALDI."}</p>
              </li>
              <li>
                <p>
                  {
                    "Nous sommes engagés à satisfaire les besoins de nos clients et à garantir leur pleine satisfaction de notre travail. Notre société regroupe tous les corps de métiers du bâtiment, excepté la climatisation et la sécurité incendie, que nous sous traitons à des sociétés partenaires. PACIFIQUE HABITAT vous garantie un travail précis, rapide et efficace."
                  }
                </p>
              </li>
              <li>
                <p>
                  {"Grâce à notre équipe qualifiée, notre expérience et notre réseau de partenaires, notre PME a toutes les compétences pour réaliser des chantiers de construction et de rénovation."}
                </p>
              </li>
            </ul>
          </article>
        </center>
      </section>
    </main>
  )
}

export default Histoire
