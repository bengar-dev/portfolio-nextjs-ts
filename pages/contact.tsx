import { NextPage } from "next";
import Head from "next/head";

import { Navbar } from "../components/Navbar";

import {GrSend} from "react-icons/gr"

const Contact: NextPage = () => {
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
      <section
        className="flex flex-col items-center text-slate-100 w-9/12 lg:w-6/12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1 className="p-2 w-8/12 text-center font-bold text-4xl uppercase">
          Me contacter
        </h1>
        <p className="w-8/12 text-center mt-2 text-sm">
          Un projet? Une offre d&apos;emploi ? Dites-moi tout !
        </p>
        <div className="mt-6 w-8 h-0.5 bg-slate-400"></div>
        <div className="mt-16 w-11/12 flex flex-col md:flex-row md:w-8/12 md:space-x-10 items-center">
            <form className="w-full flex flex-col">
                <label htmlFor="email" className="font-mono uppercase">Email</label>
                <input 
                className="transition-all duration-200 p-2 outline-none text-slate-900 focus:bg-zinc-100"
                type="email" name="email" id="email" />
                <label htmlFor="email" className="mt-4 font-mono uppercase">Sujet</label>
                <input 
                className="transition-all duration-200 p-2 outline-none text-slate-900 focus:bg-zinc-100"
                type="text" name="subject" id="subject" />
                <label htmlFor="msg" className="mt-4 font-mono uppercase">Message</label>
                <textarea id="msg" className="transition-all duration-200 p-2 resize-none h-32 outline-none text-slate-900 focus:bg-zinc-100"></textarea>
                <button 
                className="transition-all duration-200 mt-2 bg-emerald-400 flex justify-center items-center p-2 border-2 border-emerald-600 hover:bg-emerald-600"
                type="submit"><GrSend className="text-xl"/></button>
            </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
