import { Divider } from "@nextui-org/react";
import info from "../../../info.json";
const Skills = () => {
  const formatCategoryName = (category: string) => {
    return category
      .replace(/([A-Z])/g, " $1") // 将大写字母前加空格
      .replace(/^./, (str) => str.toUpperCase()); // 将首字母大写
  };

  const { skills } = info;
  return (
    <>
      <h1 className="text-2xl">Skills</h1>
      <Divider />
      <ul>
        {Object.entries(skills).map(([category, items]) => (
          <li key={category}>
            <b>{formatCategoryName(category)}: </b>
            <p>{(items as string[]).join(", ")}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
