import React from "react";
import Image from "next/legacy/image";

const Firstsection = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-screen max-h-none sm:w-screen lg:w-1/2 relative">
          <div className="items-center ">
            <div className="text-center mt-10 lg:text-start lg:mt-36 xl:ml-16 xl:mt-36  ">
              <h1 className="text-[18px] font-extrabold mx-10 lg:ml-5 lg:mr-20 lg:text-[35px] lg:mt-20 xl:text-[48px] ">
                WE ARE TEAM OF CREATORS & INVESTORS
              </h1>
              <h1 className="text-[16px] mt-3 mx-5">
                LAP I.T. Solutions Inc. is a one-stop technical company and is
                capable of handling various advance business solutions. Our
                Software and Hardware is trusted and used by many business
                owners and operators for their ever-demanding operations.
              </h1>
            </div>
            <div className="text-center lg:text-start mt-10 lg:mt-48 xl:ml-16 xl:mt-[155px]">
              <div className="mx-5">
                <h1 className="text-[18px] font-extrabold lg:text-[40px] xl:text-[48px]">
                  ESTABLISHED IN 2008, LAP I.T. Solutions Inc.
                </h1>
              </div>
              <div className="mx-5">
                <h1 className="text-[16px]">
                  Started a small computer and laptop repair shop with
                  specialized in repairing and maintaining laptops and PC’s. We
                  are one of the competitive technology business here in Davao
                  City. Until we had our break in 2012 which a childhood friend
                  from Manila (IBS Worldwide) entrusted us their software, and
                  proving us as a developer and software technician to upgrade
                  our business from repair shop to a software and hardware
                  store.
                </h1>
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
          <div className="hidden lg:block lg:w-[550px] lg:ml-14 xl:w-[600px] xl:mr-5 ">
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
          <div className="hidden lg:block lg:w-[550px] lg:ml-14 lg:-translate-y-32 xl:w-[600px] xl:mr-5 ">
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
