"use client";
import React, { useState } from 'react';
import { Comfortaa } from 'next/font/google';

const comfortaaFont = Comfortaa ({
  subsets: ["latin"],
  weight: "400"
})

export default function Home() {
  const image1 = "/test-imgs/seal1.png"
  const image2 = "/test-imgs/seal2.png"

  const [image, setImage] = useState(image1)
  const [text, setText] = useState("")

  function handleClick() {
    image == image1 ? setImage(image2) : setImage(image1)
    image == image1 ? setText("I love you seal-ots!") : setText("")
  }

  return (
    <div className="grid grid-rows-3 h-dvh bg-rose-400 text-white p-5" onClick={handleClick}>
      <p className="flex justify-center items-center font-comfortaa">{text}</p>
      <div className="flex justify-center items-center">
        <img className="h-50 w-100"src={image} alt="seal"/>
      </div>
    </div>
  )
}