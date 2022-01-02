import Image from "next/image";
import { MenuIcon, UserCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <div>
      <header className="sticky top-0 z-10 grid grid-cols-3 shadow-md p-5 bg-purple-800 text-white md:px-10">
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image
            onClick={() => router.push("/")}
            src="https://i.imgur.com/IFs5niC.png"
            layout="fill"
            objectFit="contain"
            objectPosition="left"
          />
        </div>
        <div className="flex items-center justify-center gap-1">
          {/* <input className='bg-transparent border-2 w-20 text-sm px-1 text-center rounded-full' type="text" value={`Check in`}  />
            <input className='bg-transparent border-2 w-20 text-sm px-1 text-center rounded-full' type="text" value={`Check out`}  />
            <input className='bg-transparent border-2 w-20 text-sm px-1 text-center rounded-full' type="text" value={`Guests`}  /> */}
        </div>
        <div className="flex items-center justify-end">
          <div className="flex items-center border-2 p-2 rounded-full">
            <MenuIcon className="h-5 cursor-pointer" />
            <UserCircleIcon className="h-5 cursor-pointer" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
