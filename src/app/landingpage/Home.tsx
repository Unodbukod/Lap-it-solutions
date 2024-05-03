import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="select-none bg-blue-600">
      <div className="max-w-screen-xl mx-auto">
        <section className="padding-container flex flex-col gap-5 py-5 lg:flex-row xl:flex-row">
          <div className="pt-2 pb-10">
            <div className="pt-[20px] max-w-none lg:max-w-none lg:pl-10 lg:pt-10">
              <h1 className="text-3xl text-center font-extrabold text-white mb-2 sm:text-4xl lg:text-start lg:text-[40px] xl:text-5xl">
                AFFORDABLE SMALL
              </h1>
              <h1 className="text-3xl text-center font-extrabold text-white mb-2 sm:text-4xl lg:text-start lg:text-[40px] xl:text-5xl">
                BUSINESS{" "}
                <span className="bg-white px-1 w-6 text-blue-600 rounded-md">
                  ENTERPRISE
                </span>
              </h1>
              <h1 className="text-3xl text-center font-extrabold text-white sm:text-4xl lg:text-start lg:text-[40px] xl:text-5xl">
                SOFTWARE
              </h1>
              <p className="text-white mt-7 text-sm text-justify mx-2 max-w-none sm:text-lg lg:mx-0 lg:max-w-[500px]">
                Empower your business with cutting-edge tools designed to
                streamline operations, boost productivity, and maximize growth
                without breaking the bank. Our software is tailored to meet the
                unique needs of small businesses, offering a comprehensive suite
                of features that are easy to use and implement.
              </p>
            </div>
            <div className="mt-9 flex gap-16 justify-center max-w-none mx-1 lg:justify-start lg:pl-10">
              <button className="border w-44 h-10 rounded-md border-white text-white font-semibold hover:bg-white hover:text-black md:h-12 max-w-none">
                Get Started
              </button>
              <Link href="https://www.messenger.com/t/2092237181053883">
              <button className="border w-44 h-10 rounded-md border-white text-white font-semibold hover:bg-white hover:text-black md:h-12 max-w-none">
                Book a demo
              </button>
              </Link>
            </div>
          </div>

          <div className="relative pb-10 hidden lg:flex-row lg:max-w-none lg:mr-16 lg:block xl:block xl:pl-14 ">
            <div className="relative -right-24 lg:-right-10">
              <div className="max-w-none relative pb-10">
                <div className="relative -top-16 -right-26">
                  <Image
                    src="/poss.svg"
                    alt="Point of Sale"
                    width={600}
                    height={600}
                    />
                </div>
                <div className="flex gap-10 relative mt-[-120px] justify-center mb-[-50px] -right-20 lg:-right-5">
                  <Image
                    src="/bir.svg"
                    alt="BIR Logo"
                    width={80}
                    height={100}
                    className=""
                    />
                  <Image
                    src="/sm.svg"
                    alt="SM Logo"
                    width={80}
                    height={100}
                    />
                  <Image
                    src="/abreeza.svg"
                    alt="Abreeza Logo"
                    width={80}
                    height={100}
                    />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
