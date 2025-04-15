import { FloatingImageProps } from "@/types/components";

export default function FloatingImage({ src, button }: FloatingImageProps) {
  return (
    <section className="fixed h-[100vh] flex justify-center items-center top-[10%] left-0 w-[100vw] self-center z-50">
      <div className="w-[100%] h-[100vh] flex justify-center items-center bg-green-900/90 flex-col">
        {button}
        <img
          src={src}
          alt="Certification Images"
          className="object-cover w-[45%] max-lg:w-[90%] rounded-4xl border-8 border-green-800"
          draggable={false}
        />
      </div>
    </section>
  );
}
