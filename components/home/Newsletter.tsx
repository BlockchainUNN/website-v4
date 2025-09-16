import { useTheme } from "@/hooks/store/useTheme";
import React from "react";

const Newsletter = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;
  return (
    <div className="px-2 md:px-8 py-4 mt-12 mb-12">
      <div
        className={`flex flex-col items-center justify-center p-[1rem] md:p-[3rem] w-full border border-gradient rounded-xl ${
          theme ? "bg-gradient-to-r to-[#000] from-[#575757]" : "bg-white"
        }`}
      >
        <div
          className={`w-full flex flex-col items-center gap-2 justify-center bg-black rounded-xl ${
            theme ? "border-gradient" : "border-none"
          } py-6 md:py-12`}
        >
          <p
            className={` ${
              theme ? "text-blockchain-white" : "text-blockchain-white"
            } text-[22px] md:text-[50px] font-semibold md:font-medium`}
          >
            Subscribe to our Newsletter
          </p>
          <p
            className={` ${
              theme ? "text-white" : "text-white"
            } text-[12px] md:text-[25px] w-[85%] md:w-[85%] text-center`}
          >
            Stay connected with the latest tech and blockchain trends and news
            and discover how we are shaping the future.
          </p>

          <div className="my-2 md:my-8 w-full mx-auto md:w-[85%] flex justify-center">
            {/* <form className="flex flex-col gap-4 items-center p-4 rounded-full relative bg-blockchain-white h-[60px] md:h-[75px]">
              <input
                type="text"
                placeholder="Email us now to get updated"
                className={` ${
                  theme ? "bg-blockchain-white" : "bg-transparent"
                } 
                text-[14px] md:text-[18px] text-black w-[60%] md:w-[63%] py-2 px-3 md:px-6 absolute left-2 bottom-2 z-50 h-[45px] md:h-[60px] 
                border-none rounded-full active:border-none focus:border-none focus-visible:border-none focus:outline-none`}
              />
              <button
                className={` ${
                  theme
                    ? "bg-gradient-to-r from-[#02641c] to-[#04ca39]"
                    : "bg-gradient-to-r from-[#02641c] to-[#04ca39]"
                } 
                text-white text-[14px] font-medium md:text-[18px] w-1/3 py-2 px-4 
                rounded-full absolute right-2 bottom-2 h-[45px] md:h-[60px]`}
              >
                Subscribe
              </button>
            </form> */}
            <SubstackForm />
          </div>
        </div>
      </div>
    </div>
  );
};

const SubstackForm = () => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;
  return (
    <div className="w-full">
      {theme ? (
        <iframe
          src="https://blockchainunn.substack.com/embed"
          width="100%"
          height="150"
          style={{
            border: "1px solid #EEE",
            background: "black",
          }}
          frameBorder="0"
          title="blockchainunn Substack"
          scrolling="no"
        ></iframe>
      ) : (
        <iframe
          src="https://blockchainunn.substack.com/embed"
          width="100%"
          height="150"
          style={{
            border: "1px solid #EEE",
            background: "white",
          }}
          frameBorder="0"
          title="blockchainunn Substack"
          scrolling="no"
        ></iframe>
      )}
    </div>
  );
};

export default Newsletter;
