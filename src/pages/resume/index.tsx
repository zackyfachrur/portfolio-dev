import Experience from "./Experience";
import { lazy } from "react";
const Certification = lazy(() => import("./Certification"));

export default function Resume() {
  return (
    <section className="bg-[url('@/assets/img/hero-pattern.png')] pb-32 max-lg:h-full max-lg:mb-0 max-sm:mb-0 max-sm:pb-32 -mb-72 max-2xl:-mb-52">
      <Experience />
      <Certification />
    </section>
  );
}
