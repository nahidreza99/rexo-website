import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Layout({ children }){
  return (
    <div>
      <Head>
        <meta charSet="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Relay is an SMS subscription for personalized marketing. Build audiences,
          start conversations, and nurture loyalty without relying on social media or no-reply emails. Learn more about our packages, prices and privacy."/>
        <title>Rexo</title>
      </Head>
      <header>
        <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'>
          <div className="logo">
            <Link href='/'>
              <Image height={25} width={80} src="/logo.png" alt="rexo logo"/>
            </Link>
          </div>
          <div className="py-6">
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
            >
              Log in
            </a>
          </div>
        </nav>
      </header>
      <div className="container mx-auto max-w-7xl p-6 lg:px-8">
        { children }
      </div>
      <footer className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-8 lg:py-10 gs tv arf arn ckw cmp cmv dcv">
        <div className="lh cjd ckk"><p className="text-gray-600 avg avx awj axm">© 2023 Rexo, Inc. All rights reserved.</p></div>
        <div className="flex flex-row space-x-4">
          <Link href='#' className="axk bkr group">
            <FontAwesomeIcon icon={faFacebook} className="text-gray-500 nx rz w-6 h-6 p-0 group-hover:opacity-75"/>
          </Link>
          <Link href='#' className="axk bkr group">
            <FontAwesomeIcon icon={faInstagram} className="text-gray-500 nx rz w-6 h-6 p-0 group-hover:opacity-75"/>
          </Link>
          <Link href='#' className="axk bkr group">
            <FontAwesomeIcon icon={faTwitter} className="text-gray-500 nx rz w-6 h-6 p-0 group-hover:opacity-75"/>
          </Link>
          <Link href='#' className="axk bkr group">
            <FontAwesomeIcon icon={faGithub} className="text-gray-500 nx rz w-6 h-6 p-0 group-hover:opacity-75"/>
          </Link>
          <Link href='#' className="axk bkr group">
            <FontAwesomeIcon icon={faYoutube} className="text-gray-500 nx rz w-6 h-6 p-0 group-hover:opacity-75"/>
          </Link>
        </div>
      </footer>
    </div>
  )
}