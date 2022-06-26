import Head from "next/head"
import Image from "next/image"
import { sitename, siteurl } from "@utils/schema"
import commonCss from "@styles/Common.module.css"

const title = "Résine"
const description =
  "Applicateur des résines minerales, RESINEO. Suite à plusieurs formations en France, PACIFIQUE HABITAT bénéficie d'une attestation de formation d'application des produits Résinéo sur toute la Polynésie."

const Resine = () => {
  return (
    <main className="container">
      <Head>
        <title>{title + " | " + sitename}</title>
        <meta name="description" content={description} />
        <meta property="fb:app_id" content="294401990731485" />
        <meta property="og:url" content={siteurl + "/services/resine"} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title + " | " + sitename} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteurl}/assets/images/resines/1_1.png`} />
        <meta property="og:image:width" content="1336" />
        <meta property="og:image:height" content="800" />
      </Head>
      <section className={commonCss.marginTop}>
        <center>
          <h1>{title.toUpperCase()}</h1>
          <p>{""}</p>
          <Image alt="resine" src="/assets/images/resines/1_1.png" layout="responsive" width={1336} height={800} />
          <article>
            <header>
              <h2>{"Le revêtement de sol drainant, esthétique et durable"}</h2>
            </header>
            <ul>
              <li>
                <b>
                  <u>Drainant</u>
                </b>
                {": La solution Résineo Drain évite les eaux stagnantes en bord de piscine grâce à son pouvoir drainant."}
              </li>
              <li>
                <b>
                  <u>Antiglissant</u>
                </b>
                {": Ils limitent le risque de glissade grâce à un traitement antiglissant."}
              </li>
              <li>
                <b>
                  <u>Résistants</u>
                </b>
                {": Ils résistent à la chaleur et au gel (résistance aux UV et à l'humidité), vous pouvez ainsi marcher au bord de votre piscine sans crainte de brûlure par temps chaud."}
              </li>
              <li>
                <b>
                  <u>{"Facile d'entretien"}</u>
                </b>
                {": Très faciles d'entretien, un nettoyage au jet d'eau suffira pour leur redonner leur éclat !"}
              </li>
              <li>
                <b>
                  <u>Garantie 10 ans</u>
                </b>
              </li>
            </ul>
          </article>
          <div className="grid">
            <article className={commonCss.article}>
              <header className={commonCss.relativeCard}>
                <Image priority alt="Plage de piscine" src="/assets/images/resines/1_3.png" layout="fill" objectFit="cover" />
              </header>
              <h6>{"Esthétique, unique, exceptionnel"}</h6>
              <p>
                {
                  "Nos revêtements de sol extérieur, fabriqués à partir de résines et de granulats minéraux permettent de mettre en valeur votre piscine. Ils s’adaptent parfaitement aux courbes de votre tour de piscine pour en souligner les contours. La large gamme de coloris de granulats minéraux que nous proposons vous permet de créer des abords de piscine qui vous ressemblent et qui se marieront parfaitement avec vos espaces existants. Grâce à des coloris tendances et modernes tels que le Gris ou la couleur Coquillage, vous apportez une touche de modernité lors de la rénovation ou de la création de votre plage de piscine."
                }
              </p>
            </article>
            <article className={commonCss.article}>
              <header className={commonCss.relativeCard}>
                <Image priority alt="Terrasses" src="/assets/images/resines/1_7.png" layout="fill" objectFit="cover" />
              </header>
              <h6>{"Sublimez votre terrasse"}</h6>
              <p>
                {
                  "Nous savons que l’esthétique d’une terrasse est très important, c’est pourquoi notre revêtement d’extérieur Résineo donnera un aspect design et moderne à votre terrasse. Résineo Drain, composé d’un agglomérat de marbre et de quartz saura donner cet aspect à la fois minéral et design à votre terrasse. Le large nuancier de coloris de marbre ou de quartz vous permettra de sublimer et d’adapter votre terrasse à son environnement."
                }
              </p>
            </article>
            <article className={commonCss.article}>
              <header className={commonCss.relativeCard}>
                <Image priority alt="Entrée de garage" src="/assets/images/resines/1_6.png" layout="fill" objectFit="cover" />
              </header>
              <h6>{"Pour vos allées carrossables"}</h6>
              <p>
                {"Les allées carrossables et voies d’accès sont soumises à de nombreuses contraintes telles que le poids des véhicules, la friction des pneus ou l’exposition aux intempéries."}
                <br />
                {
                  "Chez Résineo, nous pensons que vos allées de jardin ou entrées de garage, méritent, au même titre que vos autres espaces extérieurs (chemin, terrasse, plage piscine), un revêtement qui allie performance et esthétique. Résineo est un matériau qui combine résine et granulats de marbre ou quartz, particulièrement résistant aux passages répétés de véhicules. Par rapport au goudron ou aux dalles de béton, Résineo apportera une finition moderne et naturelle."
                }
              </p>
            </article>
          </div>
        </center>
      </section>
      <section>
        <center>
          <article>
            <header>
              <h2>Notre gamme</h2>
            </header>
            <p>{"Nous détenons une large gamme de produits variés pour une multitude de fonctionnalité."}</p>
          </article>
          <div>
            <article className={commonCss.inlineArticle}>
              <div className={commonCss.relative}>
                <Image priority alt="Esthétique" src="/assets/images/resines/1_4.png" layout="fill" objectFit="cover" />
              </div>
              <div>
                <h6>{"Sublimez votre terrasse"}</h6>
                <p>
                  {
                    "Nous savons que l’esthétique d’une terrasse est très important, c’est pourquoi notre revêtement d’extérieur Résineo donnera un aspect design et moderne à votre terrasse. Résineo Drain, composé d’un agglomérat de marbre et de quartz saura donner cet aspect à la fois minéral et design à votre terrasse. Le large nuancier de coloris de marbre ou de quartz vous permettra de sublimer et d’adapter votre terrasse à son environnement."
                  }
                </p>
              </div>
            </article>
            <article className={commonCss.inlineArticle}>
              <div>
                <h6>{"Résinéo PLAGE"}</h6>
                <p>
                  {
                    "Idéal pour vos abords de piscines et terrasses, Résineo plage saura vous faire voyager grâce à son esthétisme qui donne à ce revêtement original, l’effet plage. Pour ajouter une touche ensoleillée, tout en alliant d’excellentes propriétés de durabilité et de résistance à l’usure, adoptez Résineo plage."
                  }
                </p>
              </div>
              <div className={commonCss.relative}>
                <Image priority alt="Plages" src="/assets/images/resines/1_2.png" layout="fill" objectFit="cover" />
              </div>
            </article>
            <article className={commonCss.inlineArticle}>
              <div>
                <h6>{"Résinéo GRIP"}</h6>
                <p>
                  {
                    "A pied ou en voiture, gardez le contrôle et évitez les dérapages grâce à Résineo Grip et son adhérence irréprochable. Résistant à la météo et au trafic quotidien, cette solution à l’esthétisme personnalisable perdure et gardera sa superbe au fil des ans."
                  }
                </p>
              </div>
              <div className={commonCss.relative}>
                <Image priority alt="Grips" src="/assets/images/resines/1_5.png" layout="fill" objectFit="cover" />
              </div>
            </article>
          </div>
        </center>
      </section>
    </main>
  )
}

export default Resine
