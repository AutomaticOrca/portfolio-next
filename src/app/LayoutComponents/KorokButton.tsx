"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Korok from "../../../public/found_me.gif";
const KorokButton = () => {
  const [sound1, setSound1] = useState<HTMLAudioElement | null>(null);
  const [sound2, setSound2] = useState<HTMLAudioElement | null>(null);
  const [isFound, setIsFound] = useState(false);

  useEffect(() => {
    setSound1(new Audio("/sounds/korok1.wav"));
    setSound2(new Audio("/sounds/korok2.wav"));
  }, []);

  const handleClickMe = () => {
    setIsFound(true);
    if (sound1 && sound2) {
      sound1.play();
      sound2.play();
    }
  };

  return (
    <>
      <button
        onClick={() => {
          handleClickMe();
        }}
        className="text-emerald-200 hover:bg-emerald-200 hover:text-white w-20 h-10"
      >
        Click me
      </button>
      {isFound && (
        <>
          <Image
            src={Korok}
            alt="Korok Found"
            width={200}
            height={200}
            className="mt-4"
          />
        </>
      )}
    </>
  );
};

export default KorokButton;
