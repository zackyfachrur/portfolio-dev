import Logo from "@/assets/web-logo.png";
import { useMediaQuery } from 'react-responsive'
import ListDesktop from "./ListDesktop";
import ListMobile from "./ListMobile";



export default function Navbar() {
  const isDesktop = useMediaQuery({ query: '(min-width: 901px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <nav className="flex justify-center items-center flex-row  fixed w-full z-50 ">
      <div className="containers flex flex-row items-center justify-between h-[80px] bg-green-800/90 px-12 rounded-b-2xl">
        <img src={Logo} alt="Navbar Icon" className="w-[200px] max-sm:w-[120px]" />
        {isDesktop && <ListDesktop />}
        {isMobile && <ListMobile />}
      </div>
    </nav>
  );
}
