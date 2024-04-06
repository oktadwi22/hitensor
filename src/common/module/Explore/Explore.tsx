import Image from "@/common/component/element/Image";
import React from "react";

export default function Explore() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-center items-center px-5 lg:px-10  w-full mt-32 overflow-hidden ">
      <div className="w-full  z-[9] items-center flex-col gap-5 flex justify-center">

        <div className="lg:w-[40%] w-full flex  flex-col border-[1px] border-gray-500 rounded-2xl px-5 py-5">
          <div className="flex justify-center items-center">
            <Image
              src="/long_logo.png"
              alt="Nav Logo"
              width={130}
              height={130}
              className="w-[160px] h-auto object-cover !px-0"
            />
          </div>

          <div className="w-full flex justify-start gap-16 items-center py-5">
            <div>
              <h1>
                0
              </h1>
              <h1>
                Total GPUs
              </h1>
            </div>
            <div>
              <h1>
                0
              </h1>
              <h1>
                Total CPUs
              </h1>
            </div>
          </div>

        </div>

        <div className="lg:w-[40%] w-full flex justify-between lg:flex-row flex-col gap-5 lg:gap-10 items-center">
        <div className="w-full border-[1px] border-gray-500 rounded-2xl gap-5 flex px-5 py-2 justify-center items-center">
            <Image
              src="/nvidia.png"
              alt="Nav Logo"
              width={130}
              height={130}
              className="w-[50px] h-auto object-cover !px-0"
            />
          <h1 className="text-2xl">
            NVIDIA
          </h1>
          </div>
        <div className="w-full border-[1px] border-gray-500 rounded-2xl gap-5 flex px-5 py-2   justify-center items-center">
            <Image
              src="/apple.png"
              alt="Nav Logo"
              width={130}
              height={130}
              className="w-[50px] h-auto object-cover !px-0"
            />
          <h1 className="text-2xl">
            APPLE
          </h1>
          </div>
        </div>

        <div className="w-full  flex-col flex justify-center items-center">
          <h1 className="text-base text-gray-500 py-5">
          Transparent Live Pricing
          </h1>

        <div className="w-full flex items-center justify-center px-5 py-10 border-[1px] border-gray-400 rounded-3xl">
          <div className="py-10">
            <h1 className="text-base text-gray-500 ">
              No data yet
            </h1>
          </div>
        </div>

        </div>

      </div>
    </div>
  );
}
