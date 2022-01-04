import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
      <Image
        src="https://i.imgur.com/Av1Eswh.jpg"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default HeroImage;
