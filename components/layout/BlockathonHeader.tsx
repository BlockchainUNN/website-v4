import Link from "next/link";

const BlockathonHeader = () => {
  return (
    <div className="flex flex-row w-full px-2 md:px-4 py-2 mb-2 items-center justify-evenly md:justify-center gap-4 md:gap-20 bg-[#CBD7CE]">
      <h1 className="text-black md:text-[32px] text-[0.6rem] font-wallpoet font-normal">
        BLOCKATHON 3.0 || HACKATHON & CONFERENCE
      </h1>
      <Link href="/event">
        <button className="bg-gradient-to-r from-green-950 to-green-500 text-white px-4 md:px-8 py-2 rounded-full text-[9px] md:text-[1rem]">
          Register
        </button>
      </Link>
    </div>
  );
};

export default BlockathonHeader;
