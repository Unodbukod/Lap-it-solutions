"use client";
import Image from "next/legacy/image";
import Link from "next/link";
import { NAV_LINKS } from ".";
import BottomOfFooter from "./BottomOfFooter";

const Footer = () => {
  const card = [
    {
      link: "https://www.facebook.com/itechsolutions588",
      pic: (
        <Image
          src="/fb.png"
          alt=""
          width={16}
          height={16}
        />
      ),
    },
    {
      link: "https://www.facebook.com/itechsolutions588",
      pic: (
        <Image
          src="/mssgr.png"
          alt=""
          width={16}
          height={16}
        />
      ),
    },
    {
      link: "https://www.instagram.com/lapitsolutions/",
      pic: (
        <Image
          src="/insta.png"
          alt=""
          width={16}
          height={16}
        />
      ),
    },
    {
      link: "https://www.facebook.com/itechsolutions588",
      pic: (
        <Image
          src="/twtr.png"
          alt=""
          width={16}
          height={16}
        />
      ),
    },
    {
      link: "mailto:LapITSolutions09@gmail.com",
      pic: (
        <Image
          src="/gm.png"
          alt=""
          width={16}
          height={16}
        />
      ),
    },
  ];

  const PlanCard = ({
    link,
    pic,
  }: {
    link: string;
    pic?: string | JSX.Element;
  }) => {
    return (
      <div className="">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {typeof pic === "string" ? (
            <Image
              src={pic}
              alt=""
              width={100}
              height={100}
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
            />
          ) : (
            pic
          )}
        </a>
      </div>
    );
  };

  return (
    <footer className="bg-blue-900 text-white mt-auto ">
      <div className="max-w-none md:grid md:grid-cols-2 xl:flex xl:flex-row xl:gap-14 xl:justify-center 2xl:gap-48 relative ">
        <div className="2xl:mt-5">
          <div className="flex flex-col items-center mt-5  ">
            <Image src="/lapit.svg" alt="" width={150} height={40} />
            <div className="text-[12px] text-center ">
              <p className="md:text-center md:max-w-none sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[14px] 2xl:text-[16px]">
                We are happy to serve you for the better{" "}
                <span className="lg:block "> </span> future of our country in
                business and innovation.
              </p>
            </div>
            <div className="flex flex-row items-center space-x-4 mt-3 md:gap-3">
              {card.map((logoMap, index) => (
                <PlanCard key={index} link={logoMap.link} pic={logoMap.pic} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-5 md:mt-7 2xl:mt-10  ">
          <div className="font-semibold text-[17px] flex justify-center md:justify-center md:text-[18px] ">
            Useful Links
          </div>
          <div className="flex flex-row justify-center gap-6 mt-2 sm:gap-8 md:gap-4 xl:flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="text-[14px] md:text-[15px] lg:text-[16px] xl:text-[14px] 2xl:text-[16px]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center xl:pt-8 xl:justify-start xl:items-start">
          <div className="font-bold text-[17px] md:text-[18px] mt-5 sm:mt-2">
            Reach out
          </div>

          <div className="flex justify-center items-center mt-2">
            <div className="flex items-center">
              <Image
                src="/location.svg"
                alt="location"
                width={20}
                height={20}
                className="md:w-auto"
              />
              <div className="flex text-center pl-2 text-[12px] md:text-[14px] 2xl:text-[16px] xl:text-start xl:w-80">
                Door 2 Ground floor Marcela Bldg. Jose Palma Gil St., Claveria
                St. Davao City, 8000 Philippines
              </div>
            </div>
          </div>

          <div className="flex items-center text-[12px] mt-2 md:text-[14px] 2xl:text-[16px] ">
            <Image src="/vector.png" alt="" width={16} height={16} />
            <div className="pl-2">sales.lap@gmail.com</div>
          </div>
          <div className="flex items-center text-[12px] mt-2 md:text-[14px] 2xl:text-[16px]">
            <Image src="/phone.svg" alt="" width={16} height={16} />
            <div className="pl-2">+63 905 556 5713</div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-5 md:mt-7 xl:w-80 2xl:mt-10 xl:items-start">
          <div className="font-bold text-[17px] md:text-[18px]">
            Get In Touch
          </div>
          <div className="flex flex-col text-[12px] mt-1 xl:items-start">
            <h1 className="mx-10 text-center text-[12px] md:text-[15px] 2xl:text-[16px] xl:mx-0 xl:text-start">
              Question or feedback we’d love to hear it from you.
            </h1>
          </div>
        </div>
      </div>
      <BottomOfFooter />
    </footer>
  );
};

export default Footer;