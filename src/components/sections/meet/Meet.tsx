import { Container, SectionTitle } from "../../styledComponents";
import { BsFillPlayFill } from "react-icons/bs";
import HeaderFramer from "../../framerMotion/HeaderFramer";

const Meet = () => {
  return (
    <Container id="meet" className="relative w-full bg-colection-100">
      <HeaderFramer>
        <div className="flex flex-col text-center flex-center">
          <SectionTitle>Meet the ASICS NFT</SectionTitle>
          <p className="text-b1 mt-5 text-colection-600">
            we work quickly & with maximum security
            <br /> check out the video below to know how we work
          </p>
        </div>
      </HeaderFramer>
      <div className="relative  rounded-[2rem] gllg:w-11/12 glmd:w-full w-10/12 mx-auto bg-colection-600 h-[35vmax]">
        <div className="absolute h-[4rem] flex items-center justify-center w-[4rem] rounded-full z-50 border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <BsFillPlayFill size={40} cursor="pointer" />
        </div>
      </div>
    </Container>
  );
};

export default Meet;
