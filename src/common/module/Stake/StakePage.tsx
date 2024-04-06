"use client";
import Button from "@/common/component/element/Button";
import { motion } from "framer-motion";
import React, { useState } from "react";

export default function StakePage() {
  const [inputAmount, setInputAmount] = useState("");

  const handleInputChange = (e: any) => {
    setInputAmount(e.target.value);
  };

  const handleButtonClick = () => {
    if (inputAmount.trim() === "" || parseFloat(inputAmount) === 0) {
      alert("Stake action");
    } else {
      alert("Approve action");
    }
  };

  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-center items-center px-5 lg:px-10  w-full mt-32 overflow-hidden ">
      <div className=" lg:w-[40%] flex flex-col gap-5 justify-center items-center">
        <div className="border-[2px] border-[#1651f5] rounded-2xl px-5 py-5 w-full bg-gray-800 flex flex-col justify-start items-start gap-2">
          <h1>Your Balance</h1>
          <div>
            <Button
              className="!h-auto !py-1 !px-2 !rounded-full !bg-[#1651f5] !text-white !font-semibold !text-base "
              onClick={() => alert("Hello")}
              color="default"
              HoverColor="bg-neutral-100"
              label="Connect Wallet"
              textColor="text-white"
            />
          </div>
        </div>

        <div className="border-[2px] border-[#1651f5] rounded-2xl px-5 py-5 w-full bg-gray-800 flex  flex-col justify-start items-start gap-2">
          <div className="grid grid-cols-2 w-full">
            <div className="flex-col flex ">
              <h1>Your HTAO</h1>
              <h1 className="text-5xl font-semibold font-mono">0.0</h1>
            </div>
            <div className="rounded-2xl border-2 border-[#1651f5] flex justify-center items-center">
              <h1 className="lg:text-base text-sm">Please connect your wallet</h1>
            </div>
          </div>
          <div className="w-full mt-7 flex flex-col gap-2">
            <h1 className="text-gray-300">Enter Amount</h1>
            <div className="bg-[#00081D]  rounded-2xl  ">
              <input
                type="number"
                placeholder="0"
                onChange={handleInputChange}
                value={inputAmount}
                className="outline-0 bg-transparent rounded-2xl px-3 py-3 w-full border-[2px] border-gray-500 focus:border-[#1651f5] relative"
              />
            </div>
            <h1 className="text-gray-300">Allowance: 0 HTAO</h1>
          </div>

          <div className="w-full flex justify-center items-center py-5">
            <motion.button
              whileTap={{
                scale: 0.98,
              }}
              className="bg-[#1651f5] w-full px-5 py-3 rounded-2xl"
              onClick={handleButtonClick}
            >
              {inputAmount.trim() === "" || parseFloat(inputAmount) === 0
                ? "Stake"
                : "Approve"}
            </motion.button>
          </div>
        </div>

        <div className="w-full flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-semibold">Your Stakes</h1>
          <h1>The tokens you have staked will appear here</h1>
        </div>
      </div>
    </div>
  );
}
