import { CertificationProps } from "@/types/assets";
import Certificate from "@/assets/json/Certification.json";
import { useState } from "react";
import FloatingImage from "@/components/FloatingImages";

export default function Certification() {
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setImageIndex(index === imageIndex ? null : index);
  };

  return (
    <section className="flex justify-center pt-12 h-full">
      <div className="containers">
        <h2 className="text-4xl font-title mb-4">Certification</h2>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-4">
          {Certificate.map((content: CertificationProps, index) => (
            <>
              <div className="h-[50%]">
                <img
                  key={index}
                  src={content.source}
                  draggable={false}
                  alt="Certificate Images"
                  className="cursor-pointer hover:opacity-80 w-[100%] h-[280px] max-md:h-[150px] max-sm:h-[300px] max-2xl:h-[250px] max-xl:h-[220px]"
                  onClick={() => handleImageClick(index)}
                />
              </div>
              {imageIndex === index && (
                <FloatingImage
                  src={content.source}
                  button={
                    <button
                      className="font-title text-6xl cursor-pointer hover:scale-95"
                      onClick={() => handleImageClick(index)}
                    >
                      Close Preview
                    </button>
                  }
                />
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
