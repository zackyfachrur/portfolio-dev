import Logo from "@/assets/web-logo.png";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center flex-row  fixed w-full z-50 ">
      <div className="containers flex flex-row items-center justify-between h-[80px] bg-green-800/90 px-12 rounded-b-2xl">
        <img src={Logo} alt="Navbar Icon" className="w-[200px]" />
        <ul className="flex gap-4 font-semibold cursor-pointer text-lg select-none">
          <li
            className="hover:underline underline-none underline-offset-8 decoration-2 active:scale-95"
            onClick={() => window.location.assign("/")}
          >
            <i className="ri-home-4-line"></i> Home
          </li>
          <li
            className="hover:underline underline-none  underline-offset-8 decoration-2 active:scale-95"
            onClick={() => window.location.assign("/project")}
          >
            <i className="ri-keyboard-box-line"></i> Project
          </li>
          <li className="hover:underline underline-none  underline-offset-8 decoration-2 active:scale-95" 
            onClick={() => window.location.assign("/resume")}>
            <i className="ri-link-m"></i> Resume
          </li>
          <li className="hover:underline underline-none  underline-offset-8 decoration-2 active:scale-95"
            onClick={() => window.location.assign("/contact")}>
            <i className="ri-smartphone-line"></i> Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
