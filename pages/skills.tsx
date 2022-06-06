import { NextPage } from "next";
import Image from "next/image"
import Link from "next/link"
import Head from "next/head";
import { Navbar } from "../components/Navbar";

import {FaReact, FaNodeJs} from "react-icons/fa"
import {SiTailwindcss, SiFastify} from "react-icons/si"
import {GrMysql} from "react-icons/gr"

const Skills: NextPage = () => {
    return (
      <div className="relative bg-slate-900 min-h-screen flex items-center justify-center overflow-hidden">
        <Head>
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
        <title>Compétences - Benoit Garcia Developpeur front-end junior</title>
      </Head>
        <Navbar />
        <section className="flex flex-col items-center text-slate-100 " data-aos="fade-up" data-aos-duration='1000'>
          <h1 className="p-2 w-8/12 text-center font-bold text-4xl uppercase">Mes compétences</h1>
          <p className="w-8/12 text-center mt-2 text-sm">
            Quelles sont les technologies que j&apos;utilise le plus ?
          </p>
          <div className="mt-6 w-8 h-0.5 bg-slate-400"></div>
          <main className="mt-16 w-9/12 flex flex-col space-y-4 md:w-8/12 md:space-x-10 items-center">
            <article className="flex items-center" data-aos="fade-left" data-aos-duration='1000'>
                <FaReact className="w-1/3 text-6xl text-cyan-500"/>
                <p className="w-2/3 text-xs">
                <span className="font-medium text-cyan-500">React.js</span> est une librairie JavaScript Open Source qui vise à simplifier le développement d&apos;interfaces visuelles. Développé par Facebook et commercialisé en 2013, il gère certaines des applications web les plus utilisées, notamment Facebook, Instagram ou encore Netflix.
                </p>
            </article>
            <article className="flex items-center" data-aos="fade-right" data-aos-duration='1000'>
                <p className="w-2/3 text-xs">
                <span className="font-medium text-cyan-500">tailwind.css</span> est un framework CSS &apos;Utility-First&apos; permettant aux développeurs de personnaliser totalement et simplement le design de leur site ou application web. Il est possible de créer un design interface au sein même du fichier HTML.
                </p>
                <SiTailwindcss className="w-1/3 text-6xl text-sky-600"/>
            </article>
            <article className="flex items-center" data-aos="fade-left" data-aos-duration='1000'>
                <FaNodeJs className="w-1/3 text-6xl text-emerald-500"/>
                <p className="w-2/3 text-xs">
                <span className="font-medium text-emerald-500">Node.js</span> est une plateforme construite sur le moteur JavaScript V8 de Chrome qui permet de développer des applications en utilisant du JavaScript. On l&apos;utilisera nottament pour construire le back-end de notre application ou notre site web.
                </p>
            </article>
            <article className="flex items-center" data-aos="fade-right" data-aos-duration='1000'>
                <p className="w-2/3 text-xs">
                <span className="font-medium text-white">fastify</span> est un framework axé la meilleure expérience de développement avec le moins de surcharge et une architecture de plug-in puissante, inspirée de Hapi et Express. Il s&apos;agit de l&apos;un des frameworks Node.js les plus rapide.
                </p>
                <SiFastify className="w-1/3 text-6xl text-white"/>
            </article>
            <article className="flex items-center" data-aos="fade-left" data-aos-duration='1000'>
                <GrMysql className="w-1/3 text-6xl text-orange-500"/>
                <p className="w-2/3 text-xs">
                <span className="font-medium text-orange-500">SQL</span> est un langage informatique normalisé servant à exploiter des bases de données relationnelles. La partie langage de manipulation des données de SQL permet de rechercher, d&apos;ajouter, de modifier ou de supprimer des données dans les bases de données relationnelles.
                </p>
            </article>
            <article className="w-full flex flex-col">
                <h2 className="font-medium">Mes compétences en vracs</h2>
                <ul className="mt-1 pb-10 flex flex-wrap justify-center space-x-2 text-xs" data-aos="fade-up" data-aos-duration='1000' data-aos-delay="500">
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="600">JavaScript</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="700">React.js</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="800">Redux</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="900">Next.js</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="1000">TypeScript</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="1100">tailwind.css</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="1200">Node.js</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="1300">Express</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="1400">fastify</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="1500">Sequelize</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="1600">Mongoose</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="1700">Prisma ORM</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="1800">SQL / MySQL</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="1900">MongoDB</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="2000">VS Code</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="21000">Git</li>
                    <li className="p-1 bg-slate-800 rounded-lg mt-2" data-aos="flip-up" data-aos-duration='1000' data-aos-delay="2200">Photoshop / After-effect</li>
                </ul>
            </article>
          </main>
        </section>
      </div>
    );
  };
  
  export default Skills;