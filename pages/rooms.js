import { useRouter } from "next/router";
import Header from "../Components/Header";
import RoomSlider from "../Components/RoomSlider";

const Rooms = ({ getRooms }) => {

  const router = useRouter();

  //ES6 Destructuring
  const { adults, kids, startDate, endDate } = router.query;

  // Users data provide in the Home page
  console.log(adults)
  // Data requested with all the Room's informartion
  console.log(getRooms);

  return (
    <div>
      <Header />
      <main>
        <section>
          <p className="text-center mt-4 font-semibold text-xl">Number of Guests {adults} adults {kids > 0? `- ${kids} Kids` : "" } </p>
          <div className="flex flex-col gap-5 m-5">
            {getRooms?.map(({ id, room_title, room_description, room_image }) => (
              <RoomSlider
                key={id}
                room_title={room_title}
                room_description={room_description}
                room_image={room_image}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Rooms;

export async function getServerSideProps() {
  const getRooms = await fetch("https://api.jsonbin.io/b/61c1595878cc9429607cc3df").then(res => res.json());

  return{
    props: {
      getRooms
    }
  }
}