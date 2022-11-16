import { PrimaryButton } from "../../../styledComponents";

const Advertisement = () => {
  return (
    <div className="text-colection-1000 relative  bg-colection-600 hsm:w-full w-[28rem] h-[32rem] flex ">
      <div className=" flex h-fit hsm:bg-gradient-to-r hsm:from-colection-500 rounded-[2rem] absolute items-center gap-x-[3rem] left-1/2 -translate-x-1/2 hsm:backdrop-blur-sm hsm:py-4 hsm:px-10  hsm:flex-col-reverse hsm:-bottom-[43%] justify-center w-[105%] bottom-4">
        <div className="flex flex-col hsm:from-transparent p-5 gap-3 bg-gradient-to-r from-colection-500 rounded-[2rem] hsm:mr-auto">
          <div className="">
            <p className="text-[28px]">Hollow</p>
            <p className="text-[12px]">
              Creator <span className="text-main">@KijijiHub</span>
            </p>
          </div>
          <p className="mt-2 text-body2">
            Current <span className="text-main">329.009 ETH</span>
          </p>
          <PrimaryButton buttonType="contained">Place a bit</PrimaryButton>
        </div>
        <div className="flex flex-col hsm:mb-0 rounded-[2rem] bg-gradient-to-r from-colection-500 py-2 px-5 hsm:w-full hsm:mx-auto hsm:items-center text-b2">
          <p>Auction ends in</p>
          <p className="text-main">4h : 32m : 16s left</p>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
