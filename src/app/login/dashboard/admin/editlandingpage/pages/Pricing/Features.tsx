"use client";

import React, { useEffect } from "react";
import { FcCheckmark } from "react-icons/fc";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import UpdateCardForm from "@/components/form/pricing/editcards";

interface pricingcardContent {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  subtitle2: string;
  price2: string;
  packageone: string;
  packagetwo: string;
  packagethree: string;
  packagefour: string;
  packagefive: string;
}

const Features = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);

  const [pricingCardContent, setPricingCardContent] = useState<pricingcardContent[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/landingpagecontent/pricingcontent/cards");
        const data = await response.json();
        const pricingcardContent: pricingcardContent[] = data.pricingtcardsContent;
        setPricingCardContent(pricingcardContent);
      } catch (error) {
        console.error("Error fetching feature content:", error);
      }
    };

    fetchData();
  }, []);

  if (!pricingCardContent) {
    return <div>No Card Content</div>;
  }

  // Find the pricing card content with the matching ID
  const Card = pricingCardContent.find(card => card.id === 1);
  const Card2 = pricingCardContent.find(card2 => card2.id === 2);
  const Card3 = pricingCardContent.find(card3 => card3.id === 3);

  const getId = () => {
    return "1";
  };
  const getId2 = () => {
    return "2";
  };
  const getId3 = () => {
    return "3";
  };

  return (
    <section className="flex items-center justify-center max-h-none mb-20 select-none">
      <div className="flex flex-col">
        <div className="text-center">
          <div className="flex flex-row justify-center gap-3">
            <div className="text-[48px] font-bold bg-red-600 rounded-lg text-white px-5">
              <h1>PACKAGE</h1>
            </div>
            <div className="text-[48px] font-bold">
              <h1>PRICING</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-row mt-10">
          <div>
            <div
              className={`w-[400px] h-[713px] border-md bg-white mx-3 rounded-lg flex flex-col items-start pl-4 pt-5 group border-2 hover:border-blue-500 drop-shadow-2xl`}
            >
              <div className="ml-5">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Edit</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Content</DialogTitle>
                      <DialogDescription>
                        Make changes to this content here.
                      </DialogDescription>
                    </DialogHeader>
                    {/* CONTENT */}
                    <UpdateCardForm getId={getId} />
                  </DialogContent>
                </Dialog>
                <h1 className="text-blue-600 text-[48px] ml-6 mt-4">
                {Card?.title}
                </h1>
                <h1 className="text-black text-[18px] ml-6 mt-4">
                {Card?.subtitle}
                </h1>
                <h1 className="text-black text-[48px] ml-6 ">₱{Card?.price}</h1>
                <h1 className="text-black text-[18px] ml-6 mt-4">{Card?.subtitle2}</h1>
                <h1 className="text-black text-[48px] ml-6 ">₱{Card?.price2}</h1>
                <div className="space-y-5 mt-9">
                  <div className="flex space-x-5 ">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card?.packageone}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card?.packagetwo}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card?.packagethree}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card?.packagefour}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card?.packagefive}</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center translate-x-[13px] mt-10">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    className="w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
              <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-40">
                <div className="flex items-center justify-center min-h-screen">
                  <div className="relative bg-gray-200 rounded-lg">
                    <Button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-0 right-0 m-3 text-gray-700 hover:text-gray-900"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                    <Image
                      src="/Retail.svg"
                      alt="Your Image"
                      className="rounded-lg"
                      width={600}
                      height={600}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
          <div
              className={`w-[400px] h-[713px] border-md bg-white mx-3 rounded-lg flex flex-col items-start pl-4 pt-5 group border-2 hover:border-blue-500 drop-shadow-2xl`}
            >
              <div className="ml-5">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Edit</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Content</DialogTitle>
                      <DialogDescription>
                        Make changes to this content here.
                      </DialogDescription>
                    </DialogHeader>
                    {/* CONTENT */}
                    <UpdateCardForm getId={getId2} />
                  </DialogContent>
                </Dialog>
                <h1 className="text-blue-600 text-[48px] ml-6 mt-4">
                {Card2?.title}
                </h1>
                <h1 className="text-black text-[18px] ml-6 mt-4">
                {Card2?.subtitle}
                </h1>
                <h1 className="text-black text-[48px] ml-6 ">₱{Card2?.price}</h1>
                <h1 className="text-black text-[18px] ml-6 mt-4">{Card2?.subtitle2}</h1>
                <h1 className="text-black text-[48px] ml-6 ">₱{Card2?.price2}</h1>
                <div className="space-y-5 mt-9">
                  <div className="flex space-x-5 ">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card2?.packageone}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card2?.packagetwo}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card2?.packagethree}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card2?.packagefour}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card2?.packagefive}</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center translate-x-[13px] mt-10">
                  <Button
                    onClick={() => setIsModalOpen2(true)}
                    className="w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen2 && (
              <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-40">
                <div className="flex items-center justify-center min-h-screen">
                  <div className="relative bg-gray-200 rounded-lg">
                    <Button
                      onClick={() => setIsModalOpen2(false)}
                      className="absolute top-0 right-0 m-3 text-gray-700 hover:text-gray-900"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                    <Image
                      src="/Inventory.png"
                      alt="Your Image"
                      className="rounded-lg "
                      width={0}
                      height={0}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
          <div
              className={`w-[400px] h-[713px] border-md bg-white mx-3 rounded-lg flex flex-col items-start pl-4 pt-5 group border-2 hover:border-blue-500 drop-shadow-2xl`}
            >
              <div className="ml-5">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Edit</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Edit Content</DialogTitle>
                      <DialogDescription>
                        Make changes to this content here.
                      </DialogDescription>
                    </DialogHeader>
                    {/* CONTENT */}
                    <UpdateCardForm getId={getId3} />
                  </DialogContent>
                </Dialog>
                <h1 className="text-blue-600 text-[48px] ml-6 mt-4">
                {Card3?.title}
                </h1>
                <h1 className="text-black text-[18px] ml-6 mt-4">
                {Card3?.subtitle}
                </h1>
                <h1 className="text-black text-[48px] ml-6 ">₱{Card3?.price}</h1>
                <h1 className="text-black text-[18px] ml-6 mt-4">{Card3?.subtitle2}</h1>
                <h1 className="text-black text-[48px] ml-6 ">₱{Card3?.price2}</h1>
                <div className="space-y-5 mt-9">
                  <div className="flex space-x-5 ">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card3?.packageone}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card3?.packagetwo}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card3?.packagethree}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card3?.packagefour}</h1>
                  </div>
                  <div className="flex space-x-5">
                    <FcCheckmark style={{ fontSize: "24px" }} />
                    <h1>{Card3?.packagefive}</h1>
                  </div>
                </div>
                <div className="flex items-center justify-center translate-x-[13px] mt-10">
                  <Button
                    onClick={() => setIsModalOpen3(true)}
                    className="w-[300px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>

            {/* Modal */}
            {isModalOpen3 && (
              <div className="fixed z-50 inset-0 overflow-y-auto bg-black bg-opacity-40">
                <div className="flex items-center justify-center min-h-screen">
                  <div className="relative bg-gray-200 rounded-lg">
                    <Button
                      onClick={() => setIsModalOpen3(false)}
                      className="absolute top-0 right-0 m-3 text-gray-700 hover:text-gray-900"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                    <Image
                      src="/Food.png"
                      alt="Your Image"
                      className="rounded-lg "
                      width={0}
                      height={0}
                      style={{
                        maxWidth: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
