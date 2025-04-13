import { lazy } from "react";
const Introduction = lazy(() => import("./Introduction"));
import About from "./About";

export default function Home() {
  return (
    <>
      <Introduction />
      <About />
    </>
  );
}
