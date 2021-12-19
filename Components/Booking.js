import { useState } from "react";
import { 
    ChevronDownIcon,
    PlusIcon,
    MinusIcon
 } from "@heroicons/react/outline";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

const Booking = () => {
  const [datePicker, setDatePicker] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [adults, setAdults] = useState(1);
  const [kids, setKids] = useState(1);
  
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <div className="p-5 flex flex-col gap-3">
      <h2 className="text-xl font-bold"> HAGA SU RESERVACIÓN </h2>

      <div className="flex justify-between">
        <label
          className="flex gap-5 border-2 rounded-lg px-2 py-1"
          onClick={() => setDatePicker(!datePicker)}
        >
          Check in <ChevronDownIcon className="h-6 cursor-pointer" />{" "}
        </label>
        <label className="flex gap-5 border-2 rounded-lg px-2 py-1">
          Check out <ChevronDownIcon className="h-6 cursor-pointer" />{" "}
        </label>
      </div>

      {datePicker && (
        <>
          <DateRangePicker
            className="mx-auto"
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#6A0DAD"]}
            onChange={handleSelect}
          />
          <h2 className="text-xl font-semibold">Huéspedes</h2>
          <div className="flex justify-between">
            <div>
                <label htmlFor="adults">Adultos</label>
                <div className="flex items-center">
                    <PlusIcon className="h-5 cursor-pointer" onClick={() => setAdults(adults+=1)}/>
                    <input 
                        type="number" 
                        name="guests" 
                        id="adults" 
                        value={adults} 
                        className="outline-none input::-webkit-outer-soin-button"
                    />
                    <MinusIcon className="h-5 cursor-pointer" onClick={() => {setAdults(adults-=1)}}/>
                </div>
            </div>
            <div>
                <label htmlFor="kids">Niños</label>
                <div className="flex items-center">
                    <PlusIcon className="h-5 cursor-pointer" onClick={() => setKids(kids+=1)}/>
                    <input 
                        type="number" 
                        name="guests" 
                        id="kids" 
                        value={kids}
                        className="outline-none"
                    />
                    <MinusIcon className="h-5 cursor-pointer" onClick={() => setKids(kids-=1)}/>
                </div>
            </div>
          </div>
        </>
      )}

      <button className="bg-purple-800 text-white rounded-lg p-1">
        RESERVAR
      </button>
    </div>
  );
};

export default Booking;
