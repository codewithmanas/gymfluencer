import { benefits } from "@/constants/benefits";
import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <div className="w-full mt-8">
      <div className="p-[60px]">
        <div className="flex flex-col items-center gap-4 mb-16">
          <div className="bg-[#131315] border border-[#1D1D20] rounded-[100px] flex items-center gap-1 px-[12px] py-[10px]">
            <Image
              src="/assets/images/asset13.svg"
              alt="star"
              width={20}
              height={20}
            />
            <span className="text-[16px]  font-medium text-white leading-[150%]  font-[family-name:var(--font-space-grotesk)]">
              Our Benefits
            </span>
          </div>

          <h1 className="text-[#EB0000] font-[family-name:var(--font-orbitron)] text-[50px] font-bold leading-[120%]">
            Discover GymFluencer Benefits
          </h1>
          <p className="text-[16px] max-w-[424px] text-center text-[#DCDCDC] font-normal leading-150 font-[family-name:var(--font-space-grotesk)]">
            Unlock your full potential with GymFluencer your personal fitness
            partner for progress and motivation
          </p>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          <div className="p-8 rounded-md border border-[#1D1D20] bg-[#09090A]">
            <div className="bg-[#18181A] rounded-2xl w-fit p-4">
              <Image src={benefits[0].icon} alt="star" width={32} height={32} />
            </div>

            <div className="text-[#EB0000] mt-8 font-[family-name:var(--font-orbitron)] text-[22px] font-semibold">
              {benefits[0].title}
            </div>
            <p className="text-[18px] mt-4 text-left text-[#94969D] font-medium leading-150 font-[family-name:var(--font-space-grotesk)]">
              {benefits[0].description}
            </p>
          </div>

          <div className="grid_image relative rounded-md">
            <Image
              src="/assets/images/asset16.png"
              alt="star"
              width={32}
              height={32}
              unoptimized
              className="w-full h-full absolute left-0 top-0 object-contain"
            />
            <Image
              src="/assets/images/asset17.png"
              alt="star"
              width={32}
              height={32}
              unoptimized
              className="w-[90%] h-[90%] object-contain rounded-xl absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%]"
            />
          </div>

          <div className="p-8 rounded-md border border-[#1D1D20] bg-[#09090A]">
            <div className="bg-[#18181A] rounded-2xl w-fit p-4">
              <Image src={benefits[2].icon} alt="star" width={32} height={32} />
            </div>

            <div className="text-[#EB0000] mt-8 font-[family-name:var(--font-orbitron)] text-[22px] font-semibold">
              {benefits[2].title}
            </div>
            <p className="text-[18px] mt-4 text-left text-[#94969D] font-medium leading-150 font-[family-name:var(--font-space-grotesk)]">
              {benefits[2].description}
            </p>
          </div>

          <div className="p-8 rounded-md border border-[#1D1D20] bg-[#09090A]">
            <div className="bg-[#18181A] rounded-2xl w-fit p-4">
              <Image src={benefits[1].icon} alt="star" width={32} height={32} />
            </div>

            <div className="text-[#EB0000] mt-8 font-[family-name:var(--font-orbitron)] text-[22px] font-semibold">
              {benefits[1].title}
            </div>
            <p className="text-[18px] mt-4 text-left text-[#94969D] font-medium leading-150 font-[family-name:var(--font-space-grotesk)]">
              {benefits[1].description}
            </p>
          </div>

          <div className="p-8 rounded-md border border-[#1D1D20] bg-[#09090A]">
            <div className="bg-[#18181A] rounded-2xl w-fit p-4">
              <Image src={benefits[3].icon} alt="star" width={32} height={32} />
            </div>

            <div className="text-[#EB0000] mt-8 font-[family-name:var(--font-orbitron)] text-[22px] font-semibold">
              {benefits[3].title}
            </div>
            <p className="text-[18px] mt-4 text-left text-[#94969D] font-medium leading-150 font-[family-name:var(--font-space-grotesk)]">
              {benefits[3].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
