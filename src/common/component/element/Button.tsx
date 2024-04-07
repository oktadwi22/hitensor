"use client";
import { ReactNode } from "react";
import BubleHover from "./BubleHover";
import clsx from "clsx";


export interface ButtonProps {
    label: any;
    size?: "small" | "medium" | "large";
    color?: "default" | "primary" | "secondary";
    icon?: ReactNode;
    iconPosition?: "left" | "right";
    tooltip?: string;
    tooltipPosition?: "top" | "bottom" | "left" | "right";
    onClick?: () => void;
    HoverColor?: string;
    textColor?: string;
    className?: string;
  }

const Button: React.FC<ButtonProps> = ({
  label,
  color = "default",
  HoverColor = "",
  onClick,
  className= '',
}) => {
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const rotate = "group-hover:rotate-90 transition-all";

  return (
    <div className="w-full relative group">
      <button
        onClick={handleClick}
        className={clsx(
        //   getButtonPadding(size),
          className,
          `text-black bg-[#91AEFF] w-full h-[60px] py-1  rounded-lg focus:outline-none overflow-hidden flex items-center justify-center relative`
        )}
      >
        <div
          className={clsx(
            color === "secondary"
              ? "group-hover:text-white "
              : "group-hover:text-black ",
            `relative z-[99] flex justify-center items-center transition-all duration-500`
          )}
        >

          <h1 className="text-[14px]">{label}</h1>

        </div>

        <BubleHover bgHover={HoverColor} color={color} />
      </button>

      
    </div>
  );
};

const getButtonPadding = (size: "small" | "medium" | "large") => {
  const sizePadding = {
    small: "px-[10px]",
    medium: "px-[50px]",
    large: "px-[70px]",
  };
  return sizePadding[size] || sizePadding.small;
};



export default Button;
