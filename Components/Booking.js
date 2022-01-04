import { useEffect, useState } from "react";
import { ChevronDownIcon, PlusIcon, MinusIcon } from "@heroicons/react/outline";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import { format } from "date-fns";
import { useRouter } from "next/router";
import RoomSlider from "./RoomSlider";

const Booking = () => {
  const [datePicker, setDatePicker] = useState(false);
  const [roomsSlider, setRoomsSlider] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [roomList, setRoomList] = useState([]);

  // const formattedStartDate = format(new Date(startDate), "dd/MM/yy");
  // const formattedEndDate = format(new Date(endDate), "dd/MM/yy");

  console.log(startDate);
  console.log(endDate);

  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(0);
  const router = useRouter();

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // Decrement number of adults and kids
  const decrementAdults = () => {
    setAdults(adults > 1 ? adults - 1 : (adults = 1));
  };
  const decrementKids = () => {
    setKids(kids > 1 ? kids - 1 : (kids = 0));
  };
  // Cancel Booking close Date Range Picker and Number of Guest inputs
  const cancelBookinn = () => {
    setRoomsSlider(false);
    setDatePicker(false);
  };
  // roomPage function will open the RoomPage
  const roomPage = () => {
    router.push({
      pathname: "/rooms",
      query: {
        adults,
        kids,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      },
    });
  };
  // Users data provide in the Home page
  useEffect(() => {
    window
      .fetch("/api/rooms")
      .then((res) => res.json())
      .then(({ rooms }) => {
        setRoomList(rooms);
      });
  }, []);

  return (
    <div className="p-5 flex flex-col gap-2">
      <h2 className="text-xl font-bold"> HAGA SU RESERVACIÓN </h2>

      <div className="flex justify-between">
        <span
          className="flex gap-5 border-2 border-purple-800 rounded-lg px-3"
          onClick={() => setDatePicker(!datePicker)}
        >
          Check in <ChevronDownIcon className="h-6 cursor-pointer" />{" "}
        </span>
        <span className="flex gap-5 border-2 border-purple-800 rounded-lg px-3">
          Check out
          <ChevronDownIcon className="h-6 cursor-pointer" />{" "}
        </span>
      </div>

      {datePicker && (
        <>
          <div className="text-center">
            <DatePicker
              className="text-center"
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              minDate={new Date()}
              selectsRange
              inline
              // isClearable={true}
              // placeholderText="Seleccione la fecha"
            />
          </div>

          <h2 className="text-xl font-semibold text-center">Huéspedes</h2>
          <div className="flex justify-center border-b border-purple-800 py-2">
            <div className="flex gap-3">
              <div className="flex items-center gap-2">
                <p>Adultos</p>
                <PlusIcon
                  className="h-6 cursor-pointer border-2 border-purple-800 rounded-full p-1"
                  onClick={() => setAdults((adults += 1))}
                />
                <span className="text-gray-500 font-semibold">{adults}</span>
                <MinusIcon
                  className="h-6 cursor-pointer border-2 border-purple-800 rounded-full p-1"
                  onClick={decrementAdults}
                />
              </div>

              <div className="flex items-center gap-2">
                <p>Niños</p>
                <PlusIcon
                  className="h-6 cursor-pointer border-2 border-purple-800 rounded-full p-1"
                  onClick={() => setKids((kids += 1))}
                />
                <span className="font-semibold">{kids}</span>
                <MinusIcon
                  className="h-6 cursor-pointer border-2 border-purple-800 rounded-full p-1"
                  onClick={decrementKids}
                />
              </div>
            </div>
          </div>
          {roomsSlider &&
            roomList?.map(
              ({ id, room_title, room_description, room_image }) => (
                <RoomSlider
                  key={id}
                  room_title={room_title}
                  room_description={room_description}
                  room_image={room_image}
                />
              )
            )}
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={cancelBookinn}>
              Cancel
            </button>
            <button
              onClick={() => setRoomsSlider(!roomsSlider)}
              className="flex-grow text-purple-800"
            >
              Continue
            </button>
          </div>
        </>
      )}

      <button
        onClick={roomPage}
        className="bg-purple-800 text-white rounded-lg p-1 mt-1"
      >
        RESERVAR
      </button>
    </div>
  );
};

export default Booking;
