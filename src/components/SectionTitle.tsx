import { cloneElement, ReactElement } from "react";

interface SectionTitleProps {
  children: ReactElement<{ className?: string }>;
}

const SectionTitle = ({ children }: SectionTitleProps) => {
  return cloneElement(children, {
    className:
      (children.props.className || "") +
      " text-3xl lg:text-5xl lg:leading-tight font-bold",
  });
};

export default SectionTitle;
