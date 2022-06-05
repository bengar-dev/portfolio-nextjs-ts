import { NextPage } from "next";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"
import Head from "next/head"
import { Navbar } from "../components/Navbar";

import {FaCloudDownloadAlt} from "react-icons/fa"
import ProfilPic from "../public/assets/Photo_profil.jpeg";

const About: NextPage = () => {

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
        <title>A-propos - Benoit Garcia Developpeur front-end junior</title>
      </Head>
      <Navbar />
      <section className="flex flex-col items-center text-slate-100 " data-aos="fade-up" data-aos-duration='1000'>
        <h1 className="p-2 w-8/12 text-center font-bold text-4xl uppercase">À propos</h1>
        <p className="w-8/12 text-center mt-2 text-sm">
          Qui suis-je ? Mon parcours en quelques mots et dates.
        </p>
        <div className="mt-6 w-8 h-0.5 bg-slate-400"></div>
        <div className="mt-16 w-9/12 flex flex-col md:flex-row md:w-8/12 md:space-x-10 items-center">
          <div className="flex rounded-full overflow-hidden border-2 border-white shadow-lg w-32 h-32">
            <Image src={ProfilPic} 
            width="200" height="200"
            alt="Photo Benoit Garcia" objectFit="cover" />
          </div>
          <main className="mt-4 p-4 rounded-lg font-light text-sm shadow-lg w-11/12 flex flex-col bg-slate-800">
            <p className="first-letter:text-cyan-500 first-letter:font-medium">
                Développeur passionné et autodidacte depuis mon plus jeune âge, j'ai décidé d'entamer ma reconversion professionnelle en aout 2021 après-avoir passé plus de 10 ans dans le secteur du bâtiment.<br /><br />
                J'ai donc suivi une formation chez <span className="text-purple-400 font-medium">OpenClassrooms</span> où j'ai obtenu mon diplôme de Développeur Web en mars 2022. Formation qui m'a permis de consolider mes connaissances, mais aussi d'apprendre de nouvelles technologies. J'ai pu par exemple découvrir le côté back avec Node.js mais aussi React.js côté front.<br /><br />
                Aujourd'hui, j'ai eu l'opportunité de poursuivre mon apprentissage en alternance en suivant une nouvelle formation de <span className="font-medium">Concepteur Développeur d'applications</span> à l'AFPA de Montpellier et du coup faire mes premiers pas dans le monde professionnel du développement avec <span className="font-medium text-sky-400">Kaliop</span>, une entreprise montpelliéraine spécialisée dans la digitalisation d'entreprise.
            </p>
            <Link href="https://benoitgarcia.fr/ftp/CV_BENOIT.pdf">
                <a target="_blank" className="flex items-center mt-2 mr-0 ml-auto transition-all duration-200 bg-slate-900 hover:bg-cyan-500 hover:text-slate-900 p-2 font-medium w-max rounded-xl"><FaCloudDownloadAlt className="mr-2"/>Télécharger mon CV</a>
            </Link>
          </main>
        </div>
      </section>
    </div>
  );
};

export default About;
