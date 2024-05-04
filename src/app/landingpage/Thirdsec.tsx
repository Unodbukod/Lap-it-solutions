"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FcOk } from "react-icons/fc";
import Link from "next/link";
interface HomeContent {
  id: number;
  contentName: string;
  content: string;
}

const Thirdsection = () => {
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
    <div className="flex flex-col items-center pt-20 text-center select-none mb-16">
      <div className="font-extrabold text-3xl lg:text-5xl xl:text-5xl">
        <h1 className="mt-4">
          <span className="bg-red-600 text-white p-1 px-4 rounded-md inline-block">
          {homeContents[10]}
          </span>{" "}
          {homeContents[11]}
        </h1>
        <h1 className="mt-2">{homeContents[12]}</h1>
      </div>
      <div className="text-center text-sm mt-7 mx-2 xl:text-sm">
        <p>
        {homeContents[13]}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row xl:flex-row justify-center items-center mt-10 lg:pt-10 lg:pl-20 xl:pl-0 lg:w-full xl:max-w-[1200px]">
        <section className="lg:w-[600px] xl:w-[600px] lg:h-[600px] xl:h-[600px] lg:mr-20 xl:mr-20">
          <div className="w-full h-full rounded-lg overflow-hidden">
            <Image
              src="/smile.svg"
              alt="Image Description"
              width={600}
              height={300}
              layout="responsive"
            />
          </div>
        </section>
        <section className="flex flex-col items-start sm:items-center md:items-center lg:w-1/2 xl:w-1/2 lg:pb-32 xl:pb-32">
          <h1 className="text-slate-600 mx-2 text-xs text-justify sm:text-center lg:text-sm lg:text-start xl:text-start lg:w-full lg:mx-auto lg:max-w-[450px] xl:text-sm xl:w-full xl:mx-auto xl:max-w-[450px] xl:-translate-x-12">
          {homeContents[21]}
          </h1>
          <div className="mt-3 flex flex-col justify-center items-center lg:mt-7 lg:items-start lg:justify-start lg:pr-56 xl:pr-72 lg:text-sm">
            <div className="font-semibold text-slate-600 lg:text-xs lg:w-56 xl:text-md">
              <div className="hidden lg:block xl:block">
                <div className="flex items-center">
                  <FcOk />
                  <h1 className="ml-3">{homeContents[22]}</h1>
                </div>
                <div className="flex items-center mt-4">
                  <FcOk />
                  <h1 className="ml-3">{homeContents[23]}</h1>
                </div>
                <div className="flex items-center mt-4">
                  <FcOk />
                  <h1 className="ml-3">{homeContents[24]}</h1>
                </div>
                <div className="flex items-center mt-4">
                  <FcOk />
                  <h1 className="ml-3">{homeContents[25]}</h1>
                </div>
              </div>
              <div className="flex mt-6 mx-2 lg:mx-0 xl:mx-0 xl:items-center xl:mt-6">
                <Link href="https://www.facebook.com/lapitsolutions/posts/pfbid02pjiW9yMM2dAcjY8vGqZTWryZZxP9KfjCsMmkB13UEcw2T9gWVgnGMivRA4NkJ3kzl">
                  <button className="bg-blue-600 w-40 h-10 hover:bg-blue-800 transition-all text-white font-normal flex items-center justify-center rounded-md lg:text-base xl:text-base">
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 ml-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Thirdsection;
