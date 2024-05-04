"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import UpdateContentForm from "@/components/form/landingpage/editcontent";
import { FcCheckmark } from "react-icons/fc";
import Image from "next/image";

interface HomeContent {
  id: number;
  contentName: string;
  content: string;
}

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
  const [homeContents, setHomeContents] = useState<{
    [key: number]: string;
  }>({});
  const [pricingCardContent, setPricingCardContent] = useState<
    pricingcardContent[] | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/landingpagehomecontent"
        );
        const data = await response.json();
        const homes: HomeContent[] = data.homeContent;

        // Create an object to store Home contents by ID
        const contents: { [key: number]: string } = {};
        for (const home of homes) {
          contents[home.id] = home.content;
        }
        setHomeContents(contents);
      } catch (error) {
        console.error("Error fetching Home content:", error);
      }
    };

    fetchData();

    const fetchDataPricingCard = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/pricingcontent/cards"
        );
        const data = await response.json();
        const pricingcardContent: pricingcardContent[] =
          data.pricingtcardsContent;
        setPricingCardContent(pricingcardContent);
      } catch (error) {
        console.error("Error fetching feature content:", error);
      }
    };

    fetchDataPricingCard();
  }, []);

  if (!pricingCardContent) {
    return <div>No Card Content</div>;
  }

  const Card = pricingCardContent.find((card) => card.id === 1);
  const Card2 = pricingCardContent.find((card2) => card2.id === 2);
  const Card3 = pricingCardContent.find((card3) => card3.id === 3);

  const getId18 = () => {
    return "18";
  };
  const getId19 = () => {
    return "19";
  };
  const getId20 = () => {
    return "20";
  };
  const getId27 = () => {
    return "27";
  };

  return (
    <div className="select-none bg-blue-50">
      <div className="flex flex-col items-center pt-16 text-center">
        <div className="font-extrabold text-5xl">
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="items-center justify-center flex"
            >
              <AccordionTrigger>
                <h1 className=" text-black">{homeContents[18]}</h1>
              </AccordionTrigger>
              <AccordionContent>
                {/* BUTTON EDIT */}
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
                    <UpdateContentForm getId={getId18} />
                  </DialogContent>
                </Dialog>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="flex">
            <div className="mx-1 -translate-y-2">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="items-center justify-center flex"
                >
                  <AccordionTrigger>
                    <h1 className="bg-red-600 p-2 rounded-lg">
                      {homeContents[19]}
                    </h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* BUTTON EDIT */}
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
                        <UpdateContentForm getId={getId19} />
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="flex items-start justify-start">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="items-center justify-center flex"
                >
                  <AccordionTrigger>
                    <h1 className=" text-black">{homeContents[20]}</h1>
                  </AccordionTrigger>
                  <AccordionContent>
                    {/* BUTTON EDIT */}
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
                        <UpdateContentForm getId={getId20} />
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start">
          <Accordion type="single" collapsible>
            <AccordionItem
              value="item-1"
              className="items-center justify-center flex"
            >
              <AccordionTrigger>
                <h1 className=" text-black">{homeContents[27]}</h1>
              </AccordionTrigger>
              <AccordionContent>
                {/* BUTTON EDIT */}
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
                    <UpdateContentForm getId={getId27} />
                  </DialogContent>
                </Dialog>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <section className="py-10 px-10 2xl:max-container relative flex flex-row justify-center gap-16">
        <div className="flex flex-col">
          <div className="flex flex-row mt-10">
            <div>
              <div
                className={`w-[400px] h-[713px] border-md bg-white mx-3 rounded-lg flex flex-col items-start pl-4 pt-5 group border-2 hover:border-blue-500 drop-shadow-2xl`}
              >
                <div className="ml-5">
                  <h1 className="text-blue-600 text-[48px] ml-6 mt-4">
                    {Card?.title}
                  </h1>
                  <h1 className="text-black text-[18px] ml-6 mt-4">
                    {Card?.subtitle}
                  </h1>
                  <h1 className="text-black text-[48px] ml-6 ">
                    ₱{Card?.price}
                  </h1>
                  <h1 className="text-black text-[18px] ml-6 mt-4">
                    {Card?.subtitle2}
                  </h1>
                  <h1 className="text-black text-[48px] ml-6 ">
                    ₱{Card?.price2}
                  </h1>
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
                  <h1 className="text-blue-600 text-[48px] ml-6 mt-4">
                    {Card2?.title}
                  </h1>
                  <h1 className="text-black text-[18px] ml-6 mt-4">
                    {Card2?.subtitle}
                  </h1>
                  <h1 className="text-black text-[48px] ml-6 ">
                    ₱{Card2?.price}
                  </h1>
                  <h1 className="text-black text-[18px] ml-6 mt-4">
                    {Card2?.subtitle2}
                  </h1>
                  <h1 className="text-black text-[48px] ml-6 ">
                    ₱{Card2?.price2}
                  </h1>
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
                  <h1 className="text-blue-600 text-[48px] ml-6 mt-4">
                    {Card3?.title}
                  </h1>
                  <h1 className="text-black text-[18px] ml-6 mt-4">
                    {Card3?.subtitle}
                  </h1>
                  <h1 className="text-black text-[48px] ml-6 ">
                    ₱{Card3?.price}
                  </h1>
                  <h1 className="text-black text-[18px] ml-6 mt-4">
                    {Card3?.subtitle2}
                  </h1>
                  <h1 className="text-black text-[48px] ml-6 ">
                    ₱{Card3?.price2}
                  </h1>
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
        {/* PRICING CARDS */}
      </section>
    </div>
  );
};

export default Features;
