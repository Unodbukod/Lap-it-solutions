"use client";

import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  const Clients = [
    { image: "/abreeza.svg" },
    { image: "/sanmig.svg" },
    { image: "/mosa.svg" },
    { image: "/sm.svg" },
    { image: "/mist.svg" },
    { image: "/potatocorner.svg" },
    { image: "/havainas.svg" },
    { image: "/turks.svg" },
  ];

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <div className="pb-10">
            <h1 className="font-extrabold text-5xl">
                OUR {''}
                <span className="bg-red-600 text-white p-1 px-3 md:p-1 md:px-4 rounded-md inline-block">
            CLIENTS
          </span>
            </h1>
            
        </div>
        <div className="pt-10">
      <InfiniteMovingCards items={Clients} direction="right" speed="normal" />
      </div>
    </div>
  );
}