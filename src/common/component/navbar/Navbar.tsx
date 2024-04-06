"use client";
import Link from "next/link";
import NavMobile from "./NavMobile";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavigationItem } from "../../constant/NavigationItem";
import { usePathname } from "next/navigation";
import ButtonConect from "../element/ButtonConect";
import H1Hover from "../element/H1Hover";
import Logo from "./Logo";

const Navbar = () => {
  const pathname = usePathname();
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [scroll, setScrolled] = useState<boolean>(false);

  const handleOpen = () => {
    setOpenNav(!openNav);
  };

  const close = () => {
    setOpenNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 10);
    });
  }, []);

  return (
    <motion.div
      className={
        `${scroll ? "backdrop-blur-sm border-b-[1px] border-neutral-800" : ""} w-full transition-all duration-300 mx-auto bg-[#00081dc4]  max-w-[1500px]  pt-5 border-b-[1px] border-neutral-700 px-5 2xl:rounded-3xl  lg:px-10 fixed top-0 z-[99]`
      }
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex w-full  items-start justify-start">
          <Link
            href="/"
            className="group relative w-auto flex justify-start items-center gap-2"
          >
            <Logo />

          </Link>
        </div>
        

        <div className="flex   w-full items-end justify-end">
          <Link href="/" className=" flex justify-end">
            <ButtonConect
              title="Connect"
              className="hover:!bg-[#EEEEEE] transition-colors duration-300 overflow-hidden !bg-transparent outline outline-1 outline-[#EEEEEE] !text-[#EEEEEE] w-auto !py-2"
            />
          </Link>
        </div>
      </div>
      <div className="flex  pt-5 rounded-2xl relative justify-start gap-5 items-center w-auto ">
          {NavigationItem.map((item, index) => (
            <H1Hover
              key={index}
              href={item.src}
              title={item.title}
              item={item.src}
              pathname={pathname}
            />
          ))}
        </div>
    </motion.div>
  );
};

export default Navbar;
