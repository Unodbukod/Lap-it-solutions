import React from "react";
import Image from "next/legacy/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const firstsec = () => {
  return (
    <div className="pt-10 select-none mb-16">
      <div className="flex flex-col items-center font-extrabold text-5xl">
        <h1 className="text-[16px] lg:text-[40px]">FAQ</h1>
      </div>
      <div className="text-center text-[10px] lg:text-[16px] py-2 text-gray-500 ">
        <h1>
          Here, we have compiled a list of common questions and answers to
          provide you with quick and helpful information about our
          products/services.
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row items-center ">
        <div className="w-screen max-h-none lg:w-1/2 relative">
          <div className="translate-x-20 xl:translate-x-[350px] hidden lg:block lg:py-16">
            <Image
              src="/faq.svg"
              alt="Image Description"
              width={550}
              height={550}
              className="lg:w-[400px] xl:w-[500px]"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          </div>
        </div>
        <div className=" w-screen items-center justify-center flex flex-col lg:w-1/2 lg:-translate-x-28 lg:ml-64 xl:ml-[500px] ">
          <Accordion type="single" collapsible>
            <AccordionItem
              className="w-[350px] sm:w-[400px] xl:w-[450px]"
              value="item-1"
            >
              <AccordionTrigger className="border text-start px-5 rounded-md bg-blue-600 text-white font-semibold text-sm">
                Point of Sales?
              </AccordionTrigger>
              <AccordionContent className="px-5">
                <h1 className="pt-4">Point of Sales</h1>
                <p className="pt-4">
                  Point of Sale System provides a centralized platform for
                  processing payments, ensure efficiency, accuracy, and
                  convenience in retail, hospitality, and various other
                  industries. From scanning products and accepting various forms
                  of payment to managing inventory and generating sales reports,
                  POS systems streamline the sales process, enhance customer
                  service, and help businesses effectively manage their
                  operations.
                </p>
              </AccordionContent>
              <AccordionItem
                className="w-[350px] sm:w-[400px]  xl:w-[450px]"
                value="item-2"
              >
                <AccordionTrigger className="border text-start px-5 rounded-md bg-blue-600 text-white font-semibold text-sm">
                  System Demonstration
                </AccordionTrigger>
                <AccordionContent className="px-5">
                  <h1 className="pt-4">Demo</h1>
                  <p className="pt-4">
                    The system demo is all about making it easy for our clients.
                    We'll do it wherever suits them best – whether that's at
                    their place or ours. If they prefer coming to our office,
                    we're more than happy to host them there and show them how
                    everything works. It's all about making sure they get what
                    they need, in a way that works for them.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="w-[350px] sm:w-[400px]  xl:w-[450px]"
                value="item-3"
              >
                <AccordionTrigger className="border text-start px-5 rounded-md bg-blue-600 text-white font-semibold text-sm">
                  How do I get technical support for your product/service?
                </AccordionTrigger>
                <AccordionContent className="px-5">
                  <h1 className="pt-4">Technical Support</h1>
                  <p className="pt-4">
                    Our technical support is there to help you, whether it's
                    from a distance or in person. If you need assistance, we can
                    troubleshoot and resolve issues remotely, saving you time
                    and hassle. Alternatively, if the situation requires a
                    hands-on approach, we're more than willing to come to your
                    location to provide the support you need. Our goal is to
                    ensure that your technical issues are addressed promptly and
                    efficiently, no matter where you are.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="w-[350px] sm:w-[400px]  xl:w-[450px]"
                value="item-4"
              >
                <AccordionTrigger className="border px-5 text-start rounded-md bg-blue-600 text-white font-semibold text-sm">
                  How do you protect customer data and privacy?
                </AccordionTrigger>
                <AccordionContent className="px-5">
                  <h1 className="pt-4">Point of Sales</h1>
                  <p className="pt-4">
                    Lorem ipsum dolor sit amet consectetur. Facilisi
                    pellentesque libero aenean porta adipiscing imperdiet
                    faucibus. At mi odio tincidunt a. Sed egestas est dignissim
                    tristique. Pellentesque nunc in turpis eget tincidunt risus.
                    Risus volutpat at amet venenatis. Ultrices urna venenatis
                    pellentesque integer feugiat faucibus non nunc vitae.
                    Facilisis sit quam felis morbi hac. Augue arcu tellus neque
                    sem.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default firstsec;
