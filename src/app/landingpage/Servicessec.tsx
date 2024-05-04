"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface HomeContent {
  id: number;
  contentName: string;
  content: string;
}

const Servicessec = () => {

  const [homeContents, setHomeContents] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/landingpagehomecontent"
        );
        const data = await response.json();
        const homes: HomeContent[] = data.homeContent;

        // Create an object to store feature contents by ID
        const contents: { [key: number]: string } = {};
        for (const home of homes) {
          contents[home.id] = home.content;
        }
        setHomeContents(contents);
      } catch (error) {
        console.error("Error fetching feature content:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center pt-8 md:pt-20 text-center select-none">
      <div className="font-extrabold text-3xl md:text-5xl">
        <h1 className="mt-2">{homeContents[28]}</h1>
        <h1 className="mt-4">
        {homeContents[32]}{" "}
          <span className="bg-red-600 text-white p-1 px-3 md:p-1 md:px-4 rounded-md inline-block">
          {homeContents[29]}
          </span>
        </h1>
      </div>
      <div className="text-center mt-4 md:mt-7">
        <p>
        {homeContents[30]}
        </p>
      </div>
      <div className="mt-6 mx-2 md:mt-10">
        <section className="max-w-full lg:mx-56 xl:mx-80">
          <Image
            src="/comp.svg"
            alt="Image Description"
            width={600}
            height={300}
            layout="responsive"
          />
        </section>
        <section className="max-w-full text-center md:text-left md:ml-6 mt-4 md:mt-0">
          <h1 className="text-slate-600 text-base text-justify mx-2 md:text-lg mt-4 md:mt-7 xl:mx-52 xl:mt-10">
          {homeContents[31]}{" "}
          </h1>
        </section>
      </div>
    </div>
  );
};

export default Servicessec;
