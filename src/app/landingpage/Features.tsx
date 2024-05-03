"use client";
import React from "react";
import Card from "../components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "@react-hook/media-query";

const Features = () => {
  const card = [
    {
      title: "Point of Sale",
      description:
        "Elevate your business with our intuitive Point of Sale system, simplifying transactions and enhancing customer experience",
      iconSrc: "/pos.svg",
    },
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
      iconSrc: "/multitenancy.svg",
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

  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  return (
    <div className="flex flex-col items-center pt-20 select-none bg-blue-50">
      <div className="font-extrabold text-4xl text-center sm:text-5xl md:text-6xl">
        <h1>
          HIGH -{" "}
          <span className="bg-red-600 text-white p-1 px-4 rounded-md inline-block">
            IMPACT
          </span>{" "}
          FEATURES
        </h1>
      </div>
      <div className="text-center mt-7 mx-3">
        <p>
          Our impactful features are <strong>intricately designed</strong> to
          seamlessly align with your workflow, ensuring a highly effective and
          tailored user experience.
        </p>
      </div>
      {isSmallScreen ? (
  <div className="px-5">
    <div className="overflow-x-auto flex flex-row gap-2 2xl:max-container max-w-[300px] max-h-none mt-10 mb-16">
      {card.map((car, index) => (
        <div className="mb-10" key={index}>
          <Card
            title={car.title}
            description={car.description}
            iconSrc={car.iconSrc}
          />
        </div>
      ))}
    </div>
  </div>
  ): (
        <Carousel className="mx-auto">
          <CarouselContent>
            {card.map((car, index) => (
              <CarouselItem
                className="w-[90px] mt-20 pl-10 mb-14 sm:basis-1/2 md:w-[100px] md:basis-1/2 lg:w-[150px] lg:basis-1/3 xl:w-[200px] xl:basis-1/3 xl:pl-10 "
                key={index}
              >
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
      )}
    </div>
  );
};

export default Features;
