import Logo from "../Logo";
import { NavbarCont } from "../styledComponents";
import ToggleIcon from "./toggleIcon/ToggleIcon";
import { useState, useEffect } from "react";
import MenuItems from "./menuItems/MenuItems";
import useScrollPosition from "../../hooks/useScrollPosition";
import { useGlobalStore } from "../../store/useGlobalStore";

const Navbar = () => {
  const { menuToggle, setMenuToggle } = useGlobalStore();
  const [toggleNav, setToggleNav] = useState<boolean>(true);
  let scrollPosition = useScrollPosition();
  const [lastScrollPosition, setLastScrollPosition] = useState(scrollPosition);

  useEffect(() => {
    if (lastScrollPosition > scrollPosition) {
      setToggleNav(true);
    } else {
      if (lastScrollPosition > 80) {
        setToggleNav(false);
        setMenuToggle(false);
      }
    }

    setLastScrollPosition(scrollPosition);
  }, [scrollPosition]);

  return (
    <NavbarCont
      className={`fixed transition-transform duration-500 ${
        !toggleNav && "-translate-y-full"
      } ${
        lastScrollPosition > 80 ? "bg-colection-300" : "bg-transparent"
      }  top-0 left-0 z-50 flex items-center justify-between w-full`}
    >
      <Logo />
      <div className="w-full gllg:hidden gllg:all-child:pointer-events-none flex">
        <MenuItems />
      </div>
      <ToggleIcon />
    </NavbarCont>
  );
};

export default Navbar;
