"use client";
import React, { useState } from 'react';

export default function Home() {
  const image = "seal_sleep.png"
  // const image2 = "/test-imgs/seal2.png"
  // const [image, setImage] = useState(image1)
  // const text = useRef(null);
  // const [textOp, setTextOp] = useState(0)
  // const text = document.getElementById("text");
  const [text, setText] = useState("")


  function handleClick() {
    // image == image1 ? setImage(image2) : setImage(image1)
    // image == image1 ? setTextOp(0.5) : setTextOp(0)
    // if (text.classList.contains('opacity-0')) {
    //   text.classList.remove('opacity-0');
    //   text.classList.add('opacity-1');
    // } else {
    //   text.classList.remove('opacity-1');
    //   text.classList.add('opacity-0');
    // }
    text == "" ? setText("I love you seal-ots!") : setText("")
    // if (text.current.style.opacity == 0) {
    //   text.current.style.opacity = 1
    // } else {
    //   text.current.style.opacity = 0
    // }
    // text.current = "opacity-100"
  }

  return (
    <div className="grid grid-rows-3 h-dvh bg-rose-400 text-white p-10 " onClick={handleClick}>
      <p className="flex justify-center items-center font-comfortaa text-2xl">{text}</p>
      <div className="flex justify-center items-center">
        <img className="h-auto w-100 transition duration-150"src={image} alt="seal"/>
      </div>
    </div>
  )
}