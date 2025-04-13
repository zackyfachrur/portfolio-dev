import Experience from "./Experience";
import { lazy } from "react";
const Certification = lazy(() => import("./Certification"));

export default function Resume() {
  return (
    <section className="bg-[url('@/assets/img/hero-pattern.png')] h-[200vh] -mb-72">
      <Experience />
      <Certification />
    </section>
  );
}
