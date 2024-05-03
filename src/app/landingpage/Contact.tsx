import React from "react";
import Image from "next/legacy/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="select-none">
      
      <section className="mb-10">
        <div className="flex flex-col items-center pt-11">
          <div className="bg-blue-400 w-[395px] sm:w-[620px] lg:h-[182px] lg:w-[820px] 2xl:w-[1020px] 2xl:h-[210px] h-[250px] rounded-sm flex  drop-shadow-lg pt-16 justify-center items-center">
            {" "}
            {/* Added justify-center and items-center */}
            <div className="text-white text-2xl font-extrabold mb-24 ml-6 items-start lg:pt-10">
              SUBSCRIBE TO NEWSLETTER
              <p className="text-sm mt-4 font-normal max-w-96">
                Lorem ipsum dolor sit amet consectetur. Cum dui mattis cursus
                neque.
              </p>
              <div className="flex flex-col lg:flex lg:flex-row items-center w-[300px] h-[38px] space-x-2 text-black font-normal mt-5 ml-5 lg:ml-5 sm:ml-6">
                <Input
                  type="email"
                  placeholder="Email"
                  className="w-[380px] ml-2 sm:w-[550px] lg:w-[256px]"
                />
                <Button
                  className="bg-blue-600 w-[380px] mt-2 lg:mb-4 sm:mt-4 sm:w-[550px] lg:w-[156px]"
                  type="submit"
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <div className=" flex-col lg:mt-10 2xl:ml-16 pb-[124px] hidden lg:block">
              <Image src="/subscribe.svg" alt="icon" width={500} height={235} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
