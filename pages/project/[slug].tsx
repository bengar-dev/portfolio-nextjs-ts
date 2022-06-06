import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

import LightBox from "../../components/Lightbox";
import { Navbar } from "../../components/Navbar";

import { FaProjectDiagram, FaGithub } from "react-icons/fa";
import { ImImages } from "react-icons/im";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { GoBrowser } from "react-icons/go";

const Details: NextPage = () => {
  type projectProps = {
    title: string;
    content: string;
    fonctionalities: string[];
    array: string[];
    images: string[];
    github: string;
    live: string;
  };

  const router = useRouter();
  const [project, setProject] = useState<projectProps>({
    title: "",
    content: "",
    fonctionalities: [],
    array: [],
    images: [],
    github: "",
    live: "",
  });
  const [toggle, setToggle] = useState(false)
  const [indexImg, setIndexImg] = useState(0)

  const handleLightBox = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setIndexImg(index)
    setTimeout(() => {
      setToggle(!toggle)
    }, 250)
  }

  useEffect(() => {
    if (router.query.slug === "groupomania") {
      if (project.title === "") {
        setProject({
          title: "Groupomania",
          content: `Projet final lors de ma formation chez OpenClassrooms. Le but était de créer un réseau social pour une entreprise fictive Groupomania. On avait quelques obligations pour les technologies à savoir : Utiliser un framework JavaScript côté front-end, mon choix c'est porté sur React. Puis côté back-end l'utilisation de base de donnée SQL était obligatoire.`,
          fonctionalities: [
            "Création de compte utilisateur",
            "Modification de son profil",
            "Supression du compte",
            "Ajout de nouvelle publication",
            "Editer/Supprimer ses propres publications",
            "Ajout de commentaire",
            "Editer/Supprimer ses propres commentaires",
            "Rôle administrateur",
          ],
          array: [
            "React.js",
            "Redux",
            "tailwind.css",
            "Node.js",
            "Express",
            "Sequelize",
            "MySQL",
          ],
          images: ["groupo_capt_1.png", "groupo_capt_2.png"],
          github: "https://github.com/benysserp/Groupo_refacto",
          live: "https://www.youtube.com/watch?v=NHQ1HCI_xtI",
        });
      }
    } else if (router.query.slug === "shopy") {
      if (project.title === "") {
        setProject({
          title: "Shopy app",
          content: `Projet perso qui met en pratique des fonctionalitées d'un site e-commerce. La fonctionalité de paiement est "fake". Le but était ici de s'amuser avec le localStorage pour tout ce qui est gestion des produits dans un panier.`,
          fonctionalities: [
            "Affichage des produits depuis un fichier data",
            "Ajout d'un produit dans son panier",
            "Vérification si le produit est en stock",
            "Modification des quantités d'un produit de notre panier",
            "Supprimer un produit de notre panier",
            "Calcul du prix de notre panier total en temps réel",
            "Validation de notre panier",
            "Fausse validation de paiement",
          ],
          array: ["React.js", "tailwind.css"],
          images: ["shopy_capt_1.png", "shopy_capt_2.png", "shopy_capt_3.png"],
          github: "https://github.com/benysserp/shopy-app",
          live: "https://shopy-app-react.netlify.app/",
        });
      }
    } else if (router.query.slug === "usersapp") {
      if (project.title === "") {
        setProject({
          title: "Users app",
          content: `Projet perso fullstack qui ma permi de mettre en pratique fastify côté back-end et de jouer avec les hooks de React.js.`,
          fonctionalities: [
            "Affichage des utilisateurs depuis un appel API",
            "Ajout d'un utilisateur",
            "Modification des informations de l'utilisateur",
            "Suppression d'un utilisateur",
            "Trier la liste des utilisateurs par nom de famille",
          ],
          array: ["React.js", "tailwind.css", "Node.js", "fastify"],
          images: ["users_capt_1.png", "users_capt_2.png"],
          github: "https://github.com/benysserp/users-app",
          live: "",
        });
      }
    } else if (router.query.slug !== "groupomania" || "shopy" || "usersapp") {
      router.push("/");
    }
  });

  return (
    <div className="relative bg-slate-900 min-h-screen flex items-center justify-center overflow-hidden">
      {toggle && <LightBox indexImg={indexImg} imageArray={project.images} func={handleLightBox}/>}
      <Link href="/projects">
        <a className="flex uppercase text-white hover:text-cyan-500 font-mono font-bold absolute z-40 top-6 right-4">
          <MdOutlineArrowBackIosNew className="text-xl text-white mr-2" />{" "}
          Retour
        </a>
      </Link>
      <Navbar />
      {Object.keys(project).length > 0 && (
        <section
          className="flex w-full md:w-10/12 flex-col items-center text-slate-100 "
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="p-2 font-bold text-4xl uppercase">{project.title}</h1>
          <ul className="w-9/12 flex justify-center flex-wrap space-x-2 mt-2 text-sm">
            {project.array.map((el: string, index: number) => (
              <li key={el+index} className="mt-2 bg-sky-800 p-1 rounded text-xs">
                {el}
              </li>
            ))}
          </ul>
          <Head>
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="theme-color" content="#000000" />
            <meta
              name="description"
              content="Benoit Garcia, développeur front-end junior React.js sur Montpellier"
            />
            <title>{project.title} - Benoit Garcia Developpeur front-end junior</title>
          </Head>
          <div className="mt-6 w-8 h-0.5 bg-slate-400"></div>
          {project.github !== "" && (
            <div className="flex space-x-2">
            <Link href={project.github}>
              <a
                target="_blank"
                className="transition-all duration-200 flex items-center mt-2 bg-stone-400 p-1 text-sm rounded text-stone-800 hover:scale-105"
              >
                <FaGithub className="mr-1 text-lg" /> GitHub
              </a>
            </Link>
            {project.live !== "" && (
              <Link href={project.live}>
                <a
                  target="_blank"
                  className="transition-all duration-200 flex items-center mt-2 bg-cyan-200 p-1 text-sm rounded text-cyan-800 hover:scale-105"
                >
                  <GoBrowser className="mr-1 text-lg" /> Live version
                </a>
              </Link>
            )}
          </div>
          )}
          <main className="mt-8 w-9/12 flex flex-col md:w-6/12 md:space-x-10 items-center">
            <p className="text-sm">{project.content}</p>
            <h2 className="flex items-center mt-6 mb-2 ml-0 w-full mr-auto font-bold text-lg">
              <FaProjectDiagram className="mr-2 text-cyan-500" />{" "}
              Fonctionalitées
            </h2>
            <ul className="w-full flex flex-col space-y-1 text-sm">
              {project.fonctionalities.map((el: string, index: number) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
            <h2 className="flex items-center mt-6 mb-2 ml-0 mr-auto font-bold text-lg w-full">
              <ImImages className="mr-2 text-cyan-500" /> Aperçu
            </h2>
            <ul className="flex space-x-4">
              {project.images.map((el: string, index: number) => (
                <li key={el+index} className="border rounded-lg overflow-hidden">
                  <button
                  onClick={(e) => handleLightBox(e, index)}
                  >
                    <Image
                      src={`http://benoitgar-portfolio.netlify.app/assets/${el}`}
                      width="300"
                      height="300"
                      objectFit="cover"
                      alt={el}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </main>
        </section>
      )}
    </div>
  );
};

export default Details;
