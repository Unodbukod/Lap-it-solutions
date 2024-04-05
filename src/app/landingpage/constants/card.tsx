import React from "react";

export interface CardProps {
  smallDescription: string;
  title: string;
  price?: string;
  className?: string;
  icons?: { icon: JSX.Element; text: string }[]; // Array of objects containing both icon and text
}

const Card = ({ title, smallDescription, price, className, icons }: CardProps) => {
  return (
    <div className={`w-[350px] h-[520px] border-md bg-white rounded-md flex flex-col items-start justify-center pl-4 pb-5 border-2 hover:border-blue-500 drop-shadow-2xl  ${className}`}>
      <div className="pl-6">
        <h1 className="font-semibold text-2xl pt-11 text-[25px] ">
          {title}
        </h1>
        <h1 className="text-sm  text-blue-700">
          {smallDescription}
        </h1>
        <h1 className="text-black font-semibold text-lg text-[30px] pt-10 ">
          {price}
        </h1>
        <div className="text-base font-bold pt-4  text-black">
          Per Month
        </div>
        <div className="flex flex-col items-start pt-5 text-sm text-black gap-3"> {/* Adjusted flex direction and gap */}
          {icons && icons.map(({ icon, text }, index) => (
            <div key={index} className="flex items-center"> {/* Removed unnecessary flex direction from this div */}
              {icon}
              <span className="ml-3">{text}</span> {/* Adjusted margin for better spacing */}
            </div>
          ))}
        </div>
      </div>

      {/* Add a button */}
      <button className="text-blue-500 font-bold mx-50 ml-8 border border-blue-500 rounded-lg px-[80px] py-[8px] gap-10 m-5 hover:bg-blue-500 hover:text-white duration-500 ">
        SUBSCRIBE
      </button>
    </div>
  );
};

export default Card;
