"use client";
import React, { useState } from 'react';

export default function Home() {
  const image1 = "/test-imgs/seal1.png"
  const image2 = "/test-imgs/seal2.png"

  const [image, setImage] = useState(image1)
  
  function handleClick() {
    image == image1 ? setImage(image2) : setImage(image1)
  }

  return (
    <div className="flex items-center h-dvh bg-[url(/hearts.svg)] bg-rose-400 bg-center bg-repeat-round">

      <div onClick={handleClick}>
        <img src={image} hidden alt="seal"></img>
      </div>
    </div>
  )
}