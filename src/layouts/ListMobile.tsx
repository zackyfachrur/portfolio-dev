import { useState } from "react";

export default function ListMobile() {
  const [showList, setShowList] = useState(false);

  return (
    <div className="flex gap-4 font-semibold cursor-pointer text-lg select-none justify-center">
      <button
        className="active:scale-95 text-2xl"
        onClick={() => setShowList(!showList)}
      >
        <i className="ri-menu-3-line"></i>
      </button>
      {showList && <List />}
    </div>
  );
}

function List() {
  return (
    <ul className="fixed bottom-0 w-full justify-between right-0 bg-green-800 px-8 py-8 flex flex-row">
      <li
        className="hover:underline underline-none underline-offset-8 decoration-2 active:scale-95 bg-green-700 py-2 px-4 rounded-xl"
        onClick={() => window.location.assign("/")}
      >
        <i className="ri-home-4-line"></i>
      </li>
      <li
        className="hover:underline underline-none  underline-offset-8 decoration-2 active:scale-95 bg-green-700 py-2 px-4 rounded-xl"
        onClick={() => window.location.assign("/project")}
      >
        <i className="ri-keyboard-box-line"></i>
      </li>
      <li
        className="hover:underline underline-none  underline-offset-8 decoration-2 active:scale-95 bg-green-700 py-2 px-4 rounded-xl"
        onClick={() => window.location.assign("/resume")}
      >
        <i className="ri-link-m"></i>
      </li>
      <li
        className="hover:underline underline-none  underline-offset-8 decoration-2 active:scale-95 bg-green-700 py-2 px-4 rounded-xl"
        onClick={() => window.location.assign("/contact")}
      >
        <i className="ri-smartphone-line"></i>
      </li>
    </ul>
  );
}
