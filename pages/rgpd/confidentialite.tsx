import Head from "next/head"
import { sitename } from "@utils/schema"
import commonCss from "@styles/Common.module.css"
import { Fragment } from "react"

const title = "Politique de confidentialité"

const Confidentialite = () => {
  return (
    <main className="container">
      <Head>
        <title>{title + " | " + sitename}</title>
      </Head>
      <section className={commonCss.marginTop}>
        <Content />
      </section>
    </main>
  )
}

const Content = () => {
  return (
    <div>
      <div>
        <center>
          <div>
            <h1>POLITIQUE DE CONFIDENTIALITÉ</h1>
            <p>
              <br />
              <br />
              <br />
              <span>pacifique-habitat.vercel.app</span>
              <br />
              Pacifique habitat
              <br />
              <br />
              Type de site : vitrine
            </p>
          </div>
        </center>
        <div>
          <h4>
            <u>Le but de cette politique de confidentialité </u>
          </h4>
          <p>
            {`Le but de cette politique de confidentialité est d'informer les utilisateurs de notre site des données personnelles que nous recueillerons ainsi que les informations suivantes, le cas
            échéant :`}
          </p>
          <ul>
            <li>
              <span>Les données personnelles que nous recueillerons</span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>{"L’utilisation des données recueillies"}</span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>Qui a accès aux données recueillies</span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>Les droits des utilisateurs du site</span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>La politique de cookies du site</span>
              <span>
                <br />
              </span>
            </li>
          </ul>
          <p>{"Cette politique de confidentialité fonctionne parallèlement aux conditions générales d’utilisation de notre site."}</p>
        </div>
        <div>
          <h4>
            <u>Lois applicables</u>
          </h4>
          <p>
            Conformément au <span>Règlement général sur la protection des données</span> (RGPD), cette politique de confidentialité est conforme aux règlements suivants.
            <br />
            <br />
            Les données à caractère personnel doivent être :
          </p>
          <ul>
            <li>
              <span>traitées de manière licite, loyale et transparente au regard de la personne concernée (licéité, loyauté, transparence) ;</span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>
                {`collectées pour des finalités déterminées, explicites et légitimes, et ne pas être traitées ultérieurement d'une manière incompatible avec ces finalités; le traitement ultérieur à des
                fins archivistiques dans l'intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques n'est pas considéré, conformément à l'article 89, paragraphe 1,
                comme incompatible avec les finalités initiales (limitation des finalités) ;`}
              </span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>adéquates, pertinentes et limitées à ce qui est nécessaire au regard des finalités pour lesquelles elles sont traitées (minimisation des données) ;</span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>
                exactes et, si nécessaire, tenues à jour; toutes les mesures raisonnables doivent être prises pour que les données à caractère personnel qui sont inexactes, eu égard aux finalités pour
                lesquelles elles sont traitées, soient effacées ou rectifiées sans tarder (exactitude) ;
              </span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>{`
                conservées sous une forme permettant l'identification des personnes concernées pendant une durée n'excédant pas celle nécessaire au regard des finalités pour lesquelles elles sont
                traitées; les données à caractère personnel peuvent être conservées pour des durées plus longues dans la mesure où elles seront traitées exclusivement à des fins archivistiques dans
                l'intérêt public, à des fins de recherche scientifique ou historique ou à des fins statistiques conformément à l'article 89, paragraphe 1, pour autant que soient mises en œuvre les
                mesures techniques et organisationnelles appropriées requises par le règlement afin de garantir les droits et libertés de la personne concernée (limitation de la conservation) ;
              `}</span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>
                {`
                traitées de façon à garantir une sécurité appropriée des données à caractère personnel, y compris la protection contre le traitement non autorisé ou illicite et contre la perte, la
                destruction ou les dégâts d'origine accidentelle, à l'aide de mesures techniques ou organisationnelles appropriées (intégrité et confidentialité).
                `}
                <br />
              </span>
              <span>
                <br />
              </span>
            </li>
          </ul>
          <p>{"Le traitement n'est licite que si, et dans la mesure où, au moins une des conditions suivantes est remplie :"}</p>
          <ul>
            <li>
              <span>la personne concernée a consenti au traitement de ses données à caractère personnel pour une ou plusieurs finalités spécifiques ;</span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>{`
                le traitement est nécessaire à l'exécution d'un contrat auquel la personne concernée est partie ou à l'exécution de mesures précontractuelles prises à la demande de celle-ci ;
              `}</span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>{"le traitement est nécessaire au respect d'une obligation légale à laquelle le responsable du traitement est soumis ;"}</span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>{"le traitement est nécessaire à la sauvegarde des intérêts vitaux de la personne concernée ou d'une autre personne physique ;"}</span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>
                {"le traitement est nécessaire à l'exécution d'une mission d'intérêt public ou relevant de l'exercice de l'autorité publique dont est investi le responsable du traitement ;"}
              </span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>
                le traitement est nécessaire aux fins des intérêts légitimes poursuivis par le responsable du traitement ou par un tiers, à moins que ne prévalent les intérêts ou les libertés et
                droits fondamentaux de la personne concernée qui exigent une protection des données à caractère personnel, notamment lorsque la personne concernée est un enfant.
              </span>
              <span>
                <br />
              </span>
            </li>
          </ul>
          <p>{`
            Pour les résidents de la Polynésie Française, cette politique de confidentialité vise à se conformer au Règlement général sur la protection des données (RGPD). S’il y a des
            incohérences entre ce document et le RGPD, la législation de l’État s’appliquera. Si nous constatons des incohérences, nous modifierons notre politique pour nous conformer à
            la loi pertinente.
          `}</p>
        </div>
        <div>
          <h4>
            <u>Consentement</u>
          </h4>
          <p>{"Les utilisateurs conviennent qu’en utilisant notre site, ils consentent à :"}</p>
          <ul>
            <li>
              <span>les conditions énoncées dans la présente politique de confidentialité et</span>
              <span>
                <br />
              </span>
            </li>
            <li>
              <span>{"la collecte, l’utilisation et la conservation des données énumérées dans la présente politique."}</span>
              <span>
                <br />
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h4>
            <u>Données personnelles que nous collectons</u>
          </h4>
          <div>
            <p>{`Nous ne collectons, ne stockons ni n’utilisons aucune donnée utilisateur sur notre site. Dans le cas où nous avons besoin de recueillir vos données, nous veillerons à vous fournir un
              préavis de ce recueil de données.
          `}</p>
          </div>
        </div>
        <div>
          <h4>
            <u>Modifications</u>
          </h4>
          <p>{`
            Cette politique de confidentialité peut être modifiée à l’occasion afin de maintenir la conformité avec la loi et de tenir compte de tout changement à notre processus de collecte de
            données. Nous recommandons à nos utilisateurs de vérifier notre politique de temps à autre pour s’assurer qu’ils soient informés de toute mise à jour. Au besoin, nous pouvons informer les
            utilisateurs par courriel des changements apportés à cette politique.
          `}</p>
        </div>
        <div>
          <h4>
            <u>Contact</u>
          </h4>
          <p>
            {"Si vous avez des questions à nous poser, n’hésitez pas à communiquer avec nous en utilisant ce qui suit :"}
            <br />
            40 83 22 20
            <br />
            pacifique.habitat@mail.pf
            <br />
            {"Puna'auia, Polynésie"}
          </p>
        </div>
        <p>
          <br />
          <span>Date {"d’entrée"} en vigueur&nbsp;: </span>le 04 juin 2022
        </p>
      </div>
    </div>
  )
}

export default Confidentialite
