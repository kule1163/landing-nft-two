import { useState } from "react";
import { Container, PrimaryButton, SectionTitle } from "../../styledComponents";

const Contact = () => {
  const [email, setEmail] = useState<string>("");
  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <Container
      id="contact"
      className="relative w-full overflow-hidden bg-colection-1000"
    >
      <div
        style={{
          borderWidth: "40px 50vw 0 50vw",
          borderStyle: "solid",
        }}
        className="box-border absolute top-0 left-0 flex w-0 h-0 pt-0 mt-0 bg-transparent border-transparent border-t-colection-100"
      ></div>
      <div
        style={{
          borderWidth: "0 50vw 40px 50vw",
        }}
        className="absolute bottom-0 left-0 flex w-0 h-0 bg-transparent border-transparent border-b-colection-100"
      ></div>
      <div className="flex gap-y-7 justify-between w-full gllg:flex-col gap-x-10">
        <div className=" h-[30vmax] glmd:h-[40vmax] w-7/12 gllg:w-full bg-colection-600 overflow-hidden rounded-[2rem]"></div>
        <div className="flex flex-col items-start justify-center flex-shrink-0 w-5/12 gap-3 gllg:w-full gllg:text-center gllg:items-center">
          <SectionTitle className="text-colection-100">
            Never miss
            <br /> a drop
          </SectionTitle>
          <p className="text-b1 text-colection-600">
            Subscribe to get trending news on NFT’s
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full border-2 glsm:w-full mt-8 border-colection-600 gllg:w-fit overflow-hidden rounded-[2rem] flex"
          >
            <input
              value={email}
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-6 outline-none bg-transparent text-colection-100"
              placeholder="Enter your email"
            />
            <span className="self-end p-1 ml-auto ">
              <PrimaryButton
                type="submit"
                className="glsm:w-3rem glsm:w-14 glsm:h-14 glsm:!p-0 glsm:!rounded-full relative"
                buttonType="contained"
              >
                <span className="block glsm:hidden"> Subscribe</span>
                <span className="absolute hidden mx-auto -translate-x-1/2 -translate-y-1/2 glsm:block left-1/2 top-1/2">
                  s
                </span>
              </PrimaryButton>
            </span>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
