import { sitename } from "@utils/schema"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import commonCss from "@styles/Common.module.css"
import secteurCss from "@styles/Secteurs.module.css"

const title = "Secteurs d'activité"
const description =
  "La SARL déploie ces compétences dans tous les domaines de la construction à savoir: gros œuvre, second œuvre, finition, rénovation, applicateur de résine de type résinéo, maritime (ponton)."

const Secteurs: NextPage = () => {
  return (
    <main className="container">
      <Head>
        <title>{title + " | " + sitename}</title>
        <meta name="description" content={description} />
      </Head>

      <section className={commonCss.marginTop}>
        <center>
          <h1>{title}</h1>
          <p>
            {`La SARL déploie ces compétences dans tous les domaines de la construction à savoir :
            le gros œuvre, 
            le second œuvre,  
            la finition, 
            la rénovation, 
            l'applicateur de résine de type Résinéo, 
            maritime (ponton).`}
          </p>
          <div className="grid">
            <article className={secteurCss.article}>
              <header className={secteurCss.relativeCard}>
                <Image priority alt="Commerciaux" src="/assets/images/activites/2.png" layout="fill" objectFit="cover" />
              </header>
              <div className={secteurCss.laCard}>
                <h6>{"Ce dont vous avez besoin"}</h6>
                <p>
                  {
                    "Notre objectif est que le travail soit bien fait, à chaque fois. Ce genre de projet peut s'avérer parfois complexe, mais en collaborant avec PACIFIQUE HABITAT, vous vous faciliterez les choses. Au fil des ans, nous avons acquis la réputation d'être une entreprise digne de confiance, et ce grâce à une organisation efficace alliée à une gestion irréprochable."
                  }
                </p>
              </div>
            </article>
            <article className={secteurCss.article}>
              <header className={secteurCss.relativeCard}>
                <Image priority alt="Résidentiels" src="/assets/images/activites/3.png" layout="fill" objectFit="cover" />
              </header>
              <div className={secteurCss.laCard}>
                <h6>{"Des travaux parfaitement réalisés"}</h6>
                <p>
                  {
                    "Nos professionnels agréés ont permis à de nombreux clients de découvrir les avantages de travailler avec PACIFIQUE HABITAT. Nous personnaliserons nos services pour répondre aux besoins spécifiques des projets de nos clients, et nous veillons à ce que la qualité, l'efficacité et les économies d'argent soient au rendez-vous."
                  }
                </p>
              </div>
            </article>
            <article className={secteurCss.article}>
              <header className={secteurCss.relativeCard}>
                <Image priority alt="Industriel" src="/assets/images/activites/1.png" layout="fill" objectFit="cover" />
              </header>
              <div className={secteurCss.laCard}>
                <h6>{"Des services professionnels personnalisés"}</h6>
                <p>
                  {
                    "En tant que Entreprise de construction parmi les plus fiables et reconnu(e)s du métier, PACIFIQUE HABITAT connait très bien les problématiques liées aux projets de ses clients. Notre équipe de spécialistes offre un haut degrés de compétence ainsi que des solutions innovantes et personnalisées pour répondre à chacune de vos demandes, en dépensant le moins possible."
                  }
                </p>
              </div>
            </article>
          </div>
        </center>
      </section>
    </main>
  )
}

export default Secteurs
