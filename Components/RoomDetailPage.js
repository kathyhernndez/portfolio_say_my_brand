import Image from "next/image";
import React from "react";

const RoomDetailPage = ({ room_image, room_description, room_title }) => {
  return (
    <div className="p-5 border-2 rounded-2xl space-y-2 shadow-xl cursor-pointer hover:shadow-2xl hover:opacity-70 transition duration-300 ease-out">
      <div className="text-xl text-center font-bold">{room_title}</div>
      <div className="relative h-60 w-120">
        <Image
          className="rounded-2xl"
          src={room_image.url}
          alt={room_image.alt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div> {room_description} </div>
    </div>
  );
};

export default RoomDetailPage;
