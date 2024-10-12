import { Divider } from "@nextui-org/react";
import { ReactNode } from "react";

interface SectionProps {
  text: string;
  children: ReactNode;
}
const Section = ({ text, children }: SectionProps) => {
  return (
    <>
      <h1 className="text-2xl">Skills</h1>
      <Divider />
      {children}
    </>
  );
};

export default Section;
