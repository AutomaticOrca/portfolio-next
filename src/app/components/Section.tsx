import { Divider } from "@nextui-org/react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <div className="mx-5 my-10">
      <h1 className="text-2xl">{title}</h1>
      <Divider />
      <div className="p-2">{children}</div>
    </div>
  );
};
export default Section;
