import Codes from "@/assets/img/code.png";
import { ButtonPrimary } from "@/components/Button";
import { Paragraph, Title } from "@/components/Text";

export default function About() {
  return (
    <section className="flex justify-center border-t-8 border-green-950 my-24 h-[60vh] max-md:h-[80vh]">
      <div className="containers flex justify-between max-md:justify-center items-center max-md:flex-col-reverse max-md:gap-12">
        <div className="w-[50%] max-md:w-[100%]">
          <img
            src={Codes}
            draggable={false}
            className="w-[80%] max-md:w-[100%]"
            alt="Code Images"
          />
        </div>
        <div className="w-[50%] max-md:w-[100%] flex flex-col gap-2">
          <Title>About Me | Zacky Fachrur</Title>
          <Paragraph>
            I am a Junior Software Developer pursuing my Bachelor's in
            Information Systems at Gunadarma University. With experience in
            website, desktop, and mobile applications, as well interested in
            Web3 development, I've successfully worked on numerous projects. I
            pride myself on being a fast learner, equipped to tackle technical
            challenges, and committed to delivering quality work
          </Paragraph>
          <ButtonPrimary>Download CV</ButtonPrimary>
        </div>
      </div>
    </section>
  );
}
