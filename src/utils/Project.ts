import { AssetsProps } from "@/types/assets";
import Assets from "@/assets/json/Assets.json";

export default function ProjectAssets() {
  const Resources = Assets.map((content: AssetsProps) => content);
  return { Resources };
}
