import { TextProps } from "@/types/components";

function Paragraph({ children }: TextProps) {
  return <p className="font-medium text-lg text-balance max-2xl:text-md max-xl:text-sm">{children}</p>;
}

function Title({ children }: TextProps) { 
    return <h2 className="font-title text-4xl max-2xl:text-2xl">{children}</h2>
}

function List({ children }: TextProps ) {
    return (
        <li className="font-semibold">{children}</li>
    )
}

export { Paragraph, Title, List }
