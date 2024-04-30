/* eslint-disable react/no-unescaped-entities */
import NavBar from "@/app/components/navbar";
import React from "react";
import Firstsection from "./components/firstsec";
import Secondsection from "./components/secondsec";
import Thirdsection from "./components/thridsec";
import Forthsection from "./components/forthsec";
import Footer from "@/app/components/constants/Footer";
import BottomOfFooter from "@/app/components/constants/BottomOfFooter";

const Page = () => {
  return (
    <div>
      <NavBar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-600 to-blue-900 text-white">
        <div className="text-center">
          <div className="flex flex-row items-center justify-center gap-2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Features</h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-red-500  rounded-xl p-3">
              Coming
            </h1>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Soon!</h1>
          </div>
          <p className="text-lg md:text-xl mb-8">
            We're working hard to bring you something amazing. Stay tuned!
          </p>
        </div>
      </div>
      {/* <Firstsection/>
      <Secondsection/>
      <Thirdsection/>
      <Forthsection/> */}
      <Footer />
    </div>
  );
};

export default Page;
