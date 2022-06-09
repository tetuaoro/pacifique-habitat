import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { sitename } from "@utils/schema"
import commonCss from "@styles/Common.module.css"

const title = "Construction, Rénovation"
const description =
  "Notre société déploie ses compétences dans tous les domaines de la construction. Nous apportons à chaque projet l'attention personnalisée qu'il mérite. Nous collaborons étroitement avec nos clients afin de bien comprendre leurs idées et de nous adapter à leurs préoccupations tout en respectant le budget convenu."

const Construction: NextPage = () => {
  return (
    <main className="container">
      <Head>
        <title>{title + " | " + sitename}</title>
        <meta name="description" content={description} />
      </Head>

      <section className={commonCss.marginTop}>
        <center>
          <h1>{title.toUpperCase()}</h1>
          <p>{"Bois, Béton, Métallique, Parpaing, Siporex, Container..."}</p>
          <br />
          <p>{description + " Découvrez ci-dessous certains de nos derniers projets et si vous souhaitez plus d'informations, contactez-nous."}</p>
          <div className="grid">
            <article className={commonCss.article}>
              <header className={commonCss.relativeCard}>
                <Image priority alt="Ossature Bois" src="/assets/images/projets/7.png" layout="fill" objectFit="cover" />
              </header>
              <h6>{"Ossature Bois"}</h6>
              <p>
                {
                  "Si vous cherchez des prestataires de service qualifiés pour mener un projet complexe, nous sommes là pour vous. Nous apportons des résultats de qualité dans le respect des délais et du budget. Nous travaillons en étroite collaboration avec nos clients afin de bien comprendre leurs besoins et préférences et nos résultats parlent d'eux-mêmes."
                }
              </p>
            </article>
            <article className={commonCss.article}>
              <header className={commonCss.relativeCard}>
                <Image priority alt="Ossature métalique" src="/assets/images/projets/4.png" layout="fill" objectFit="cover" />
              </header>
              <h6>{"Ossature métalique"}</h6>
              <p>
                {
                  "Pour ce projet, nous étions très pointilleux sur les matériaux et l'empreinte de notre travail. Nous avons étroitement collaboré avec notre client afin de répondre à ses attentes et d'atteindre le résultat escompté. L'objectif de PACIFIQUE HABITAT est de donner vie à votre idée en collaborant avec vous à chaque étape."
                }
              </p>
            </article>
            <article className={commonCss.article}>
              <header className={commonCss.relativeCard}>
                <Image priority alt="Industriel" src="/assets/images/projets/2.png" layout="fill" objectFit="cover" />
              </header>
              <h6>{"Ossature en parpaing"}</h6>
              <p>
                {
                  "Ce projet demandait de respecter un grand nombre de critères afin de respecter les normes en vigueur. Nous avons achevé ce projet en respectant les délais et le budget, et ce fut un bon exemple de promesses tenues en respectant la qualité et les attentes du client. Vous souhaitez en apprendre plus sur des projets similaires ? Contactez-nous dès aujourd'hui."
                }
              </p>
            </article>
          </div>
        </center>
      </section>
    </main>
  )
}

export default Construction
