/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ransom from "../../public/assets/events/feedback/ransom.jpg";
import gloria from "../../public/assets/events/feedback/gloria.jpg";
import fortune from "../../public/assets/events/feedback/fortune.jpg";
import henry from "../../public/assets/events/feedback/henry.jpg";
import peter from "../../public/assets/events/feedback/peter.jpg";
import samson from "../../public/assets/events/feedback/samson.jpg";
import { useTheme } from "@/hooks/store/useTheme";
import Image from "next/image";

const Feedback = ({
  feedbackData,
}: {
  feedbackData: {
    image: any;
    name: string;
    username: string;
    message: string;
  }[];
}) => {
  const { isDarkMode } = useTheme();
  const theme = isDarkMode;

  return (
    <div className="mt-8 mb-8 flex flex-col gap-8 items-center justify-center w-full">
      <h2
        className={`${
          theme ? "text-white" : "text-black"
        } text-[24px] md:text-[48px] font-semibold`}
      >
        Community Feedbacks
      </h2>

      <div className="flex flex-row md:flex-wrap  w-[99%] overflow-x-hidden md:w-full gap-[2.5rem] items-center justify-center ">
        {feedbackData.map((feedback, index: React.Key | null | undefined) => (
          <div
            key={index}
            className={`${
              theme
                ? "bg-dark-mode border-gradient"
                : "bg-white rounded-xl shadow-lg"
            } w-[230px] h-fit flex-shrink-0 md:w-[400px] md:h-fit  animate animate-scroll-right md:animate-none`}
          >
            <div
              className={` ${
                theme ? "text-white" : "text-black"
              } flex flex-col gap-4 p-4`}
            >
              <div className="flex justify-between">
                <div className="flex justify-evenly items-center gap-2">
                  <Image
                    width={500}
                    src={feedback.image}
                    alt="profile"
                    className="w-[39px] md:w-[57px] h-[39px] md:h-[57px] rounded-full"
                  />
                  <div>
                    <p className="text-[13px] md:text-[18px] font-medium">
                      {feedback.name}
                    </p>
                    <p className="text-[10px] md:text-[12px]">
                      {feedback.username}
                    </p>
                  </div>
                </div>
                <div className=" w-[31px] h-[31px] items-center justify-center rounded-md hidden md:flex">
                  {/* <img src={x} alt='x' className="w-[70%] h-[70%]" /> */}
                </div>
              </div>
              <p className="text-[9px] md:text-[18px]">{feedback.message}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Sample feedback data
const feedbackData = [
  {
    name: "Ransom Eze",
    username: "Frontend Dev & Upcoming Blockchain Dev",
    message: `BlockchainUNN opened my eyes to possibilities beyond academics and introduced me to blockchain technology. This exposure has shaped my career path as I now pursue becoming a blockchain and smart contract developer.`,
    image: ransom,
  },
  {
    name: "Henry Igwe",
    username: "Frontend Web Developer",
    message:
      "After attending BlockchainUNN's conference on blockchain and cryptocurrency in March 2022, I was inspired to join the organization. With their guidance and mentorship, I developed into a React developer and am proud to be a product of BlockchainUNN.",
    image: henry,
  },
  {
    name: "Fortune Atueyi",
    username: "Web3 Project Manager",
    message:
      "The BlockchainUNN conference 2.0 introduced me to blockchain technology and provided valuable insights through expert speakers. This knowledge led to my first Web3 job opportunity, which provided financial rewards.",
    image: fortune,
  },
  {
    name: "Samson Damian",
    username: "Research Analyst",
    message:
      "BlockchainUNN's conference 1.0 helped me understand blockchain technology and sparked my interest in web development. Through their weekly sessions and cohort program, I evolved from a complete beginner into a tech professional.",
    image: samson,
  },
  {
    name: "Obi Nnaemeka Simon-Peter",
    username: "Full-stack Developer",
    message:
      "After joining BlockchainUNN through their second conference, their bootcamp helped me transition from Web2 to Web3 development. The community's events, programs, and supportive members have significantly impacted my career growth.",
    image: peter,
  },
  {
    name: "Madubueze Gloria Ifeoma",
    username: "Web Developer",
    message:
      "At my first tech event, BlockchainUNN's conference 1.0 in 2022, I won a laptop which kickstarted my tech journey. The organization has remained a constant source of inspiration and support throughout my career development.",
    image: gloria,
  },
];

const FeedbackPage = () => {
  return (
    <div className="w-full">
      <Feedback feedbackData={feedbackData} />
    </div>
  );
};

export default FeedbackPage;
