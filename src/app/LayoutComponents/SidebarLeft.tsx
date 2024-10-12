import Image from "next/image";
import Float from "../../../public/kirby-umbrella.gif";

const SidebarLeft = () => {
  return (
    <div className="fixed top-14 left-0 p-4">
      <Image
        width={300}
        alt="NextUI hero Image"
        src={Float}
        className="w-2/3 h-auto
      "
      />
    </div>
  );
};

export default SidebarLeft;
