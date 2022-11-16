import { useState } from "react";
import Logo from "../Logo";
import { Container } from "../styledComponents";
import { AiOutlineTwitter } from "react-icons/ai";
import { FiInstagram } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { IconType } from "react-icons/lib";
import { FiSend } from "react-icons/fi";
import { BoxContent, BoxTittle } from "./styledComponents";

const Footer = () => {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <Container className="flex items-center justify-between w-full gllg:flex-col bg-colection-100">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2 font-bold text-b1">
          <Logo />
          <p>ArtNFT</p>
        </div>
        <p className="text-colection-600 text-b3">
          ASICS NFT is the best Nft in the world you
          <br /> can buy, sell NFT art
          <br /> by <span className="text-main">@kijijihub</span>
        </p>
        <div className="flex gap-x-3">
          {icons.map((item) => (
            <div
              className="p-3 rounded-full hover:bg-main duration-500 cursor-pointer hover:text-colection-100 text-colection-600 bg-colection-200"
              key={item.id}
            >
              <item.icon />
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-8 glmd:flex-col gap-x-28 gap-y-8">
        {footerBoxes.map((item) => (
          <div key={item.id} className="flex flex-col ">
            <BoxTittle>{item.title}</BoxTittle>
            <div className="flex flex-col">
              {item.contents.map((content) => (
                <BoxContent
                  key={content.id}
                  className="capitalize text-colection-600 text-b3"
                >
                  {content.content}
                </BoxContent>
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-col ">
          <BoxTittle>Stay up to date</BoxTittle>
          <form
            onSubmit={handleSubmit}
            className="flex text-[0.9em] items-center w-[220px] px-6 overflow-hidden rounded-[2rem] text-colection-600 bg-colection-200 h-[50px]"
          >
            <input
              type={email}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent outline-none"
            />

            <button type="submit" className="ml-auto">
              <FiSend size={25} />
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Footer;

interface Icon {
  id: string;
  icon: IconType;
}

export const icons: Icon[] = [
  { id: uuidv4(), icon: AiOutlineTwitter },
  { id: uuidv4(), icon: FiInstagram },
  { id: uuidv4(), icon: GrLinkedinOption },
  { id: uuidv4(), icon: AiFillYoutube },
  { id: uuidv4(), icon: FaFacebookF },
];

interface FooterBox {
  id: string;
  title: string;
  contents: {
    id: string;
    content: string;
    href: string;
  }[];
}

export const footerBoxes: FooterBox[] = [
  {
    id: uuidv4(),
    title: "Company",
    contents: [
      { id: uuidv4(), content: "about us", href: "#" },
      { id: uuidv4(), content: "blog", href: "#" },
      { id: uuidv4(), content: "contact us", href: "#" },
      { id: uuidv4(), content: "pricing", href: "#" },
      { id: uuidv4(), content: "testimonials", href: "#" },
    ],
  },
  {
    id: uuidv4(),
    title: "Support",
    contents: [
      { id: uuidv4(), content: "Help center", href: "#" },
      { id: uuidv4(), content: "Terms of service", href: "#" },
      { id: uuidv4(), content: "Legal", href: "#" },
      { id: uuidv4(), content: "Privacy policy", href: "#" },
      { id: uuidv4(), content: "Status", href: "#" },
    ],
  },
];
