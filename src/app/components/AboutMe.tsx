"use client";
import { useEffect, useState } from "react";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import Section from "./Section";

const AboutMe = () => {
  const [code, setCode] = useState("");

  useEffect(() => {
    // 使用 fetch 读取 public 文件夹中的 jyliang.sh 文件
    fetch("/jyliang.sh")
      .then((response) => response.text())
      .then((text) => setCode(text))
      .catch((error) => console.error("Error loading the code file:", error));
  }, []);

  return (
    <Section title="echo $jyliang.sh">
      {code ? (
        <SyntaxHighlighter language="bash" style={prism}>
          {code}
        </SyntaxHighlighter>
      ) : (
        <p>Loading code...</p>
      )}
    </Section>
  );
};

export default AboutMe;
