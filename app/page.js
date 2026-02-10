"use client";
import React, { useState } from 'react';

export default function Home() {
  const image1 = "/test-imgs/seal1.png"
  const image2 = "/test-imgs/seal2.png"

  const [image, setImage] = useState(image1)
  const [text, setText] = useState("")

  function handleClick() {
    image == image1 ? setImage(image2) : setImage(image1)
    image == image2 ? setText("I love you seal-ots!") : setText("")
  }

  return (
    
    <div className="flex items-center justify-center h-dvh bg-rose-400 text-white">
      <p>{text}</p>
      <div onClick={handleClick}>
        <img src={image} alt="seal"/>
      </div>
    </div>
  )
}