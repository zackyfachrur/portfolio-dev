import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState<string | undefined>("");
  const [name, setName] = useState<string | undefined>("");
  const [messages, setMessages] = useState<string | undefined>("");

  function ChatWhatsapp() {
    const url = `https://wa.me/6287703577988?text=From ${name}%0AEmail: ${email}%0AMessage: ${messages}`;
    window.open(url, "_blank");
  }

  return (
      <form
        onSubmit={ChatWhatsapp}
        action="#"
        className="bg-green-900 px-8 py-8  gap-4 flex flex-col rounded-2xl h-full"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-title text-2xl">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-green-800 outline-none px-4 py-2 font-semibold rounded-lg"
            placeholder="Johndoe"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-title text-2xl">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-green-800 outline-none px-4 py-2 font-semibold rounded-lg"
            placeholder="John@gmail.com"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="messages" className="font-title text-2xl">
            Your Messages
          </label>
          <textarea
            id="messages"
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            className="bg-green-800 px-4 py-2 outline-none font-semibold h-[100px] rounded-lg"
            placeholder="Messages..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="font-semibold bg-green-800 py-2 flex justify-center gap-2 hover:bg-green-700 cursor-pointer active:scale-95 rounded-lg"
        >
          Send Messages <i className="ri-send-plane-2-fill"></i>
        </button>
      </form>
  );
}
