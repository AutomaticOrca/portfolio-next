import AboutMe from "./components/AboutMe";
import Cover from "./components/Cover";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Why from "./components/Why";

const Page = () => {
  return (
    <>
      <Cover />
      <AboutMe />
      <Skills />
      <Projects />
      <Why />
    </>
  );
};

export default Page;
