import { Divider, Link } from "@nextui-org/react";
import info from "../../../info.json";
import Section from "./Section";
const Projects = () => {
  const { projects } = info;
  return (
    <>
      <Section title="Projects">
        {projects.map((project) => (
          <div
            className="mb-2 border-slate-300 border-1 rounded-none p-2 hover:bg-green-100 "
            key={project.name}
          >
            <h2 className="text-2xl">{project.name}</h2>
            <Divider />
            {Object.entries(project).map(([key, value]) => {
              if (key === "name" || key === "link") return null;
              return (
                <p key={key}>
                  <strong>{key.replace(/-/g, " ")}:</strong>
                  {value}
                </p>
              );
            })}
            {project.link && (
              <a
                className="hover:bg-black hover:text-white"
                href={project.link}
              >
                Link
              </a>
            )}
          </div>
        ))}
      </Section>
    </>
  );
};

export default Projects;
