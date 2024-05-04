"use client";

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";

interface AboutContent {
  id: number;
  content: string;
}

const Firstsection = () => {
  const [aboutContent, setAboutcontent] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/landingpagecontent/aboutcontent");
        const data = await response.json();
        const about: AboutContent[] = data.aboutContent;

        // Create an object to store Home contents by ID
        const contents: { [key: number]: string } = {};
        for (const abouts of about) {
          contents[abouts.id] = abouts.content;
        }
        setAboutcontent(contents);
      } catch (error) {
        console.error("Error fetching Home content:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="flex">
        <div className="w-screen max-h-none sm:w-screen lg:w-1/2 relative">
          <div className="items-center ">
            <div className="text-center mt-10 lg:text-start lg:mt-36 xl:ml-16 xl:mt-36  ">
              <h1 className="text-[18px] font-extrabold mx-10 lg:ml-5 lg:mr-20 lg:text-[35px] lg:mt-20 xl:text-[48px] ">
                {aboutContent[1]}
              </h1>
              <h1 className="text-[16px] mt-3 mx-5">{aboutContent[2]}</h1>
            </div>
            <div className="text-center lg:text-start mt-10 lg:mt-48 xl:ml-16 xl:mt-[100px]">
              <div className="mx-5">
                <h1 className="text-[18px] font-extrabold lg:text-[40px] xl:text-[48px]">
                  {aboutContent[3]}
                </h1>
              </div>
              <div className="mx-5">
                <h1 className="text-[16px]">{aboutContent[4]}</h1>
              </div>
            </div>
            <div className="mt-10 lg:mt-24 xl:ml-10">
              <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-start lg:gap-3 lg:mx-5 xl:ml-10 xl:mr-20">
                <div className="text-center my-2">
                  <h1 className="text=[18px] font-bold">2008 </h1>
                  <p className="text=[16px]">Computer & Laptop Repair Shop</p>
                </div>
                <div className="text-center my-2">
                  <h1 className="text=[18px] font-bold">2012</h1>
                  <p className="text=[16px]">
                    Become partners with IBS Worldwide
                  </p>
                </div>
                <div className="text-center my-2">
                  <h1 className="text=[18px] font-bold">2015</h1>
                  <p className="text=[16px]">Extends our services with CCTV</p>
                </div>
                <div className="text-center my-2">
                  <h1 className="text=[18px] font-bold">2021</h1>
                  <p className="text=[16px]">Expanded to Incorporate </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:mr-10 xl:ml-20">
          {/* Image */}
          <div className="hidden lg:block lg:w-[550px] lg:ml-14 xl:w-[600px] xl:mr-5 ">
            <Image
              src="/about/image.svg"
              width={1000}
              height={1000}
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
          <div className="hidden lg:block lg:w-[550px] lg:ml-14 lg:-translate-y-32 xl:w-[600px] xl:mr-5 ">
            <Image
              src="/about/image.svg"
              width={1000}
              height={1000}
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
