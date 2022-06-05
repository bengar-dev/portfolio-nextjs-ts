import { NextComponentType } from "next";
import React, { useState } from "react";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from "react-icons/fa"

type LightBoxProps = {
  imageArray: string[];
  indexImg: number;
  func: any;
};

const LightBox = ({ func, indexImg, imageArray }: LightBoxProps) => {
  const [idx, setidx] = useState(indexImg);

  const handleNextImage = (e: React.MouseEvent<HTMLButtonElement>, direction: string) => {
    let newIndex = idx
    if(direction === "next") {
      if(newIndex === imageArray.length - 1) newIndex = 0
      else newIndex = idx + 1
      setidx(newIndex)
    }
    else if(direction === "previous") {
      if(newIndex === 0) newIndex = imageArray.length - 1
      else newIndex = idx - 1 
      setidx(newIndex)
    }
  }

  return (
    <div className="absolute z-50 top-0 w-full min-h-screen h-full bg-slate-800 flex flex-col items-center justify-center">
      <button
        onClick={(e) => func(e)}
        className="transition-all absolute z-40 right-10 top-10 text-3xl text-white hover:text-rose-500"
      >
        <IoIosCloseCircle />
      </button>
      <div className="p-2 flex space-x-2">
        <button 
        onClick={(e) => handleNextImage(e, "previous")}
        className="transition-all text-2xl text-cyan-400 hover:text-white"><FaArrowAltCircleLeft/></button>
        <button 
        onClick={(e) => handleNextImage(e, "next")}
        className="transition-all text-2xl text-cyan-400 hover:text-white"><FaArrowAltCircleRight /></button>
      </div>
      <div className="relative w-1/2 h-2/4">
        <Image
          src={`http://localhost:3001/assets/${imageArray[idx]}`}
          layout="fill"
          objectFit="contain"
          quality={100}
        />
      </div>
    </div>
  );
};

export default LightBox;
