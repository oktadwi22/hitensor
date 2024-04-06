"use client";
import Link from "next/link";
import React from "react";

interface H1HoverProps {
  title: string;
  href: string;
  pathname: any;
  item: any;
}

export default function H1Hover({ title, href, pathname, item }: H1HoverProps) {
  return (
    <div className="overflow-hidden pb-1 relative ">
      <Link href={href} className="mb-0 sm:w-[20%] group  overflow-hidden">
        <h1 className="text-[#EEEEEE]  text-base transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700  group-hover:translate-y-[-90%]">
          {title}
        </h1>
        <h1 className="text-[#EEEEEE]  text-base transition ease-[cubic-bezier(1,-0.01, 0.75, 0.11)] duration-700 top-0 translate-y-[100%] group-hover:translate-y-[0%] absolute">
          {title}
        </h1>
        <div
          className={
            
              `${pathname === item &&  'absolute  left-[20%] h-[2px] flex justify-center items-center w-[50%]  bg-white  transition-all duration-300'}  `
          }
        ></div>
      </Link>
    </div>
  );
}
