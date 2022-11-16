import {
  Container,
  PrimaryButton,
  SectionTitle,
} from "../../../styledComponents";
import { v4 as uuidv4 } from "uuid";
import HeaderFramer from "../../../framerMotion/HeaderFramer";

const TopCreators = () => {
  return (
    <Container className="flex flex-col w-full gap-10 bg-colection-100">
      <HeaderFramer>
        <div className="flex flex-col child:text-center">
          <SectionTitle className="text-colection-1000">
            top creator
          </SectionTitle>
          <p className="text-[1.2em] mt-5 text-colection-600">
            find top nft creators from all over the world with amazing NFT works
          </p>
        </div>
      </HeaderFramer>
      <div className="grid justify-between gap-10 grid-cols-creator text-b2">
        {creators.map((item) => (
          <div
            key={item.id}
            className="w-full hover:bg-colection-100 cursor-pointer flex items-center p-3 rounded-[2rem] gap-3 max-w-[450px] mx-auto bg-colection-200"
          >
            <div className="w-[76px] h-[76px] glsm:w-[48px] glsm:h-[48px] gllg:w-[64px] gllg:h-[64px] rounded-full bg-colection-600"></div>
            <div className="flex flex-col">
              <p>{item.creator}</p>
              <p className="font-bold text-main">{item.amount} ETH</p>
            </div>
          </div>
        ))}
      </div>
      <PrimaryButton className="self-center" buttonType="outlined">
        view ranking
      </PrimaryButton>
    </Container>
  );
};

export default TopCreators;

interface Creator {
  id: string;
  creator: string;
  amount: string;
}

export const creators: Creator[] = [
  { id: uuidv4(), creator: "Alexander mathew", amount: "329.009" },
  { id: uuidv4(), creator: "Lyodra", amount: "329.009" },
  { id: uuidv4(), creator: "Burhan", amount: "329.009" },
  { id: uuidv4(), creator: "Alfinas", amount: "329.009" },
  { id: uuidv4(), creator: "Brian", amount: "329.009" },
  { id: uuidv4(), creator: "Angel", amount: "329.009" },
  { id: uuidv4(), creator: "Akbar", amount: "329.009" },
  { id: uuidv4(), creator: "Bobi", amount: "329.009" },
  { id: uuidv4(), creator: "Mai", amount: "329.009" },
];
