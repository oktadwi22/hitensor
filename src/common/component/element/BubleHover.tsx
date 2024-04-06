import clsx from "clsx";
import React from "react";

interface BubleHoverProps {
  bgHover: string;
  color: 'default' | 'secondary' | 'primary'
}

export default function BubleHover({bgHover, color}: BubleHoverProps) {
  const changeBg = color === "secondary" ? "bg-black" : `${bgHover}`
  return (
    <>
      <div className={clsx(changeBg,`absolute ${bgHover} w-[50px] h-[50px]  rounded-3xl  transition-all duration-500 group-hover:translate-y-[-50%]  translate-y-[130%]`)}></div>
      <div className={clsx(changeBg,`absolute ${bgHover} w-[50px] h-[50px] left-0  rounded-3xl transition-all duration-500 group-hover:translate-y-[-50%]  translate-y-[130%]`)}></div>
      <div className={clsx(changeBg,`absolute ${bgHover} w-[50px] h-[50px] left-[15%]  rounded-3xl transition-all duration-500 group-hover:translate-y-[-50%]  translate-y-[130%]`)}></div>
      <div className={clsx(changeBg,`absolute ${bgHover} w-[50px] h-[50px] left-[28%]  rounded-3xl transition-all duration-500 group-hover:translate-y-[-50%]  translate-y-[130%]`)}></div>
      <div className={clsx(changeBg,`absolute ${bgHover} w-[50px] h-[50px] left-[58%]  rounded-3xl transition-all duration-500 group-hover:translate-y-[-50%]  translate-y-[130%]`)}></div>
      <div className={clsx(changeBg,`absolute ${bgHover} w-[50px] h-[50px] left-[68%]  rounded-3xl transition-all duration-500 group-hover:translate-y-[-50%]  translate-y-[130%]`)}></div>
      <div className={clsx(changeBg,`absolute ${bgHover} w-[50px] h-[50px] left-[78%]  rounded-3xl transition-all duration-500 group-hover:translate-y-[-50%]  translate-y-[130%]`)}></div>
      <div className={clsx(changeBg,`absolute ${bgHover} w-[50px] h-[50px] right-0  rounded-3xl transition-all duration-500 group-hover:translate-y-[-50%]  translate-y-[130%]`)}></div>
      <div className={clsx(changeBg,`absolute ${bgHover} inset-0 rounded-3xl transition-all duration-500 group-hover:translate-y-[0%] translate-y-[130%]`)}></div>
    </>
  );
}
