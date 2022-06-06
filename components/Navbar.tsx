import { NextComponentType } from "next";
import React from "react";
import Link from "next/link";

import "../styles/Navbar.module.css";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { FaUserAstronaut, FaReact } from "react-icons/fa";
import { IoIosImages } from "react-icons/io";
import { BsMailbox2 } from "react-icons/bs";

export const Navbar: NextComponentType = () => {
  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const navtarget: any = document.querySelector("nav");
    if (navtarget.classList.contains("-left-28")) {
      navtarget.classList.remove("-left-28");
      navtarget.classList.add("left-0");
      navtarget.classList.add("bg-slate-800");
    } else {
      navtarget.classList.remove("bg-slate-800");
      navtarget.classList.remove("left-0");
      navtarget.classList.add("-left-28");
    }
  };

  return (
    <nav className="transition-all duration-500 absolute top-0 z-10 -left-28 min-h-screen w-40 flex flex-col p-2">
      <button
        aria-label="Burger menu"
        onClick={(e) => toggleMenu(e)}
        className="mr-0 ml-auto text-4xl text-cyan-500 hover:text-rose-500"
      >
        <GiHamburgerMenu />
      </button>
      <ul className="mt-10 flex flex-col space-y-10">
        <li className="cursor-pointer transition-all relative flex items-center p-1 text-white hover:bg-slate-700 hover:text-cyan-500">
          <Link href="/">
            <a className="flex">
              <span className="font-medium text-sm uppercase font-mono">
                Accueil
              </span>{" "}
              <AiOutlineHome className="absolute right-2 text-lg" />
            </a>
          </Link>
        </li>
        <li className="cursor-pointer transition-all relative flex items-center p-1 text-white hover:bg-slate-700 hover:text-cyan-500">
          <Link href="/about">
            <a className="flex">
              <span className="font-medium text-sm uppercase font-mono">
                A-propos
              </span>{" "}
              <FaUserAstronaut className="absolute right-2 text-lg" />
            </a>
          </Link>
        </li>
        <li className="cursor-pointer transition-all relative flex items-center p-1 text-white hover:bg-slate-700 hover:text-cyan-500">
          <Link href="/skills">
            <a className="flex">
              <span className="font-medium text-sm uppercase font-mono">
                Compétences
              </span>{" "}
              <FaReact className="absolute right-2 text-lg" />
            </a>
          </Link>
        </li>
        <li className="cursor-pointer transition-all relative flex items-center p-1 text-white hover:bg-slate-700 hover:text-cyan-500">
          <Link href="/projects">
            <a className="flex">
              <span className="font-medium text-sm uppercase font-mono">
                Projets
              </span>{" "}
              <IoIosImages className="absolute right-2 text-lg" />
            </a>
          </Link>
        </li>
        <li className="cursor-pointer transition-all relative flex items-center p-1 text-white hover:bg-slate-700 hover:text-cyan-500">
          <Link href="/contact">
            <a className="flex">
              <span className="font-medium text-sm uppercase font-mono">
                Contact
              </span>{" "}
              <BsMailbox2 className="absolute right-2 text-lg" />
            </a>
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-32 left-8 w-max -rotate-90">
        <p className="text-cyan-500 text-xs font-mono uppercase">Copyright 2022 - Benoit Garcia</p>
      </div>

    </nav>
  );
};
