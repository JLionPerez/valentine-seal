"use client";
import React, { useState } from 'react';

export default function Home() {
  const image = "seal_sleep.png"
  const [isText, setIsText] = useState(false)
  const [isBounce, setIsBounce] = useState(false);

  function handleClick() {
    if (!isBounce) {
      setIsBounce(true);
    }
    if (!isText) {
      setIsText(true);
    }
  }

  function handleAnimateEnd() {
    setIsBounce(false);
  }

  return (
    <div className="grid grid-rows-2 h-dvh text-white p-10 bg-[url(/heart-background1.png)] bg-center bg-repeat">
      <div className="flex justify-center items-center font-comfortaa text-3xl">
        <p className={`${isText ? ' animate-[fade-in_0.75s_ease-in] ' : ' opacity-0 '}`}>I love you seal-ots!</p>
      </div>
      <div className="flex justify-center items-center">
        <div onClick={handleClick} onAnimationEnd={handleAnimateEnd} className={`${isBounce ? ' animate-[bouncing_0.5s_ease-in] ' : ''}`}>
          <img className="h-auto w-100"src={image} alt="seal"/>
        </div>
      </div>
    </div>
  )
}