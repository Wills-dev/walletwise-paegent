import Image from "next/image";

import Container from "@/components/atoms/Container/Container";
import Circle from "@/components/atoms/Circle/Circle";

const HeroSection = () => {
  return (
    <div className="bg-linear-to-b from-[#7E1416] to-[#000000] relative">
      <Circle className="-top-2 -left-2 bg-red-700/20" />
      <Circle className="top-10 left-10 bg-red-700/20" />
      <Circle className="top-11 left-20 bg-red-700/20" />
      <Container>
        <div className="md:py-28 py-16 flex gap-10 justify-between flex-wrap w-full z-10">
          <div className="max-w-170.75 w-full sm:min-w-125 min-w-70">
            <div className="">
              <h2 className="leading-[0.74] tracking-[-0.06em] text-[48px] sm:text-[72px] md:text-[100px] lg:text-[131.66px] font-Meie_Script text-white/90">
                Miss
              </h2>
              <h6 className="font-fraunces text-white/90 font-bold uppercase leading-[0.9] tracking-normal text-[42px] sm:text-[64px] md:text-[84px] lg:text-[107.66px]">
                Indigenous Nigeria
              </h6>
              <div className="mt-4">
                {" "}
                <p className="border border-[#D4B0381A] bg-white/90 text-[#6D0D0F] font-geist font-bold leading-[0.9] tracking-[0.074em] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[27px] w-full max-w-fit rounded-2xl px-[22.08px] py-[16.08px]">
                  10TH EDITION 2026
                </p>
              </div>
            </div>
            <div className="pt-6">
              <p className="text-white font-freehand tracking-normal leading-[1.66] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px]">
                Theme
              </p>
              <p className="font-extrabold uppercase leading-none tracking-normal text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44.34px] text-white font-bebas_neue">
                More than just a pageant
              </p>
              <div className="w-full max-w-fit rounded-2xl border border-dashed border-white/20 p-6 mt-4 bg-white/5">
                <p className="text-white font-medium leading-none tracking-normal text-[16px] sm:text-[18px] md:text-[20px] font-fraunces">
                  GRAND FINALE @{" "}
                  <span className="text-[#D4B038]">
                    TRANSCORP HILTON, ABUJA
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full flex justify-center">
            <div className="w-full max-w-121.75 lg:min-w-100 aspect-487/709">
              <Image
                src="/assets/images/beauty.svg"
                alt="beauty"
                width={487}
                height={709}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
