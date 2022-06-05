import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { Navbar } from "../components/Navbar";

import {FaShoppingCart, FaUsers} from "react-icons/fa"
import {TbWorld} from "react-icons/tb"

const Projects: NextPage = () => {
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
        <title>Réalisations - Benoit Garcia Developpeur front-end junior</title>
      </Head>
      <Navbar />
      <section
        className="w-full flex flex-col items-center text-slate-100 "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="p-2 w-8/12 text-center font-bold text-4xl uppercase">Mes réalisations</h1>
        <p className="w-8/12 text-center mt-2 text-sm">
          Quelques projets pour apercevoir mes connaissances.
        </p>
        <div className="mt-6 w-8 h-0.5 bg-slate-400"></div>
        <div className="mt-16 w-9/12 flex flex-col space-y-4 md:w-6/12 lg:w-5/12 items-center">
            <Link href="/project/groupomania">
                <a className="transition-all w-full border hover:bg-slate-800 rounded-lg p-2">
                <article className="flex flex-col">
                    <h2 className="flex items-center font-bold"><TbWorld className="mr-2 text-xl text-rose-500"/> Groupomania</h2>
                    <p className="mt-4 text-xs">
                    Projet final lors de ma formation avec OpenClassrooms.<br />
                    Création d'un réseau social pour une entreprise.
                    </p>
                </article>
                </a>
            </Link>
            <Link href="/project/shopy">
                <a className="transition-all w-full border hover:bg-slate-800 rounded-lg p-2">
                <article className="flex flex-col">
                    <h2 className="flex items-center font-bold"><FaShoppingCart className="mr-2 text-xl text-orange-400"/> Shopy app</h2>
                    <p className="mt-4 text-xs">
                    E-commerce application, sans fonctionnalité de paiement. Application qui mets en pratique la gestion d'un panier utilisateur et le processus de validation de commande.
                    </p>
                </article>
                </a>
            </Link>
            <Link href="/project/usersapp">
                <a className="transition-all w-full border hover:bg-slate-800 rounded-lg p-2">
                <article className="flex flex-col">
                    <h2 className="flex items-center font-bold"><FaUsers className="mr-2 text-xl text-cyan-500"/> Users app</h2>
                    <p className="mt-4 text-xs">
                    Projet fullstack sans base de données de gestion d'utilisateurs/personnes. Ajout d'une personne, modification des informations et suppression de la personne. Possibilité de trier les personnes par leur nom de famille.
                    </p>
                </article>
                </a>
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
