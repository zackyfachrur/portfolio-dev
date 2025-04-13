import { CategoryListProps } from "@/types/components";

export default function CategoryList({
  children,
  className,
}: CategoryListProps) {
  return <li className={className}>{children}</li>;
}
