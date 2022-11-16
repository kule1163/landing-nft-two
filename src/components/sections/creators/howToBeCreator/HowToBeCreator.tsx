import { Container, SectionTitle } from "../../../styledComponents";
import { v4 as uuidv4 } from "uuid";
import HeaderFramer from "../../../framerMotion/HeaderFramer";

const HowToBeCreator = () => {
  return (
    <Container
      id="create"
      className="flex flex-col w-full gap-5 bg-colection-100"
    >
      <HeaderFramer>
        <SectionTitle>How to be creator</SectionTitle>
      </HeaderFramer>
      <div className="flex flex-wrap gap-5 text-center">
        {featuresBox.map((item) => (
          <div
            key={item.id}
            className="flex  flex-col w-[250px] flex-grow items-center bg-colection-200  rounded-[2rem] py-4 px-8 gap-5"
          >
            <div className="w-[4rem] h-[4rem] rounded-full bg-main"></div>
            <p className="text-step-2 capitalize font-semibold">{item.title}</p>
            <p className="text-b3 text-colection-600 w-5rem">{item.content}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HowToBeCreator;

interface FeatureBox {
  id: string;
  title: string;
  content: string;
}

export const featuresBox: FeatureBox[] = [
  {
    id: uuidv4(),
    title: "Set up your wallet",
    content:
      "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the wallets we support.",
  },
  {
    id: uuidv4(),
    title: "Create your collection",
    content:
      "Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.",
  },
  {
    id: uuidv4(),
    title: "Add your NFTs",
    content:
      "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.",
  },
  {
    id: uuidv4(),
    title: "List them for sale",
    content:
      "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell them!",
  },
];
