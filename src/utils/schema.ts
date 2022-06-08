import { WithContext, HomeAndConstructionBusiness, PostalAddress, OpeningHoursSpecification, AggregateRating } from "schema-dts"

const siteurl = "https://pacifique-habitat.vercel.app"
const sitename = "Pacifique Habitat"
const telephone = "+68940832220"
const hasMap = "https://maps.google.com/maps?cid=327015242727683984"
const sameAs = "https://www.facebook.com/Pacifique-Habitat-294401990731485/"
const description = "Pacifique Habitat est une entreprise générale de construction et de rénovation de l'habitat, en allant du gros œuvre aux finitions en passant par le second œuvre."

const address: PostalAddress = {
  "@type": "PostalAddress",
  addressLocality: "Puna'auia",
  postalCode: "98718",
  streetAddress: "Puna'auia, Polynésie française",
  addressCountry: "PF",
  addressRegion: "Puna'auia",
}

const openingHoursSpecification: OpeningHoursSpecification = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
  opens: "06:30:00",
  closes: "15:30:00",
}

const aggregateRating: AggregateRating = {
  "@type": "AggregateRating",
  ratingValue: 4,
  bestRating: 5,
  ratingCount: 3,
}

const organization: WithContext<HomeAndConstructionBusiness> = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  address,
  aggregateRating,
  telephone,
  hasMap,
  sameAs,
  description,
  url: siteurl,
  logo: `${siteurl}/assets/logo-112.png`,
  name: sitename,
  image: [
    `${siteurl}/assets/images/index.png`,
    `${siteurl}/assets/images/histoire.png`,
    `${siteurl}/assets/images/resines/1.png`,
    `${siteurl}/assets/images/resines/2.png`,
    `${siteurl}/assets/images/resines/3.png`,
  ],
  priceRange: "€€€",
  openingHoursSpecification: [
    {
      ...openingHoursSpecification,
    },
    {
      ...openingHoursSpecification,
      dayOfWeek: "Friday",
      closes: "12:00:00",
    },
  ],
}

export default organization
export { openingHoursSpecification, sitename, siteurl, address, aggregateRating, telephone, hasMap, sameAs, description }
