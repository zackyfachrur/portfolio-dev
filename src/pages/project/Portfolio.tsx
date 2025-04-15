import Resources from "@/utils/Project";
import { AssetsProps } from "@/types/assets";
import { useEffect, useState } from "react";
import { Paragraph, Title } from "@/components/Text";

export default function Portfolio() {
  const [assets, setAssets] = useState<AssetsProps[]>([]);
  const [category, setCategory] = useState<string>("");
  const listStyle =
    "px-4 py-2 border-2 border-green-900 text-lg font-bold rounded-xl max-xl:text-sm";

  useEffect(() => {
    const { Resources: data } = Resources();
    setAssets(data);
  }, []);

  return (
    <section className="flex items-center flex-col gap-4 my-12">
      {/* Title */}
      <div className="text-center">
        <Title>My Project and Self Project</Title>
        <Paragraph>Some of the projects that I have worked on from companies or my own projects</Paragraph>
        </div>
      {/* End Title */}

      {/* Navigation Categories */}
      <nav className="containers flex justify-center items-center">
        <ul className="flex gap-2 cursor-pointer select-none overflow-x-auto whitespace-nowrap">
          <li
            className={
              listStyle + " " + (category === "" ? "bg-green-900" : "bg-transparent")
            }
            onClick={() => setCategory("")}
          >
            All
          </li>
          <li
            className={
              listStyle  + " " +
              (category === "Websites"
                ? "bg-green-900"
                : "bg-transparent")
            }
            onClick={() => setCategory("Websites")}
          >
            Websites
          </li>
          <li
            className={
              listStyle + " " +
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
              listStyle + " " +
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
              listStyle + " " +
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
            <div key={index} className="bg-green-900 rounded-2xl max-2xl:rounded-lg">
              <img
                src={content.source}
                alt="Images"
                className="rounded-t-2xl max-2xl:rounded-t-lg"
              />
              <div className=" px-4 py-4">
                <h2 className="font-title text-2xl max-2xl:text-xl">{content.title}</h2>
                <p className="font-medium text-balance max-2xl:text-sm">
                  {content.description}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
