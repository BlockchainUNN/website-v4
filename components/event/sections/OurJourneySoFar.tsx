import Image from "next/image";
import Link from "next/link";

const journeyImages = [
  {
    url: "/assets/gallery.png",
    alt: "Journey 1",
    gridSpan: "md:col-span-3",
  },
  {
    url: "/assets/winner.png",
    alt: "Journey 2",
    gridSpan: "md:col-span-3",
  },
  {
    url: "/assets/grid3.jpg",
    alt: "Journey 3",
    gridSpan: "md:col-span-6",
  },
  {
    url: "/assets/winner2.png",
    alt: "Journey 4",
    gridSpan: "md:col-span-2",
  },
  {
    url: "/assets/winner4.png",
    alt: "Journey 5",
    gridSpan: "md:col-span-2",
  },
  {
    url: "/assets/winner3.png",
    alt: "Journey 6",
    gridSpan: "md:col-span-2",
  },
];

export default function OurJourneySoFar() {
  return (
    <section className="w-full min-h-screen h-auto bg-[url('/assets/events/hero_bg.jpg')] bg-cover bg-center overflow-y-auto">
      <div className="w-full flex items-center justify-center py-10">
        <h3 className="bg-gradient-to-r uppercase tracking-0 from-[#02270C] to-[#011607] bg-clip-text text-transparent lg:text-6xl text-4xl font-extrabold">
          Our Journey So Far
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 w-full max-h-[calc(100vh-100px)]">
        {journeyImages.map((image, index) => (
          <div
            key={index}
            className={`${image.gridSpan} relative w-full h-full group overflow-hidden`}
          >
            <Link
              href=""
              className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 backdrop-blur-xs flex items-center justify-center group-hover:translate-y-0 transform translate-y-full overflow-hidden"
              style={{
                transition: "all 0.25s cubic-bezier(.74,1,.48,.78)",
              }}
            >
              <span className="flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/events/video.svg"
                  alt="youtube"
                  className="hover:sepia hover:saturate-[10000%] hover:hue-rotate-90 transition-all duration-300 w-12 h-12"
                  width={100}
                  height={100}
                />
              </span>
            </Link>

            <Image
              src={image.url}
              alt={image.alt}
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
