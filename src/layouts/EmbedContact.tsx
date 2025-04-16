import Form from "@/components/Form";
import { useState } from "react";
import { ParentFormProps } from "@/types/components";

function ParentForm({card, className}: ParentFormProps) {
  return(
    <div className={className}>{card}</div>
  )
}

export default function EmbedContact() {
    const [showCard, setShowCard] = useState<boolean>(false);

  return (
    <>
      <button className="fixed right-0 text-2xl bg-green-800 hover:bg-green-700 cursor-pointer z-50 px-6 py-2 rounded-l-2xl border-4 border-green-900 bottom-52" onClick={() => setShowCard(!showCard)}>
        <i className="ri-whatsapp-fill"></i>
          </button>
      {showCard && (<ParentForm card={<Form/>} className="fixed right-28 w-[25%] max-2xl:w-[30%] max-xl:w-[35%] max-lg:w-[40%] max-md:w-[60%] max-sm:w-[70%] max-sm:right-24 bottom-32 z-20"  />)}
    </>
  );
}
