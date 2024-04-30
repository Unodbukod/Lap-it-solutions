import React from "react";
import Image from "next/legacy/image";
import dynamic from 'next/dynamic';
const Map = dynamic(() => import('@/components/map/map'), { ssr: false });

const Thirdsection = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-screen  max-h-none relative">
          <div className="flex flex-col mt-20">
            <div className="text-center">
              <h1 className="text-[18px] font-extrabold mx-10 lg:text-[40px]">VISIT US</h1>
              <p className="text-[16px] text-gray-500 mx-5">
                LAP I.T. Solutions Inc. will help you move to the future.
              </p>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row">
            <div className="w-screen h-[110vh] sm:h-[130vh] xl:h-[150vh] xl:w-1/2 relative ">
            <div className="flex items-center justify-center mt-5 mx-3">
              <Image
                src="/about/image2.svg"
                width={600}
                height={600}
                alt=""
                />
              </div>
            <div className="flex items-center justify-center mb-6 mx-3 xl:-translate-y-10">
              <Map/>
            </div>
            </div>


            <div className="w-screen  max-h-none mb-20 xl:w-1/2 relative ">
              {/* Form or content */}
              <div className="mt-10">
                <div className=" flex-col items-center text-center">
                  <div className="">
                      <h1 className="font-extrabold text-[14px] lg:text-[18px] xl:text-[30px]">OUR LOCATION</h1>
                      <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">Door 2, Marcela Bldg., J. Palma Gil St., Davao City, 8000, Philippines</h1>
                  </div>
                  <div className="mt-6">
                      <h1 className="font-extrabold text-[14px] lg:text-[18px] xl:text-[30px]">OPENING HOURS</h1>
                      <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">Monday to Saturday</h1>
                      <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">9:00 AM - 6:00 PM</h1>
                  </div>
                  <div className="mt-6">
                      <h1 className="font-extrabold text-[14px] lg:text-[18px] xl:text-[30px]">CONTACT NUMBER</h1>
                      <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">Globe +63 917 315 5624</h1>
                      <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">Globe +63 917 114 7882</h1>
                      <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">Smart +63 930 449 1580</h1>
                      <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">Smart +63 917 136 1944</h1>
                      <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">Smart +63 998 852 7923</h1>
                      <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">Globe 336-0478</h1>
                      <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">PLDT 296-0363</h1>

                  </div>
                  <div className="mt-6">
                      <h1 className="font-extrabold text-[14px] lg:text-[18px] xl:text-[30px]">GCASH</h1>
                      <h1 className="text-gray-500 text-[10px]lg:text-[13px]">+63 905 556 5713</h1>
                  </div>
                  <div className="mt-6">
                      <h1 className="font-extrabold text-[14px] lg:text-[18px] xl:text-[30px]">EMAIL</h1>
                      <h1 className="text-gray-500 text-[10px] mt-1 lg:text-[13px]">sales@lap-itsolutions.com</h1>
                  </div>
                  <div className="mt-6">
                      <h1 className="font-extrabold text-[18px] text-blue-500">Visit our FB page for more details</h1>
                      <h1 className="font-bold text-gray-500 text-[16px] mt-1">or visit our Tiktok @lapsales</h1>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thirdsection;
