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
    <section className="flex justify-center items-center h-[70vh] bg-green-900 bg-[url('@/assets/img/hero-pattern.png')]">
      <div className="containers flex flex-row justify-between items-center">
        <div className="w-50%">
          {/* <h1 className="text-6xl font-bold font-title">Hi Everyone 👋,</h1> */}
          <div className="h-[100px]">
            <h2 className="font-bold text-3xl italic">I am a passionate</h2>
            <p className="font-title text-5xl" ref={el} />
          </div>
            <ButtonPrimary>Contact Me</ButtonPrimary>
        </div>
        <div className="w-[50%] flex justify-end items-center">
          <img src={Avatar} draggable={false} className="w-[80%] drop-shadow-2xl" alt="Programming Icon Images" />
        </div>
      </div>
    </section>
  );
}
