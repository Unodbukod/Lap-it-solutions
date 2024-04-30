import React from "react";
import Image from "next/legacy/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="select-none">
      <section className="mb-10">
        <div className="flex flex-col items-center pt-11">
          <div className="bg-blue-400 w-[1100px] h-[282px] rounded-sm flex items-center text-nowrap drop-shadow-2xl pt-20 ml-7">
            <div className="text-white text-4xl font-extrabold ml-9 mb-24">
              SUBSCRIBE TO NEWSLETTER
              <p className="text-base mt-4 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex w-[400px] h-[38px] space-x-2 text-black font-normal mt-5">
                <Input type="email" placeholder="Email" />
                <Button className="bg-blue-600" type="submit">
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="flex flex-col mr-5 pb-[124px]">
              <Image
                src="/subscribe.svg"
                alt="icon"
                width={510}
                height={500}
                />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
