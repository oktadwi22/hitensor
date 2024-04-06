import React from "react";
import { IoWalletOutline } from "react-icons/io5";

interface ButtonViewAllProps {
  title?: string;
  className?: string;
}

const ButtonConect: React.FC<ButtonViewAllProps> = ({
  title = "",
  className = "",
}) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const x = e.pageX - e.currentTarget.offsetLeft;
    const y = e.pageY - e.currentTarget.offsetTop;

    e.currentTarget.style.setProperty("--x", x + "px");
    e.currentTarget.style.setProperty("--y", y + "px");
  };

  return (
    <button
      className={
        
        `${className} btn relative group gap-2 inline-flex items-center justify-center px-8 py-3 bg-neutral-900 text-white text-base  tracking-wide rounded-full`
    }
      onMouseMove={handleMouseMove}
    >
      <IoWalletOutline size={20} className="group-hover:text-black transition-all duration-300" />
      <span className="z-10 group-hover:text-neutral-900 group-hover:font-bold transition-all duration-300">
        {title}
      </span>
    </button>
  );
};

export default ButtonConect;
