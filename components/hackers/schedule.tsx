
import { cn } from "@/lib/utils";
import Image from "next/image";

const journeyImages = [
  {
    text: (
      <>
        Virtual hackathon with online ideation, workshops, and mentorship to build early-stage projects.
      </>
    ),
    date: "19th Oct – 2nd Nov 2025",
    gridSpan: "md:col-span-6 bg-[#51604D]",
  },
  {
    text: (
      <>
        Physical workshops at the University of Nigeria, Nsukka, featuring hands-on training for all participants.
      </>
    ),
    date: "3rd – 6th Nov 2025",
    gridSpan: "md:col-span-6 bg-[#C89A04]",
  },
  {
    text: (
      <>
        Judges’ review and top projects gets to pitch.
      </>
    ),
    date: "7th Nov 2025",
    gridSpan: "md:col-span-3 bg-[#024539]",
  },
  {
    text: (
      <>
        Conference Day and Hackathon Winners Announcement.
      </>
    ),
    date: "8th Nov 2025",
    gridSpan: "md:col-span-3 bg-[#51604D]",
  },
]

export default function HackerSchedule() {
  return (
    <div
      className="bg-[url('/assets/events/hero_bg.jpg')] bg-cover bg-center w-full lg:w-[65vw] h-full pt-16 space-y-12"
 
    >
      <section className="w-3/5 lg:w-2/5 mx-auto flex items-center justify-center gap-3">
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
          className="text-3xl lg:text-6xl text-[#008b37] font-extrabold relative inline-block"
          style={{
            textShadow:
              "-4px 4px 0 #014736, -8px 8px 0 #014736, 0px 2px 12px rgba(0,0,0,0.25)",
          }}
        >
          Schedule
        </p>
      </section>
      <section className="grid grid-cols-1 md:grid-rows-3 md:grid-cols-6 w-full lg:max-h-[50vh] mt-auto">
        {journeyImages.map((item, index) => (
          <div
            key={index}
            className={`${item.gridSpan} relative p-3 text-center w-full h-[18vh] border-2 border-black border-collapse flex items-center justify-center text-3xl group overflow-hidden`}
          >
            <span
              className={cn(
                "border-3 border-black w-3/4 h-10 absolute top-3 text-lg lg:text-2xl text-center bg-[#00cd51] flex items-center justify-center rounded left-1/2 -translate-x-1/2"
               
              )}
            >
             {item.date.toUpperCase()}
            </span>
            <div className="w-full flex flex-col items-center justify-center text-xl lg:text-2xl mt-8 p-3">
              {item.text}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}