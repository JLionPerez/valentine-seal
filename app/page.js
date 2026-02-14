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
    <div className="flex flex-col justify-center gap-10 h-dvh text-white p-10 bg-[url(/heart-background1.png)] bg-center bg-repeat">
      <div className="flex justify-center items-center font-comfortaa text-2xl text-center">
        <p className={`${isText ? ' animate-[fade-in_1s_ease-in] ' : ' opacity-0 '}`}>I love you seal-ots! ❤️</p>
      </div>
      <div className="flex justify-center items-center">
        <div onClick={handleClick} onAnimationEnd={handleAnimateEnd} className={`${isBounce ? ' animate-[bouncing_0.5s_ease-in] ' : ''}`}>
          <img className="drop-shadow-lg h-auto w-100"src={image} alt="seal"/>
        </div>
      </div>
    </div>
  )
}