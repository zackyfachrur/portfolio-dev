import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./css/global.css";
import "remixicon/fonts/remixicon.css";
import "swiper/swiper-bundle.css";
import ReactLenis from "lenis/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactLenis root>
      <App />
    </ReactLenis>
  </StrictMode>
);
