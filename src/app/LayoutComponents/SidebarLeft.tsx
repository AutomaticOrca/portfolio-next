import Image from "next/image";
import Float from "../../../public/kirby-umbrella.gif";

const SidebarLeft = () => {
  return (
    <>
      <Image
        width={300}
        alt="NextUI hero Image"
        src={Float}
        className="w-2/3 h-auto
      "
      />
    </>
  );
};

export default SidebarLeft;
