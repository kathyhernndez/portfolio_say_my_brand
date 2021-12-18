import Image from "next/image";

const Header = () => {
  return (
    <div>
      <header className="sticky top-0 z-10 grid">
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <Image 
            src="https://links.papareact.com/qd3" 
            layout="fill" 
            objectFit="contain"
            objectPosition="left"
            />
        </div>
      </header>
    </div>
  );
};

export default Header;
