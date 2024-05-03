"use client";

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import Card from "./components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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

const Features = () => {
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

  const getId6 = () => {
    return "6";
  };
  const getId7 = () => {
    return "7";
  };
  const getId8 = () => {
    return "8";
  };
  const getId9 = () => {
    return "9";
  };

  const card = [
    {
      title: "Property Management System",
      description:
        "Manage hotels, rentals, and vacation properties effortlessly with our easy-to-use Property Management System (PMS)",
      iconSrc: "/pms.svg",
    },
    {
      title: "Multi-Tenancy",
      description:
        "Efficiently manage multiple tenants and properties with our powerful Multi-Tenancy Management System",
      iconSrc: "/pms.svg",
    },
    {
      title: "Point of Sales",
      description:
        "Elevate your business with our intuitive Point of Sale system, simplifying transactions and enhancing customer experience",
      iconSrc: "/pos.svg",
    },
    {
      title: "Inventory Control",
      description:
        "Optimize your inventory management with our comprehensive Inventory Control System",
      iconSrc: "/ic.svg",
    },
    {
      title: "Rentals",
      description:
        "Discover seamless rental management with our intuitive software",
      iconSrc: "/rental.svg",
    },
    {
      title: "Clinic / Patient",
      description:
        "Transform your clinic operations with our all-in-one clinic management software",
      iconSrc: "/clinic.svg",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-20 select-none bg-blue-50">
      <div className="font-extrabold text-5xl">
        <div className="flex">
          <div>
            <div className="mx-1">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="items-center justify-center flex"
                >
                  <AccordionTrigger>
                    <h1>
                      {homeContents[6]}
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
                        <UpdateContentForm getId={getId6} />
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div>
          <div className="mx-1 -translate-y-2">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="items-center justify-center flex"
                >
                  <AccordionTrigger>
                    <h1 className="bg-red-600 p-2 rounded-lg">
                      {homeContents[7]}
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
                        <UpdateContentForm getId={getId7} />
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          <div>
          <div className="mx-1">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="items-center justify-center flex"
                >
                  <AccordionTrigger>
                    <h1>
                      {homeContents[8]}
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
                        <UpdateContentForm getId={getId8} />
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-7">
      <div className="mx-1">
              <Accordion type="single" collapsible>
                <AccordionItem
                  value="item-1"
                  className="items-center justify-center flex"
                >
                  <AccordionTrigger>
                    <h1>
                      {homeContents[9]}
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
                        <UpdateContentForm getId={getId9} />
                      </DialogContent>
                    </Dialog>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
      </div>

      <Carousel>
        <CarouselContent>

          {card.map((car, index) => (
            <CarouselItem
              className="w-[200px] mt-20 pl-10 mb-14 basis-1/3  "
              key={index}
            >
              <Button>DELETE</Button>
              <Button>EDIT</Button>
              <Card
                title={car.title}
                description={car.description}
                iconSrc={car.iconSrc}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Features;
