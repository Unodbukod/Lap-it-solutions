import React from "react";
import Image from "next/image";

const Servicessec = () => {
  return (
    <div className="flex flex-col items-center pt-8 md:pt-20 text-center select-none">
      <div className="font-extrabold text-3xl md:text-5xl">
        <h1 className="mt-2">WE OFFER</h1>
        <h1 className="mt-4">
          OTHER{" "}
          <span className="bg-red-600 text-white p-1 px-3 md:p-1 md:px-4 rounded-md inline-block">
            SERVICES
          </span>
        </h1>
      </div>
      <div className="text-center mt-4 md:mt-7">
        <p>
          Explore our range of additional services designed to complement your
          needs and enhance your experience
        </p>
      </div>
      <div className="mt-6 mx-2 md:mt-10">
        <section className="max-w-full lg:mx-56 xl:mx-80">
          <Image
            src="/comp.svg"
            alt="Image Description"
            width={600}
            height={300}
          />
        </section>
        <section className="max-w-full text-center md:text-left md:ml-6 mt-4 md:mt-0">
          <h1 className="text-slate-600 text-base text-justify mx-2 md:text-lg mt-4 md:mt-7 xl:mx-52 xl:mt-10">
             Our goal is to provide you
            with a one-stop-shop for all your tech needs, offering reliable and
            efficient services so that you can dedicate your time and energy to
            what truly matters—nurturing and growing your business.{" "}
          </h1>
          {/* <div className="mt-4 mx-2 md:mt-7">
            <button className="bg-blue-600 w-32 md:w-40 h-10 hover:bg-blue-800 transition-all text-white font-normal flex items-center justify-center rounded-md">
              Learn More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Servicessec;
