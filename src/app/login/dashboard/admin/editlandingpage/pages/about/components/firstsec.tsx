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
import UpdateContentForm from "@/components/form/about/editcontent";

interface AboutContent {
  id: number;
  content: string;
}

const Firstsection = () => {
  const [aboutContents, setAboutContents] = useState<{
    [key: number]: string;
  }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/api/landingpagecontent/aboutcontent"
        );
        const data = await response.json();
        const abouts: AboutContent[] = data.aboutContent;
        // Create an object to store feature contents by ID
        const contents: { [key: number]: string } = {};
        for (const about of abouts) {
          contents[about.id] = about.content;
        }
        setAboutContents(contents);
      } catch (error) {
        console.error("Error fetching about content:", error);
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
  return (
    <div>
      <div className="flex">
        <div className="w-screen max-h-none sm:w-screen lg:w-1/2 relative">
          <div className="items-center ">
            <div className="text-center mt-10 lg:text-start lg:mt-36 xl:ml-16 xl:mt-36  ">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="items-center justify-center"
                >
                  <AccordionTrigger>
                    <h1 className=" text-start text-[18px] font-extrabold mx-10 lg:ml-5 lg:mr-20 lg:text-[35px] xl:text-[48px] ">
                      {aboutContents[1]}
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

              <Accordion type="single" collapsible>
              <AccordionItem
                  value="item-1"
                  className="items-center justify-center"
                >
                  <AccordionTrigger>
                  <h1 className="text-start text-[16px] mt-3 mx-5">
                      {aboutContents[2]}
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
                        <UpdateContentForm getId={getId2} />
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="text-center lg:text-start mt-10 lg:mt-48 xl:ml-16 xl:mt-[155px]">
              <div className="mx-5">
                <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="items-center justify-center"
                >
                  <AccordionTrigger>
                  <h1 className="text-start text-[18px] font-extrabold lg:text-[40px] xl:text-[48px]">
                      {aboutContents[3]}
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
                        <UpdateContentForm getId={getId3} />
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible>
              <AccordionItem
                  value="item-1"
                  className="items-center justify-center"
                >
                  <AccordionTrigger>
                  <h1 className="text-start text-[16px] mt-3 ">
                      {aboutContents[4]}
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
                        <UpdateContentForm getId={getId4} />
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
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
          <div className="hidden lg:block lg:w-[550px] lg:ml-14 xl:w-[600px] xl:mr-5 xl:translate-y-[150px]">
            <Image
              src="/about/image.svg"
              width={1000}
              height={1000}
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto",
              }} />
          </div>
          <div className="hidden lg:block lg:w-[550px] lg:ml-14 lg:-translate-y-32 xl:w-[600px] xl:mr-5 xl:translate-y-[250px] ">
            <Image
              src="/about/image.svg"
              width={1000}
              height={1000}
              alt=""
              style={{
                maxWidth: "100%",
                height: "auto",
              }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firstsection;
