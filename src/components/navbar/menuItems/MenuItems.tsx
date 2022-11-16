import Image from "next/image";
import { useState } from "react";
import User from "../../../assets/user.png";
import { v4 as uuidv4 } from "uuid";
import { MenuItem } from "../styledComponents";
import { useGlobalStore } from "../../../store/useGlobalStore";

const MenuItems = () => {
  const [currentItem, setCurrentItem] = useState<string>("");
  const { setMenuToggle } = useGlobalStore();

  return (
    <div className="flex w-full gllg:flex-col gllg:justify-center gllg:items-center gllg:h-screen justify-between">
      <div className="flex justify-between gllg:flex-col gllg:gap-y-8 gap-x-[2.7vw] mx-auto items-center">
        {menuItems.map((item) => (
          <MenuItem
            currentItem={Boolean(item.id === currentItem)}
            onClick={() => {
              setCurrentItem(item.id);
              setMenuToggle(false);
            }}
            data-replace={item.item}
            href={`#${item.item}`}
            key={item.id}
            className="font-[0.9em] text-colection-1000 uppercase cursor-pointer"
          >
            <span>{item.item}</span>
          </MenuItem>
        ))}
      </div>
      <div className="p-1 pr-4  gllg:hidden bg-main flex items-center rounded-[2rem] gap-1">
        <Image
          className="object-fitcover w-[2rem] h-[2rem] rounded-full"
          src={User}
          alt="user"
        />
        <p className="text-[0.8em] text-black">Kijiji Hub</p>
      </div>
    </div>
  );
};

export default MenuItems;

interface MenuItem {
  id: string;
  item: string;
}

export const menuItems: MenuItem[] = [
  { id: uuidv4(), item: "home" },
  { id: uuidv4(), item: "explore" },
  { id: uuidv4(), item: "create" },
  { id: uuidv4(), item: "meet" },
  { id: uuidv4(), item: "contact" },
];
