import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Avatar from "@/assets/img/avatar.png";
import { ButtonPrimary } from "@/components/Button";

export default function Introduction() {
  const el = useRef<null>(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Front End Developer",
        "Back End Developer",
        "Software Developer",
      ],
      typeSpeed: 50,
      showCursor: false,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="flex justify-center items-center h-[70vh] max-sm:h-[130vh] max-md:h-[100vh] bg-green-900 bg-[url('@/assets/img/hero-pattern.png')]">
      <div className="flex flex-row containers max-md:flex-col  justify-between items-center">
        <div className="w-[50%] max-md:w-[100%]">
          <h1 className="text-3xl max-2xl:text-2xl max-xl:text-xl font-title">Hi Everyone 👋,</h1>
          <div className="h-[100px]">
            <h2 className="font-bold  italic text-3xl max-2xl:text-2xl max-xl:text-xl">I am a passionate</h2>
            <p className="font-title text-5xl max-2xl:text-4xl max-xl:text-3xl" ref={el} />
          </div>
            <ButtonPrimary>Contact Me</ButtonPrimary>
        </div>
        <div className="w-[50%] max-md:w-[100%] max-md:justify-center max-md:mt-32 flex justify-end items-center">
          <img src={Avatar} draggable={false} className="w-[80%] drop-shadow-2xl" alt="Programming Icon Images" />
        </div>
      </div>
    </section>
  );
}
