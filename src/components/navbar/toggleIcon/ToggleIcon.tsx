import { Dispatch, SetStateAction } from "react";
import { useGlobalStore } from "../../../store/useGlobalStore";

const ToggleIcon = () => {
  const { menuToggle, setMenuToggle } = useGlobalStore();
  return (
    <div
      onClick={() => setMenuToggle(!menuToggle)}
      className={`cursor-pointer flex-col z-50 gap-2 child:h-[3px] relative child:w-8 child:bg-main child:duration-500 hidden gllg:flex`}
    >
      <span
        className={`${
          menuToggle && "origin-center absolute top-1/2 rotate-45"
        }`}
      ></span>
      <span className={`${menuToggle && "opacity-0"}`}></span>
      <span
        className={`${
          menuToggle && " origin-center absolute top-1/2 -rotate-45"
        }`}
      ></span>
    </div>
  );
};

export default ToggleIcon;
