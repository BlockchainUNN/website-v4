import Image from "next/image";
const journeyImages = [
  {
    text: "BlockchainUNN Conference is happening in person",
    gridSpan: "md:col-span-3 bg-[#C89A04]",
  },
  {
    text: "Teams must contain a max of 5 people",
    gridSpan: "md:col-span-3 bg-[#51604D]",
  },
  {
    text: "A minimum of 3 team members must be at the venue for judging",
    gridSpan: "md:col-span-6 bg-[#024539]",
  },
  {
    text: "All projects must be blockchain related",
    gridSpan: "md:col-span-3 bg-[#51604D]",
  },
  {
    text: "No online submissions",
    gridSpan: "md:col-span-3 bg-[#C89A04]",
  },
];
export default function HackerHome() {
  return (
    <div className="bg-[url('/assets/events/hero_bg.jpg')] bg-cover bg-center w-full md:w-[65vw] h-fit pt-16 space-y-12">
      <section className="w-1/2 lg:w-1/3 mx-auto flex items-center justify-center gap-5 lg:gap-3">
        <div className="w-full md:max-w-md">
          <Image
            src="/assets/events/buildathon.png"
            alt="Buildathon Hero"
            width={240}
            height={135}
            className="object-contain"
          />
        </div>
        <p
          className="text-4xl lg:text-7xl text-[#008b37] font-extrabold relative inline-block"
          style={{
            textShadow:
              "-4px 4px 0 #014736, -8px 8px 0 #014736, 0px 2px 12px rgba(0,0,0,0.25)",
          }}
        >
          Rules
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-rows-3 md:grid-cols-6 w-full lg:max-h-[50vh] mt-auto">
        {journeyImages.map((item, index) => (
          <div
            key={index}
            className={`${item.gridSpan} p-3 text-center relative w-full h-[18vh] border-2 border-black border-collapse flex items-center justify-center text-xl lg:text-3xl group overflow-hidden`}
          >
            {item.text}
          </div>
        ))}
      </section>
    </div>
  );
}
