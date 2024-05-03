"use client";

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import Card from "./components";
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

interface HomeContent {
  id: number;
  contentName: string;
  content: string;
}

const Home = () => {
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
  }, []);

  const getId = () => {
    return "1";
  };
  const getId2 = () => {
    return "2";
  };
  const getId3 = () => {
    return "3";
  };
  const getId4 = () => {
    return "4";
  };
  const getId5 = () => {
    return "5";
  };
  const card = [
    //same rani sa features// ang nakalahi ani kay naa sa constants ang pagtawag ani naa sa index.tsx
    { title: "100K+", description: "Total Customer" },
    { title: "100K+", description: "Real Time Customer" },
    { title: "100K+", description: "Customer Satisfaction" },
  ];

  return (
    <div className="select-none  bg-blue-600">
      <section className="max-container padding-container flex flex-col gap-7 py-5 xl:flex-row ">
        <div className="mt-24">
          <div className="ml-44">
            <div className="flex items-start justify-start">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center justify-center flex"
              >
                <AccordionTrigger>
                  <h1 className="text-4xl font-extrabold text-white">
                    {homeContents[1]}
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
                      <UpdateContentForm getId={getId} />
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
            <div className="flex flex-row">
              <div>
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center justify-center flex"
              >
                <AccordionTrigger>
                <h1 className="text-4xl font-extrabold text-white">{homeContents[2]}</h1>
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
                      <UpdateContentForm getId={getId2} />
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
            <div className="bg-white px-1 w-96">
            
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center justify-center flex"
              >
                <AccordionTrigger>
                <h1 className=" text-4xl font-extrabold text-blue-600 rounded-md">{homeContents[3]}</h1>
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
                      <UpdateContentForm getId={getId3} />
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
            </div>
            <div className="flex items-start justify-start">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center justify-center flex"
              >
                <AccordionTrigger>
                <h1 className="text-4xl font-extrabold text-white">{homeContents[4]}</h1>
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
                      <UpdateContentForm getId={getId4} />
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
            <div className="flex items-start justify-start text-start  w-[700px]">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center flex"
              >
                <AccordionTrigger>
                <h1 className="text-[16px] text-white">{homeContents[5]}</h1>
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
                      <UpdateContentForm getId={getId5} />
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            </div>
          </div>
          <div>
            <button className="ml-44 mt-9 border w-44 h-10 rounded-md border-white text-white font-semibold hover:bg-white hover:text-black">
              Get Started
            </button>
            <button className="ml-28 mt-9 border w-44 h-10 rounded-md border-white text-white font-semibold hover:bg-white hover:text-black">
              Book a demo
            </button>
          </div>
          <div className="mt-6 ml-44 flex flex-row justify-between text-lg">
            {card.map(
              (
                car,
                index //mao ni mag map naka
              ) => (
                <Card
                  key={index}
                  title={car.title}
                  description={car.description}
                />
              )
            )}
          </div>
        </div>
        <div className="w-1/2 relative mt-20">
          <div className="-mt-9 pl-24 mb-24">
            <Image
              src="/Vector.svg"
              alt="Image Description"
              width={530}
              height={400}
              className="opacity-10"
              style={{
                maxWidth: "100%",
                height: "auto",
              }} />
          </div>
          <div className="absolute -top-1 right-24">
            <Image
              src="/lap.svg"
              alt="Image Description"
              width={600}
              height={400}
              style={{
                maxWidth: "100%",
                height: "auto",
              }} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
