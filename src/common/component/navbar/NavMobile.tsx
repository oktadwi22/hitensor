import NavigationMenuMobile from "./NavigationMenuMobile";

interface NavMobileProps {
  openNav: boolean;
  close: () => void;
  handleOpen: () => void;
}

const NavMobile = ({ openNav, handleOpen, close }: NavMobileProps) => {
  return (
    <div>
      <button onClick={handleOpen} className={`hamburger relative z-[999] `}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="19"
          viewBox="0 0 150 19"
          fill="none"
        >
          <line
            y1="1.5"
            x2="150"
            y2="1.5"
            className={`${
              openNav ? "!stroke-white  rotate-6" : ""
            } stroke-black dark:stroke-white transition-all duration-300  `}
            strokeWidth="3"
          />
          <line
            y1="9.5"
            x2="150"
            y2="9.5"
            className={`${
              openNav ? "stroke-white" : ""
            } stroke-black dark:stroke-white transition-all duration-300 `}
            strokeWidth="3"
          />
          <line
            y1="17.5"
            x2="150"
            y2="17.5"
            className={`${
              openNav ? "!stroke-white -rotate-6" : ""
            } stroke-black dark:stroke-white transition-all duration-300 `}
            strokeWidth="3"
          />
        </svg>
      </button>
      <NavigationMenuMobile openNav={openNav} close={close} />
    </div>
  );
};

export default NavMobile;
