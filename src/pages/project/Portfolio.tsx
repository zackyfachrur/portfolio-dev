import Resources from "@/utils/Project";
import { AssetsProps } from "@/types/assets";
import { useEffect, useState } from "react";
import { Paragraph, Title } from "@/components/Text";
import FloatingImage from "@/components/FloatingImages";

export default function Portfolio() {
  const [assets, setAssets] = useState<AssetsProps[]>([]);
  const [category, setCategory] = useState<string>("");
  const [imageIndex, setImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setImageIndex(index === imageIndex ? null : index);
  };
  const listStyle =
    "px-4 py-2 border-2 border-green-900 text-lg font-bold rounded-xl max-xl:text-sm";

  useEffect(() => {
    const { Resources: data } = Resources();
    setAssets(data);
  }, []);

  return (
    <section className="flex items-center flex-col gap-4 my-12 h-full max-xl:pb-32">
      {/* Title */}
      <div className="text-center containers">
        <Title>My Project and Self Project</Title>
        <Paragraph>
          Some of the projects that I have worked on from companies or my own
          projects
        </Paragraph>
      </div>
      {/* End Title */}

      {/* Navigation Categories */}
      <nav className="containers flex justify-center items-center">
        <ul className="flex gap-2 cursor-pointer select-none overflow-x-auto whitespace-nowrap">
          <li
            className={
              listStyle +
              " " +
              (category === "" ? "bg-green-900" : "bg-transparent")
            }
            onClick={() => setCategory("")}
          >
            All
          </li>
          <li
            className={
              listStyle +
              " " +
              (category === "Websites" ? "bg-green-900" : "bg-transparent")
            }
            onClick={() => setCategory("Websites")}
          >
            Websites
          </li>
          <li
            className={
              listStyle +
              " " +
              (category === "Web-Application"
                ? "bg-green-900"
                : "bg-transparent")
            }
            onClick={() => setCategory("Web-Application")}
          >
            Web Application
          </li>
          <li
            className={
              listStyle +
              " " +
              (category === "Desktop-Application"
                ? "bg-green-900"
                : "bg-transparent")
            }
            onClick={() => setCategory("Desktop-Application")}
          >
            Dekstop Application
          </li>
          <li
            className={
              listStyle +
              " " +
              (category === "Mobile-Application"
                ? "bg-green-900"
                : "bg-transparent")
            }
            onClick={() => setCategory("Mobile-Application")}
          >
            Mobile Application
          </li>
        </ul>
      </nav>
      {/* End Navigation Categories */}

      <div className="containers grid-cols-3 grid max-xl:grid-cols-2 max-sm:grid-cols-1 gap-6 max-2xl:gap-3">
        {assets
          .filter((content) =>
            category === "" ? true : content.category === category
          )
          .map((content, index) => (
            <>
              <div
                key={index}
                className="bg-green-900 rounded-2xl max-2xl:rounded-lg"
              >
                <img
                  src={content.source}
                  alt="Images"
                  className="rounded-t-2xl max-2xl:rounded-t-lg cursor-pointer hover:opacity-80"
                  onClick={() => handleImageClick(index)}
                />
                <div className=" px-4 py-4">
                  <h2 className="font-title text-2xl max-2xl:text-xl">
                    {content.title}
                  </h2>
                  <p className="font-medium text-balance max-2xl:text-sm">
                    {content.description}
                  </p>
                </div>
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
    </section>
  );
}
