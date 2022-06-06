import { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react"

import { Navbar } from "../components/Navbar";

import {GrSend} from "react-icons/gr"

import{ init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';
import AlertMsg from "../components/AlertMsg";
init("user_tFqdGtNDOu1Hg2tj18rvo");

type formProps = {
  email: string,
  subject: string,
  msg: string
}

const Contact: NextPage = () => {

  const [form, setForm] = useState<formProps>({
    email: "",
    subject: "",
    msg: ""
  })
  const [msgAlert, setMsgAlert] = useState("")

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(e.target.id === "email") setForm({
      ...form,
      email: e.target.value
    })
    else if(e.target.id === "subject") setForm({
      ...form,
      subject: e.target.value
    })
    else if(e.target.id === "msg") setForm({
      ...form,
      msg: e.target.value
    })
  }

  const validEmail = (value:string) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  }

  const sendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if(form.email === "" || form.subject === "" || form.msg === "") setMsgAlert("Veuillez remplir tous les champs")
    else {
      if(!validEmail(form.email)) setMsgAlert("Veuillez vérifier le format de l'email")
      else {
        sendFeedback('template_esdl5ni', {
          email: form.email,
          subject: form.subject,
          msg: form.msg
        })
      }
    }
  }

  const sendFeedback = (templateId: string, variables: any) => {
    emailjs
        .send("service_sifndja", templateId, variables)
        .then((res) => {
            setForm({
              email: "",
              subject: "",
              msg: ""
            })
            setMsgAlert('Votre message a bien été envoyé !')
            setTimeout(() => {
              setMsgAlert("")
            }, 2000)
        })
        .catch(
            (err) => {
            console.log('erreur')
            })
}

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
        <title>A-propos - Benoit Garcia Developpeur front-end junior</title>
      </Head>
      <Navbar />
      <section
        className="flex flex-col items-center text-slate-100 w-9/12 lg:w-6/12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {msgAlert !== "" && <AlertMsg message={msgAlert}/>}
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
                value={form.email}
                onChange={(e) => handleInputs(e)}
                className="transition-all duration-200 p-2 outline-none text-slate-900 focus:bg-zinc-100"
                type="email" name="email" id="email" />
                <label htmlFor="subject" className="mt-4 font-mono uppercase">Sujet</label>
                <input 
                value={form.subject}
                onChange={(e) => handleInputs(e)}
                className="transition-all duration-200 p-2 outline-none text-slate-900 focus:bg-zinc-100"
                type="text" name="subject" id="subject" />
                <label htmlFor="msg" className="mt-4 font-mono uppercase">Message</label>
                <textarea 
                value={form.msg}
                onChange={(e) => handleInputs(e)}
                id="msg" className="transition-all duration-200 p-2 resize-none h-32 outline-none text-slate-900 focus:bg-zinc-100"></textarea>
                <button 
                onClick={(e) => sendEmail(e)}
                aria-label="Envoyer"
                className="transition-all duration-200 mt-2 bg-emerald-400 flex justify-center items-center p-2 border-2 border-emerald-600 hover:bg-emerald-600"
                type="submit"><GrSend className="text-xl"/></button>
            </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
