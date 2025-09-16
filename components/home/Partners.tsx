import React from "react";
import garage from "../../public/assets/garage.svg";
import gida from "../../public/assets/gida.png";
import cartesi from "../../public/assets/cartesi.png";
import alphablocks from "../../public/assets/alphablocks.png";
import avalanche from "../../public/assets/avalanche.png";
import { useTheme } from "@/hooks/store/useTheme";
import Image from "next/image";

type PartnerProps = {
  partnerImages: string[];
};

const Partner: React.FC<PartnerProps> = ({ partnerImages }) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;

  return (
    <div
      className={` ${
        theme ? "bg-darkmode" : "bg-white"
      } mb-12 border-t border-b border-gray-500 py-8 w-full`}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <p
          className={` ${
            theme ? "text-white" : "text-black"
          } text-[30px] md:text-[50px] font-medium`}
        >
          Our Partners
        </p>
        <p
          className={` ${
            theme ? "text-white" : "text-black"
          } text-[14px] md:text-[28px] w-[95%] text-center`}
        >
          In{" "}
          <span className="text-blockchain-green font-raleway text-[14px] md:text-[28px]">
            BlockchainUNN
          </span>{" "}
          community, we believe in the power of partnership and collaboration.
        </p>
      </div>
      <div className="my-8 w-full overflow-x-hidden overflow-y-hidden">
        <div className="flex gap-4 md:animate-scroll-right animate-scroll-right1">
          {partnerImages.map((image, index) => (
            <div
              key={index}
              className={`${
                theme ? "bg-black" : "bg-black"
              } h-[123px] w-[258px] rounded-2xl flex items-center justify-center flex-shrink-0 px-4 py-2`}
            >
              <Image
                width={500}
                src={image}
                alt={`partner-${index}`}
                className="w-auto h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Partners = () => {
  const partnerImages = [
    avalanche,
    garage,
    alphablocks,
    gida,
    cartesi,
    avalanche,
  ];

  return <Partner partnerImages={partnerImages} />;
};

export default Partners;
