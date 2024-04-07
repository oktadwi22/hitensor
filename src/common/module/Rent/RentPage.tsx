'use client'
import Button from "@/common/component/element/Button";
import { ButtonSpot } from "@/common/component/element/ButtonSpot";
import Image from "@/common/component/element/Image";
import { RentDataItem } from "@/common/constant/RentDataItem";
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GrFormClose } from "react-icons/gr";

export default function RentPage() {

  const data = useRef(RentDataItem)

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<number>(0);

  const [duration, setDuration] = useState<string>("1 Month");



  const handleOpenModal = (index: number) => {
    setOpenModal(true);
    setSelectedItem(index);
  };

  return (
    <div className={` h-auto max-w-[1500px]  flex flex-col justify-center items-center px-5 lg:px-10  w-full mt-32 overflow-hidden `}>
      <div className={openModal ? 'blur-md ' : ''}>
        <div className="w-full z-[9] items-center gap-5 flex justify-center">
          <div className=" w-[12rem] flex  flex-col border-[1px] border-[#9DB0D8] rounded-xl px-2 py-1.5">
            <div className="flex justify-start gap-2 items-center">
              <h1 className="text-[#9DB0D8]">•</h1>
              <Image
                src="/long_logo.png"
                alt="Nav Logo"
                width={130}
                height={130}
                className="w-[90px] h-auto object-cover !px-0"
              />
            </div>
          </div>
          <div className=" w-[12rem] flex  flex-col border-[1px] border-gray-700 rounded-xl px-2 py-1.5">
            <div className="flex justify-start gap-2 items-center">
              <h1 className="text-gray-700 ">•</h1>
              <h1 className="text-gray-700 text-sm">CLOUD FULL</h1>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center flex-col items-center py-10 "
        >
          <div>
            <h1 className="text-3xl">More Server Coming</h1>
          </div>

          <div className="grid md:grid-cols-2 gap-5 w-full mt-10">
            {RentDataItem.map((item,index) => (
              <div key={index} className="border-[1px] border-[#91AEFF] px-3 py-5 rounded-2xl">
                <div className="w-full flex justify-center items-center">
                  <h1 className="text-3xl text-[#91AEFF]">{item.title}</h1>
                </div>

                {/* Spesifikasi */}

                <div className="w-full flex flex-col justify-start items-start px-5 mt-5">
                  <h1>{item.cpu}</h1>

                  <h1>{item.ram}</h1>

                  <h1>{item.nvme}</h1>

                  <h1>{item.nic}</h1>

                  <h1>{item.os}</h1>

                  <h1>{item.rack}</h1>

                  <h1>{item.optional}</h1>
                </div>
                <div className="w-full flex justify-center items-center py-5">
                  <Button
                    className="!text-5xl !w-full !font-bold"
                    onClick={() => handleOpenModal(index)}
                    color="default"
                    HoverColor="bg-neutral-100"
                    label="Buy Now"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
     
        <AnimatePresence >
          {openModal && (
            <motion.div
              initial={{
                translateY: 50,
                scale: 0.7,
                opacity: 0,
              }}
              animate={{
                translateY: 0,
                scale: 1,
                opacity: 1,
              }}
              exit={{
                translateY: 50,
                scale: 0.7,
                opacity: 0,
              }}
              className=" ring-1 ring-[#91AEFF] backdrop-blur-sm w-[80%] md:w-[45%] xl:w-[45%] left-[10%] 2xl:w-[25%] mx-auto rounded-3xl flex  inset-44  h-[420px]  bg-neutral-900 fixed z-[999] "
            >
              <div className="w-full justify-center items-center py-2 ">
                <button
                  className=" w-auto flex items-end justify-end relative left-[88%] lg:left-[92%]"
                  onClick={() => setOpenModal(!openModal)}
                >
                  <GrFormClose size={30} />
                </button>
                <div className="w-full px-5 flex flex-col gap-4 justify-center items-center">
                  <h1 className="text-2xl ">
                    Rent server
                  </h1>
                  <h1 className="text-2xl py-2 ">
                  {data.current[selectedItem].title}
                  </h1>
                  <h1 className="text-2xl -mb-2 ">
                    Duration
                  </h1>
                  <div className="grid grid-cols-3 gap-10">
                    <button className={duration === "1 Month" ? 'text-sm md:text-xl text-[#91AEFF]': 'text-sm md:text-xl'}
                    onClick={() => setDuration("1 Month")}>
                     🔘 1 Month
                    </button>
                    <button className={duration === "2 Months" ? 'text-sm md:text-xl text-[#91AEFF]': 'text-sm md:text-xl'}
                    onClick={() => setDuration("2 Months")}>
                    🔘 2 Months
                    </button>
                    <button className={duration === "6 Months" ? 'text-sm md:text-xl text-[#91AEFF]': 'text-sm md:text-xl'}
                    onClick={() => setDuration("6 Months")}>
                    🔘 6 Months
                    </button>
                  </div>
                  <div className=" flex flex-col items-center mt-2 justify-center ">
                  <h1 className="text-2xl">
                    Total
                  </h1>
                  <h1 className="text-3xl font-mono">
                    {data.current[selectedItem].price}ETH
                  </h1>
                  </div>
                  <Button
                    className="!text-5xl !h-10 !w-full !font-bold"
                    color="default"
                    HoverColor="bg-neutral-100"
                    label="Buy Now"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

    </div>
  );
}
