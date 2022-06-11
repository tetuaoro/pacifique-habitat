import Head from "next/head"
import { sitename } from "@utils/schema"
import commonCss from "@styles/Common.module.css"

const title = "Conditions d'utilisation"

const Conditions = () => {
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
          <h1>
            CONDITIONS GÉNÉRALES {"D'UTILISATION"} <br />
            DE:{" "}
            <small>
              <span id="span_id_nom_du_site">pacifique-habitat.vercel.app</span>
            </small>
          </h1>
        </center>
        <p>
          Date de dernière mise à jour : <span id="span_id_date">4 juin 2022</span>
          <br />
          <br />
          <br />
          <strong>{"PRIÈRE DE LIRE LES CONDITIONS GÉNÉRALES AVANT D'UTILISER LE SITE"}</strong>
        </p>
        <p>
          <br />
          {`Les conditions générales qui suivent gouvernent et s'appliquent à votre utilisation ou recours au site maintenu par
          `}
          <span>Pacifique habitat</span> {'(le "site")'}.
        </p>
        <p>
          {`En accédant au site ou en y naviguant, vous déclarez avoir lu et compris les conditions générales d'utilisation et déclarez être liés par ces conditions. Veuillez noter que nous pouvons
          modifier les conditions d'utilisation à tout moment et sans préavis. Votre utilisation continue du site sera considérée comme votre acceptation des conditions générales révisées.
          `}
          <br />
          <br />
          <br />
        </p>
        <h4>
          <u>1. PROPRIÉTÉ INTELLECTUELLE</u>
        </h4>
        <p>{`
          Toute propriété intellectuelle sur le site est possédée par nous ou nos concédants et inclut tout élément protégé par droits d'auteur, marque de commerce ou brevet. Toutes les marques
          déposées sont possédées, enregistrées et/ou sous licence par nous. Tout le contenu sur le site y compris, mais sans s'y limiter, le texte, le logiciel, le code, la conception, les
          graphiques, les photos, les sons, la musique, les vidéos, les applications, les fonctionnalités interactives ainsi que tout autre contenu, est une ouvre collective sous le droit canadien ou
          sous tout autre droit des droits d'auteur et est la propriété de Pacifique habitat.
        `}</p>
        <p>Tous droits réservés.</p>
        <h4>
          <u>2. UTILISATION DU CONTENU DE{" L'ENTREPRISE"}</u>
        </h4>
        <p>{`
          Nous pouvons vous fournir certaines informations en raison de votre utilisation du site, y compris, sans s'y limiter, des documents, des données ou des informations développés par nous, ou
          tout autre élément qui pourrait vous aider dans l'utilisation du site ou des services (le "Contenu de l'Entreprise"). Le Contenu de l'Entreprise ne peut être utilisé pour aucun autre objet
          que l'utilisation du site et des services offerts sur le site. Rien dans les présentes ne peut être interprété comme vous attribuant une licence ou des droits de propriété intellectuelle.
        `}</p>
        <h4>
          <u>3. PAIEMENT</u>
        </h4>
        <p>
          {`
          Lorsque vous effectuez un achat sur le site, vous acceptez de fournir un instrument de paiement valide. Faites attention aux détails de la transaction puisque le prix total peut inclure
          taxes, frais et coûts d'envoi pour lesquels vous êtes responsables.
          `}
          <br />
          <br />
          {`
          Lorsque vous nous fournissez un instrument de paiement, vous déclarez avoir la permission d'utiliser cet instrument de paiement. Lorsque vous effectuez un paiement, vous nous autorisez,
          ainsi que le service de paiement que nous utilisons, à charger le montant total sur l'instrument de paiement que vous avez désigné pour la transaction. Vous nous autorisez également à
          recueillir et enregistrer cet instrument de paiement ainsi que toute autre information reliée à la transaction.
          `}
          <br />
          {`Si vous payez par carte de débit ou de crédit, nous pouvons obtenir de l'émetteur de la carte une préautorisation d'un montant allant jusqu'au montant total de la transaction. Si vous
          choisissez d'annuler une transaction avant qu'elle soit complétée, les fonds utilisés pour la préautorisation peuvent ne pas être disponibles immédiatement sur votre compte.
          `}
          <br />
          {`Nous nous réservons le droit d'annuler toute transaction si nous sommes d'avis que la transaction enfreint les présentes conditions générales d'utilisation ou si nous sommes d'avis qu'en
          agissant ainsi nous pouvons prévenir une perte financière.
          `}
          <br />
          <br />
          {`
          Afin de prévenir toute perte financière, nous pouvons contacter l'émetteur de votre instrument de paiement, les autorités policières ou toute tierce partie atteinte (incluant d'autres
          utilisateurs) et pouvons partager les détails de tout paiement auquel vous êtes associé(e) si nous sommes d'avis qu'une telle action puisse prévenir une perte financière ou une infraction à
          la loi.`}
        </p>
        <h4>
          <u>4. VENTE DE PRODUITS ET/OU SERVICES</u>
        </h4>
        <p>{`
          Nous pouvons vendre des biens ou services. Nous nous engageons à être aussi exacts que possible en ce qui a trait à toute information au sujet des biens et des services, incluant les
          descriptions de produits et les images de produits. Cependant, nous ne garantissons pas l'exactitude ou la fiabilité de toute information ayant trait à un produit et vous reconnaissez et
          convenez que l'achat de tels produits est à vos propres risques.
        `}</p>
        <h4>
          <u>5. UTILISATION ACCEPTABLE DU SITE</u>
        </h4>
        <p>
          {`Vous acceptez de ne pas utiliser le site pour des fins illicites ou toute autre fin interdite en vertu de la présente clause. Vous acceptez de ne pas utiliser le site de quelconque façon qui
          pourrait nuire au site, aux services ou à l'activité commerciale de Pacifique habitat.
          `}
          <br />
          Vous acceptez également de ne pas utiliser le site pour les fins suivantes&nbsp;:
        </p>
        <p>a) {"harceler, abuser ou menacer autrui ou autrement violer les droits d'une personne"}&nbsp;;</p>
        <p>b) violer la propriété intellectuelle de Pacifique habitat ou de toute autre tierce partie&nbsp;;</p>
        <p>
          c){" "}
          {`télécharger ou transmettre des virus informatiques ou tout autre logiciel qui pourrait endommager la propriété de Pacifique habitat ou
          d'autrui`}
          &nbsp;;
        </p>
        <p>d) commettre une fraude&nbsp;;</p>
        <p>e) créer des activités de jeu, de la loterie ou un système pyramidal illicite ou y participer&nbsp;;</p>
        <p>f) publier ou distribuer du matériel obscène ou diffamatoire&nbsp;;</p>
        <p>g) publier ou distribuer tout matériel qui incite è la violence, à la haine, ou à la discrimination de quelque groupe que ce soit&nbsp;; et/ou</p>
        <p>h) recueillir illicitement des informations sur autrui.</p>
        <h4>
          <u>6. DÉGAGEMENT DE RESPONSABILITÉ</u>
        </h4>
        <p>
          Notre site existe pour des fins de communications seulement. Vous reconnaissez et convenez que toute information publiée sur notre site {"n'est"} pas destinée à être un avis juridique, médical
          ou financier et aucun rapport fiduciaire {"n'a"} été créé entre vous et Pacifique habitat. Vous convenez également que votre achat services sur le site est à vos propres risques. Nous ne sommes
          responsables en aucun cas des conseils ou de toute autre information véhiculés sur le site.
        </p>
        <h4>
          <u>7. INGÉNIERIE INVERSE ET SÉCURITÉ</u>
        </h4>
        <p>Vous ne pouvez entreprendre aucune des actions qui suivent&nbsp;:</p>
        <p>a) {"utiliser l'ingénierie inverse ou désassembler tout code ou logiciel sur ou de ce site"}&nbsp;;</p>
        <p>
          b) violer ou tenter de violer la sécurité du site par tout accès non autorisé, le contournement du cryptage ou de tout autre outil de sécurité,{" "}
          {"l'exploitation des données ou l'interférence"}
          avec tout hôte, utilisateur ou réseau.
        </p>
        <h4>
          <u>8. INDEMNISATION</u>
        </h4>
        <p>
          {`Vous convenez de défendre, dédommager et de tenir indemne Pacifique habitat et ses entreprises affiliées contre toute réclamation, poursuite ou demande, incluant les frais d'avocats, qui
          pourrait découler de ou qui se rapporte à votre utilisation ou votre abus du site, votre violation des présentes ou votre conduite et vos actions. Si nous choisissons de le faire, nous
          choisirons notre avocat et participerons à notre propre défense.
        `}
        </p>
        <h4>
          <u>9. INTERRUPTIONS DE SERVICE</u>
        </h4>
        <p>
          {`Il se peut que nous ayons à interrompre votre accès au site afin d'effectuer des travaux de maintenant ou des travaux d'urgence non planifiés. Vous convenez que votre accès au site peut être
          affecté par une indisponibilité non planifiée ou non anticipée, pour quelque raison que ce soit, et que nous ne serons en aucun cas tenus responsables de dommages ou de pertes découlant de
          cette indisponibilité.`}
        </p>
        <h4>
          <u>10. AUCUNE GARANTIE</u>
        </h4>
        <p>{`
          Bien que nous ayons déployé des efforts raisonnables pour nous assurer que le contenu du présent site est exact, nous ne pouvons garantir que ledit contenu soit exempt d'erreurs, à jour ou
          exhaustif. En aucun cas, nous ne pourrons être tenus responsables de tout dommage pouvant découler d'une erreur se trouvant sur le site.
        `}</p>
        <p>
          {`Nous n'assumons aucune responsabilité quant à tout dommage découlant de la mauvaise utilisation du contenu du site. Nous ne pouvons non plus garantir que le site soit disponible sans
          interruption, sans erreur ni omission, ni que les défauts soient corrigés. Il n'est pas non plus possible de garantir que le site et les serveurs qui le rendent disponible sont exempts de
          virus ou de composantes nuisibles. Le site et son contenu sont fournis "tels quels" et "selon la disponibilité" sans déclaration, garantie ou condition de quelque nature que ce soit,
          expresse ou implicite.`}
        </p>
        <p>{`
          Si vous décidez de vous abonner à des services ou à des fonctions du site qui nécessitent un abonnement, vous acceptez de fournir des renseignements exacts et à jour à votre sujet comme
          l'exige le processus d'inscription ou d'abonnement pertinent, et de vous assurer de leur exactitude en effectuant les mises à jour nécessaires dès que possible. Vous acceptez d'assurer la
          confidentialité de tous les mots de passe ou autres identificateurs de compte que vous aurez choisis ou qui vous seront attribués au moment d'une inscription ou d'un abonnement sur Pacifique
          habitat ou ses partenaires et d'assumer la responsabilité à l'égard de toutes les activités reliées à l'utilisation de ces mots de passe ou de ces comptes. De plus, vous acceptez de nous
          prévenir de toute utilisation non autorisée de votre mot de passe ou de votre compte de membre. Nous ne pouvons aucunement être tenus responsables, directement ou indirectement, des pertes
          ou dommages de quelque nature que ce soit découlant du défaut de vous conformer à la présente disposition ou liés à un tel défaut.
        `}</p>
        <p>
          {`
          Vous reconnaissez que nous pouvons, à notre seule et absolue discrétion, et ce, sans préavis, suspendre, annuler ou mettre fin à votre compte, à votre utilisation ou à votre accès au site ou
          à un de ses services, et retirer et supprimer tout renseignement ou contenu se rapportant au site ou à un des services offerts (et mettre fin à l'utilisation que vous en faites), pour
          quelque motif que ce soit, y compris si nous croyons que vous avez violé les présentes conditions. En outre, vous reconnaissez que nous ne serons aucunement responsables envers vous ou
          envers quiconque à la suite d'une telle suspension, annulation ou fin. Si vous êtes insatisfait de Pacifique habitat ou d'un de ses services, ou d'une des présentes conditions, des règles,
          des politiques, des lignes directrices ou de nos pratiques relativement à l'exploitation de Pacifique habitat ou d'un de ses services, votre seul recours consiste à cesser d'utiliser le site
          ou le service en question.`}
        </p>
        <h4>
          <u>
            <strong>11. CONFIDENTIALITÉ</strong>
          </u>
        </h4>
        <p>{`
          Les communications via Internet sont sujettes à interception, perte ou altération, par conséquent, vous reconnaissez que les renseignements ou éléments que vous fournissez par voie
          électronique du fait que vous accédez à ce site ou en faites usage ne sont ni confidentiels ni exclusifs, sauf dans la mesure requise par les lois applicables et que les communications par
          courrier électronique non protégées sur Internet peuvent être interceptées, altérées ou se perdre.
        `}</p>
        <p>
          {"Pour plus d'information"}, veuillez consulter notre <em>Politique de confidentialité</em>, disponible sur notre site.
        </p>
        <h4>
          <u>12. LIMITATION DE LA RESPONSABILITÉ</u>
        </h4>
        <p>
          {`
          Nous ne sommes en aucun cas responsables des dommages que vous pourriez subir découlant de votre utilisation du site, dans la pleine mesure de la loi. La responsabilité maximale de Pacifique
          habitat découlant de votre utilisation du site est limitée à cent (100) dollars canadiens ou le montant payé à Pacifique habitat dans les six derniers mois, en retenant le montant le plus
          élevé. Ceci est valable pour toute réclamation incluant, sans s'y limiter, la perte de profits ou de revenus, les dommages indirects ou punitifs, la négligence, la responsabilité civile ou
          la fraude de toute sorte.`}
        </p>
        <h4>
          <u>13. QUESTIONS ET INFORMATIONS ADDITIONNELLES</u>
        </h4>
        <p>
          Pour toute question ou pour obtenir de plus amples renseignements, nous vous prions de communiquer avec nous à {"l'adresse"} suivante:
          <span id="span_id_adresse_courriel_contact">pacifique.habitat@mail.pf</span>
        </p>
      </div>
    </div>
  )
}

export default Conditions
