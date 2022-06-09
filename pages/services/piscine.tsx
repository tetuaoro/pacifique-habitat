import Head from "next/head"
import { sitename, siteurl } from "@utils/schema"
import commonCss from "@styles/Common.module.css"
import Image from "next/image"

const title = "Piscine"
const description =
  "En tant que meilleur contractant de Punaauia, nous savons ce qu'est un service exceptionnel et fiable. Nous nous engageons à fournir à nos clients de nombreuses options, avec une qualité et une précision garanties. Des premières étapes jusqu'à la finalisation du projet, nous collaborons étroitement avec nos clients à chaque étape. Poursuivez votre lecture pour en savoir plus et appelez-nous pour prendre rendez-vous."

const Piscine = () => {
  return (
    <main className="container">
      <Head>
        <title>{title + " | " + sitename}</title>
        <meta property="og:url" content={siteurl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title + " | " + sitename} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteurl}/assets/images/piscines/2.png`} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="425" />
      </Head>
      <section className={commonCss.marginTop}>
        <center>
          <h1>{title.toUpperCase()}</h1>
          <p>{description}</p>
          <Image alt="Couverture de la page piscine 1" priority src="/assets/images/piscines/2.png" width={1206} height={500} layout="responsive" />
          <br />
          <Image alt="Couverture de la page piscine 2" src="/assets/images/piscines/1.png" width={1206} height={500} layout="responsive" />
          <br />
          <Image alt="Couverture de la page piscine 3" src="/assets/images/piscines/3.png" width={1024} height={425} layout="responsive" />
        </center>
      </section>
    </main>
  )
}

export default Piscine
