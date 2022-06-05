import Image from "next/image"

const Footer = () => {
  return (
    <footer>
      {new Array(15).fill(0).map((_, k) => (
        <div key={k}>
          <a href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer">
            Powered by{" "}
            <span>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </div>
      ))}
    </footer>
  )
}

export default Footer
