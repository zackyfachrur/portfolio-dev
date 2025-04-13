import { ButtonProps } from "@/types/components";

function ButtonPrimary({ children }: ButtonProps) {
  return (
    <button className="bg-green-900 px-8 py-2 rounded-xl border-2 border-green-800 font-bold mt-4 cursor-pointer active:scale-95">
      {children}
    </button>
  );
}

function ButtonSecondary({ children }: ButtonProps) {
    return (
      <button className="bg-amber-400 px-8 py-2 rounded-xl font-bold mt-4 cursor-pointer active:scale-95">
        {children}
      </button>
    );
  }

export { ButtonPrimary, ButtonSecondary };
