import { WithContext, HomeAndConstructionBusiness, PostalAddress, OpeningHoursSpecification, AggregateRating } from "schema-dts"

const siteurl = "https://pacifique-habitat.vercel.app"
const sitename = "Pacifique Habitat"
const telephone = "+68940832220"

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
  opens: "06:30",
  closes: "15:30",
}

const aggregateRating: AggregateRating = {
  "@type": "AggregateRating",
  ratingValue: 4.5,
  bestRating: 5,
  ratingCount: 1,
}

const organization: WithContext<HomeAndConstructionBusiness> = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  url: siteurl,
  logo: `${siteurl}/assets/logo-112.png`,
  name: sitename,
  image: `${siteurl}/assets/logo-1080.png`,
  address,
  aggregateRating,
  priceRange: "€€€",
  telephone,
  hasMap: "https://maps.google.com/maps?cid=327015242727683984",
  sameAs: "https://www.facebook.com/Pacifique-Habitat-294401990731485/",
  openingHoursSpecification: [
    {
      ...openingHoursSpecification,
    },
    {
      ...openingHoursSpecification,
      dayOfWeek: "Friday",
      closes: "12:00",
    },
  ],
}

export default organization
export { openingHoursSpecification, sitename, siteurl, address, aggregateRating, telephone }
