import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Navbar } from '../components/Navbar'

import LogoWhite from "../public/assets/logo_white.png"

import {FaTwitter, FaTwitch, FaLinkedin, FaGithub} from "react-icons/fa"
import {MdOutlineAlternateEmail} from "react-icons/md"

const Home: NextPage = () => {
  return (
    <div className="relative bg-slate-900 min-h-screen flex items-center justify-center overflow-hidden">
      <Head>
        <html lang="fr" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Benoit Garcia, développeur front-end junior React.js sur Montpellier"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.benoitgarcia.dev/" />
        <meta property="og:title" content="Benoit Garcia - Développeur front-end junior React.js" />
        <meta property="og:description" content="Benoit Garcia, développeur front-end junior React.js sur Montpellier" />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.benoitgarcia.dev/" />
        <meta property="twitter:title" content="Benoit Garcia - Développeur front-end junior React.js" />
        <meta property="twitter:description" content="Benoit Garcia, développeur front-end junior React.js sur Montpellier" />
        <meta property="twitter:image" content=""></meta>
        <title>Benoit Garcia - Développeur front-end junior React.js</title>
      </Head>
      <Navbar />
      <div className="w-8/12 flex flex-col items-center" data-aos="fade-up" data-aos-duration='1000'>
        <div className="ml-auto mr-auto w-28">
          <Image src={LogoWhite} 
          alt="Benoit Garcia Logo Blanc"
          width="420"
          height="260"
          />
        </div>
        <h1 className="font-medium text-4xl text-cyan-400 tracking-wider">Benoit Garcia</h1>
        <p className="font-light text-sm text-slate-100 tracking-widest">Développeur front-end Junior</p>
        <ul className="mt-6 flex space-x-2">
          <li className="flex items-center">
            <Link href="https://github.com/benysserp">
              <a aria-label="GitHub" target="_blank" className="transition-all duration-200 bg-slate-200 text-slate-900 hover:bg-stone-600 hover:text-white p-2 rounded-full"><FaGithub /></a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="https://twitter.com/PressyDev">
              <a aria-label="Twitter" target="_blank" className="transition-all duration-200 bg-slate-200 text-slate-900 hover:bg-cyan-500 hover:text-white p-2 rounded-full"><FaTwitter /></a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="https://www.twitch.tv/pressycw">
              <a aria-label="Twitch" target="_blank" className="transition-all duration-200 bg-slate-200 text-slate-900 hover:bg-purple-500 hover:text-white p-2 rounded-full"><FaTwitch /></a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="https://www.linkedin.com/in/benoit-gar/">
              <a aria-label="Linkedin" target="_blank" className="transition-all duration-200 bg-slate-200 text-slate-900 hover:bg-sky-600 hover:text-white p-2 rounded-full"><FaLinkedin /></a>
            </Link>
          </li>
          <li className="flex items-center">
            <Link href="mailto:benoitgar.pro@gmail.com">
              <a aria-label="Email" target="_blank" className="transition-all duration-200 bg-slate-200 text-slate-900 hover:bg-rose-500 hover:text-white p-2 rounded-full"><MdOutlineAlternateEmail /></a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
