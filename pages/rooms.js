import { useRouter } from "next/router";
import Header from "../Components/Header";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import RoomDetailPage from "../Components/RoomDetailPage";

const Rooms = () => {
  const router = useRouter();
  const [roomList, setRoomList] = useState([]);

  //ES6 Destructuring
  const { adults, kids, startDate, endDate } = router.query;
  const guests = parseInt(adults) + parseInt(kids);
  // Formatted Start and endd Date
  const formattedStartDate = format(new Date(startDate), "dd/MM/yyyy");
  const formattedEndDate = format(new Date(endDate), "dd/MM/yyyy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  // Users data provide in the Home page
  useEffect(() => {
    window
      .fetch("/api/rooms")
      .then((res) => res.json())
      .then(({ rooms }) => {
        setRoomList(rooms);
      });
  }, []);

  console.log(adults);
  // Data requested with all the Room's information
  console.log(roomList);

  return (
    <div>
      <Header />
      <main>
        <section>
          <p className="text-center mt-4 font-semibold text-lg">
            {" "}
            {guests} guests - {range}{" "}
          </p>
          <div className="flex flex-col gap-5 m-5">
            {roomList?.map(
              ({ id, room_title, room_description, room_image }) => (
                <RoomDetailPage
                  key={id}
                  room_title={room_title}
                  room_description={room_description}
                  room_image={room_image}
                />
              )
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Rooms;

// export async function getServerSideProps() {
//   const getRooms = await fetch(
//     "https://api.jsonbin.io/b/61c1595878cc9429607cc3df"
//   ).then((res) => res.json());

//   return {
//     props: {
//       getRooms,
//     },
//   };
// }
