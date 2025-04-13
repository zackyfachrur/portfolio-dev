import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
}

export interface TextProps {
  children: ReactNode;
}

export interface CategoryListProps {
  className?: string;
  isActive?: boolean;
  children?: ReactNode;
}

export interface TimeLineProps {
  company?: string;
  timeline?: string;
  jobTitle?: string;
  description?: string;
}

export interface FloatingImageProps {
  src?: string | undefined;
  button?: ReactNode;
}

export interface ParentFormProps { 
  card?: ReactNode
  className?: string;
}
