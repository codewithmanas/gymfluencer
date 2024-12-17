import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src="/assets/images/asset0.svg" alt="GymFluencer" height={32} width={64}  className="h-9 w-full" />
      <span className="text-white text-xl ml-2 font-semibold sr-only">GymFluencer</span>
    </div>
  );
};

export default Logo;