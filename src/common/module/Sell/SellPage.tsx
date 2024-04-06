"use client";
import Button from "@/common/component/element/Button";
import React from "react";

export default function SellPage() {
  return (
    <div className="h-auto max-w-[1500px]  flex flex-col justify-center items-center px-5 lg:px-10  w-full mt-32 overflow-hidden ">
      <div className="lg:w-[50%] flex flex-col justify-center items-center">
        <h1 className="w-full text-2xl lg:text-4xl leading-[1.4em] text-center">
          Sell Your Computing Power With Ease With Just 3 Steps And Earn $HTAO +
          USDC
        </h1>
        <h1 className="mt-5 text-[#91AEFF] text-center">
          Sell Your Computing Power With Ease With Just 3 Steps And Earn $HTAO +
          USDC
        </h1>
      </div>
      <div className="w-full lg:w-[50%] gap-5 mt-10 flex flex-col justify-center items-center">
        <div className="w-full lg:w-[600px] border-[1px] border-[#91AEFF] gap-5 px-5 py-3 rounded-2xl flex lg:flex-row flex-col justify-between items-center">
          <h1 className="text-3xl">1 Connect your GPU/CPU</h1>
          <div className="lg:w-auto w-full">
            <Button
              className="!h-auto !px-2 !rounded-xl !text-xl !font-semibold"
              onClick={() => alert("Hello")}
              color="default"
              HoverColor="bg-neutral-100"
              label="Connect"
              textColor="text-white"
            />
          </div>
        </div>

        <div className="w-full lg:w-[600px] border-[1px] border-[#91AEFF] gap-5 px-5 py-3 rounded-2xl flex lg:flex-row flex-col justify-between items-center">
          <h1 className="text-3xl">2 Download TensorX</h1>
          <div className="w-full lg:w-auto flex lg:flex-row flex-col gap-2">
            <Button
              className="!h-auto !px-2 !rounded-xl !text-xl !font-semibold"
              onClick={() => alert("Hello")}
              color="default"
              HoverColor="bg-neutral-100"
              label="Windows"
              textColor="text-white"
            />
            <Button
              className="!h-auto !px-2 !rounded-xl !text-xl !font-semibold"
              onClick={() => alert("Hello")}
              color="default"
              HoverColor="bg-neutral-100"
              label="Mac"
              textColor="text-white"
            />
          </div>
        </div>

        <div className="w-full lg:w-[600px] border-[1px] border-[#91AEFF] gap-5 px-5 py-3 rounded-2xl flex justify-between items-center">
          <h1 className="text-3xl">3 Relax and watch your earning</h1>
          
        </div>
      </div>
    </div>
  );
}
