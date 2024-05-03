"use client";

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("@/components/map/map"), { ssr: false });

interface AboutcontactNumber {
  id: number;
  simcardandnumber: string;
}
interface AboutContent {
  id: number;
  content: string;
}

const Thirdsection = () => {
  const [aboutContact, setAboutContact] = useState<AboutcontactNumber[]>([]);
  const [aboutEmail, setEmail] = useState<AboutContent[]>([]);
  const [aboutLocation, setLocation] = useState<AboutContent[]>([]);
  const [aboutGcash, setGcash] = useState<AboutContent[]>([]);
  const [aboutOpeninghours, setOpeninghours] = useState<AboutContent[]>([]);

  useEffect(() => {
    const fetchDataContactnumber = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/aboutcontent/contactnumber"
        );
        const data = await response.json();
        setAboutContact(data.aboutContacts);
      } catch (error) {
        console.error("Error fetching Pricing Table content:", error);
      }
    };

    fetchDataContactnumber();

    const fetchDataLocation = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/aboutcontent/location"
        );
        const data = await response.json();
        setLocation(data.aboutLocation);
      } catch (error) {
        console.error("Error fetching Pricing Table content:", error);
      }
    };

    fetchDataLocation();

    const fetchDataEmail = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/aboutcontent/email"
        );
        const data = await response.json();
        setEmail(data.aboutEmail);
      } catch (error) {
        console.error("Error fetching Pricing Table content:", error);
      }
    };

    fetchDataEmail();

    const fetchDataGcash = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/aboutcontent/gcash"
        );
        const data = await response.json();
        setGcash(data.aboutGcash);
      } catch (error) {
        console.error("Error fetching Pricing Table content:", error);
      }
    };

    fetchDataGcash();

    const fetchDataOh = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/aboutcontent/openinghours"
        );
        const data = await response.json();
        setOpeninghours(data.aboutOh);
      } catch (error) {
        console.error("Error fetching Pricing Table content:", error);
      }
    };

    fetchDataOh();
  }, []);
  

  return (
    <div>
      <div className="flex">
        <div className="w-screen  max-h-none relative">
          <div className="flex flex-col mt-20">
            <div className="text-center">
              <h1 className="text-[18px] font-extrabold mx-10 lg:text-[40px]">
                VISIT US
              </h1>
              <p className="text-[16px] text-gray-500 mx-5">
                LAP I.T. Solutions Inc. will help you move to the future.
              </p>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row">
            <div className="w-screen h-[115vh] sm:h-[115vh] xl:h-[150vh] xl:w-1/2 relative ">
              <div className="flex items-center justify-center mx-3 ">
                <Image
                  src="/about/image2.svg"
                  width={600}
                  height={600}
                  alt=""
                />
              </div>
              <div className="flex items-center justify-center mx-3 xl:-translate-y-10">
                <Map />
              </div>
            </div>

            <div className="w-screen  max-h-none mb-20 xl:w-1/2 relative ">
              {/* Form or content */}
              <div className="mt-10">
                <div className=" flex-col items-center text-center">
                  <div className="lg:mt-20">
                    <h1 className="font-extrabold text-[14px] lg:text-[18px] xl:text-[30px]">
                      OUR LOCATION
                    </h1>
                    <ul>
                      {aboutLocation.map((contact) => (
                        <li key={contact.id}>
                          <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">
                            {contact.content}
                          </h1>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h1 className="font-extrabold text-[14px] lg:text-[18px] xl:text-[30px]">
                      OPENING HOURS
                    </h1>
                    <ul>
                      {aboutOpeninghours.map((contact) => (
                        <li key={contact.id}>
                          <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">
                            {contact.content}
                          </h1>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h1 className="font-extrabold text-[14px] lg:text-[18px] xl:text-[30px]">
                      CONTACT NUMBER
                    </h1>
                    <ul>
                      {aboutContact.map((contact) => (
                        <li key={contact.id}>
                          <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">
                            {contact.simcardandnumber}
                          </h1>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h1 className="font-extrabold text-[14px] lg:text-[18px] xl:text-[30px]">
                      GCASH
                    </h1>
                    <ul>
                      {aboutGcash.map((contact) => (
                        <li key={contact.id}>
                          <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">
                            {contact.content}
                          </h1>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h1 className="font-extrabold text-[14px] lg:text-[18px] xl:text-[30px]">
                      EMAIL
                    </h1>
                    <ul>
                      {aboutEmail.map((contact) => (
                        <li key={contact.id}>
                          <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">
                            {contact.content}
                          </h1>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h1 className="font-extrabold text-[18px] text-blue-500">
                      Visit our FB page for more details
                    </h1>
                    <h1 className="font-bold text-gray-500 text-[16px] mt-1">
                      or visit our Tiktok @lapsales
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdsection;
