import Image from "next/image";
import CoverGreetings from "./CoverGreetings";
import ProfileImage from "../../../public/501_27.jpg";
const Cover = () => {
  return (
    <>
      <div className="flex items-center justify-around">
        <div className="w-1/2">
          <CoverGreetings />
        </div>
        <Image
          src={ProfileImage}
          alt="profile-image"
          width={1000}
          height={1500}
          className="w-1/3 aspect-square rounded-full object-cover"
        />
      </div>
    </>
  );
};

export default Cover;
