import React from "react";
import Image from "../element/Image";

export default function Logo() {
  return (
    <div className="w-full overflow-hidden">
      <Image 
      src='/long_logo.png'
      alt="Nav Logo"
      width={130}
      height={130}
      className="w-[160px] h-auto object-cover !px-0"
      />
    </div>
  );
}
