// import Image from "next/image";

const RoomSlider = ({ room_title, room_image, room_price }) => {
  return (
    <div className="w-[280px] mx-auto">
      <div className=" bg-indigo-600 p-1 rounded-t-md min-w-full ">
        <h2 className="text-md text-center uppercase text-white">
          {room_title}
        </h2>
      </div>
      <div className=" flex flex-col justify-end background min-w-full min-h-[306px] px-2 py-3  bg-no-repeat bg-cover rounded-b-md  cursor-pointer text-white hover:shadow-2xl hover:opacity-70 transition duration-300 ease-out">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between gap-9">
            <div>
              <h3 className="pb-2 font-bold">Características</h3>
              <span className="mr-1.5">🏊</span>
              <span className="mr-1.5">🪟</span>
              <span>🛌</span>
            </div>

            <div className="flex flex-col grow">
              <p className="self-end pb-2 font-bold">${room_price}</p>
              <button className="border rounded-md">Ver más</button>
            </div>
          </div>
          <button className="border rounded-md font-semibold">Escoger</button>
        </div>
        <style jsx>{`
          .background {
            background-image: linear-gradient(
                180deg,
                rgba(196, 196, 196, 0) 30%,
                rgba(0, 0, 60, 0.72) 70%
              ),
              url(${room_image.url});
          }
        `}</style>
      </div>
    </div>
  );
};

export default RoomSlider;
