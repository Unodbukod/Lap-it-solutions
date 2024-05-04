"use client"

import React, { useEffect, useState } from "react";
import Image from "next/image";
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

  const getId28 = () => {
    return "28";
  };
  const getId29 = () => {
    return "29";
  };
  const getId30 = () => {
    return "30";
  };
  const getId31 = () => {
    return "31";
  };
  const getId32 = () => {
    return "32";
  };
  return (
    <div className="flex flex-col items-center pt-8 md:pt-20 text-center select-none">
      <div className="font-extrabold text-3xl md:text-5xl">
      <div className="mx-2">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center justify-center flex"
              >
                <AccordionTrigger>
                  <h1 className="mt-2">{homeContents[28]}</h1>
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
                      <UpdateContentForm getId={getId28} />
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="flex">
          <div className="mx-2">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center justify-center flex"
              >
                <AccordionTrigger>
                  <h1 className="mt-2">{homeContents[32]}</h1>
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
                      <UpdateContentForm getId={getId32} />
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        <div className="mx-1">
            <Accordion type="single" collapsible>
              <AccordionItem
                value="item-1"
                className="items-center justify-center flex"
              >
                <AccordionTrigger>
                  <h1 className="bg-red-600 text-white p-2 rounded-lg">
                    {homeContents[29]}
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
                      <UpdateContentForm getId={getId29} />
                    </DialogContent>
                  </Dialog>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          </div>
      </div>
      <div className="text-center mt-4 md:mt-7">

        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="items-center justify-center flex"
          >
            <AccordionTrigger>
              <h1 className="mt-2">{homeContents[30]}</h1>
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
                  <UpdateContentForm getId={getId30} />
                </DialogContent>
              </Dialog>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
          <div className="text-center mt-7">
        <Accordion type="single" collapsible>
          <AccordionItem
            value="item-1"
            className="items-center justify-center"
          >
            <AccordionTrigger>
            <h1 className="text-slate-600 text-base text-justify mx-2 md:text-lg mt-4 md:mt-7 xl:mx-52 xl:mt-10">{homeContents[31]}</h1>
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
                  <UpdateContentForm getId={getId31} />
                </DialogContent>
              </Dialog>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
        </section>
      </div>
    </div>
  );
};

export default Servicessec;
