import { TextProps } from "@/types/components";

function Paragraph({ children }: TextProps) {
  return <p className="font-medium text-lg text-balance">{children}</p>;
}

function Title({ children }: TextProps) { 
    return <h2 className="font-title text-4xl">{children}</h2>
}

function List({ children }: TextProps ) {
    return (
        <li className="font-semibold">{children}</li>
    )
}

export { Paragraph, Title, List }
