"use client";
import React, { useState } from "react";
import { ReactTyped } from "react-typed";

const CoverGreetings = () => {
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [showFourthLine, setShowFourthLine] = useState(false);

  const getGreeting = () => {
    const currentHour = new Date().getHours();

    if (currentHour > 5 && currentHour < 12) {
      return "Good morning,";
    } else if (currentHour < 18) {
      return "Good afternoon,";
    } else {
      return "Good evening,";
    }
  };
  return (
    <div className="flex flex-col justify-between items-start">
      <div>
        <div>
          <ReactTyped
            strings={["$ who am i"]}
            typeSpeed={50}
            showCursor={false}
            onComplete={() => setShowSecondLine(true)} // 打完第一行后显示第二行
          />
        </div>

        <div>
          {showSecondLine && (
            <ReactTyped
              strings={["On my student card, I am casual acdemic"]}
              typeSpeed={50}
              backSpeed={30}
              showCursor={false}
              onComplete={() => setShowThirdLine(true)} // 打完第二行后显示第三行
            />
          )}
        </div>

        <div>
          {showThirdLine && (
            <ReactTyped
              strings={["In my mind, I am a software engineer."]}
              typeSpeed={50}
              backSpeed={30}
              showCursor={false}
              onComplete={() => setShowFourthLine(true)} // 打完第二行后显示第三行
            />
          )}
        </div>

        <div>
          {showFourthLine && (
            <ReactTyped
              strings={["But in my heart, I am a distant dreamer."]}
              typeSpeed={50}
              backSpeed={30}
              showCursor={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CoverGreetings;
