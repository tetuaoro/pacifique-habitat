import Head from "next/head"
import { sitename } from "@utils/schema"
import commonCss from "@styles/Common.module.css"
import Image from "next/image"

const title = "Conception, étude et plans"
const description =
  "Chez PACIFIQUE HABITAT, nos clients sont notre priorité et nous mettons tout en œuvre pour les satisfaire pleinement. Grâce à ce service, nous sommes en mesure de mener les projets les plus complexes et de garantir un travail d'excellente qualité."

const Conception = () => {
  return (
    <main className="container">
      <Head>
        <title>{title + " | " + sitename}</title>
        <meta name="description" content={description} />
      </Head>
      <section className={commonCss.marginTop}>
        <center>
          <h1>{title.toUpperCase()}</h1>
          <p>{"Quelle que soit la taille du projet, nous le réalisons."}</p>
          <article className={commonCss.inlineArticle}>
            <div className={commonCss.relative}>
              <Image priority alt="Conception" src="/assets/images/plans/2.png" layout="fill" objectFit="cover" />
            </div>
            <div>
              <h6>{"Conception, etude et plans"}</h6>
              <p>
                {
                  "Chez PACIFIQUE HABITAT, nos clients sont notre priorité et nous mettons tout en œuvre pour les satisfaire pleinement. Grâce à ce service, nous sommes en mesure de mener les projets les plus complexes et de garantir un travail d'excellente qualité."
                }
              </p>
            </div>
          </article>
          <article className={commonCss.inlineArticle}>
            <div>
              <h6>{"Chiffrage"}</h6>
              <p>
                {
                  "Vous cherchez un entrepreneur fiable et expérimenté pour votre prochain projet ? L'excellence de notre travail parle d'elle-même, et nous proposons à nos clients une attention personnalisée en fonction de leurs besoins spécifiques. Si vous avez besoins de services de Gestion de la construction professionnels, contactez-nous et prenez rendez-vous."
                }
              </p>
            </div>
            <div className={commonCss.relative}>
              <Image priority alt="etude et plans" src="/assets/images/plans/1.png" layout="fill" objectFit="cover" />
            </div>
          </article>
        </center>
      </section>
    </main>
  )
}

export default Conception
