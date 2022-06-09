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
        <center>
          <h1>{title.toUpperCase()}</h1>
          <p>
            <i>conditions standard</i>
          </p>
        </center>
      </section>
    </main>
  )
}

export default Conditions
