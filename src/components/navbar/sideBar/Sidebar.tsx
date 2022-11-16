import React from "react";
import { useGlobalStore } from "../../../store/useGlobalStore";
import MenuItems from "../menuItems/MenuItems";

const Sidebar = () => {
  const { menuToggle } = useGlobalStore();

  return (
    <div
      className={`fixed top-0 right-0 gllg:w-[400px] z-20 glsm:w-full pointer-events-none gllg:pointer-events-auto ${
        menuToggle ? "translate-x-0" : "translate-x-full"
      } duration-1000 bg-colection-300 hidden gllg:flex`}
    >
      <MenuItems />
    </div>
  );
};

export default Sidebar;
