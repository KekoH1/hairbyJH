import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hairdresser } from "../assets/assets";

const Appointments = () => {
  const { styID } = useParams();
  const [hairdresserInfo, setHairdresserInfo] = useState(null);
  const [hairdresserSlots, setHairdresserSlots] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const daysOfWeek = ["Sön", "Mån", "Tis", "Ons", "Tors", "Fre", "Lör"];

  useEffect(() => {
    if (!styID || !hairdresser || !Array.isArray(hairdresser)) return;

    const selectedHairdresser = hairdresser.find(
      (h) => String(h._id) === String(styID)
    );

    if (selectedHairdresser) {
      setHairdresserInfo(selectedHairdresser);
    } else {
      console.error("Frisör ej hittad!");
    }
  }, [styID]);

  const getAvailableSlots = async () => {
    let today = new Date();
    let newSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);
      currentDate.setHours(10, 0, 0, 0);

      let dailySlots = [];
      while (currentDate < endTime) {
        let slot = new Date(currentDate);
        let slotEnd = new Date(currentDate);
        slotEnd.setMinutes(slotEnd.getMinutes() + 30);

        dailySlots.push({ start: slot, end: slotEnd });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      let dayLabel = `${
        daysOfWeek[currentDate.getDay()]
      } ${currentDate.getDate()}/${currentDate.getMonth() + 1}`;
      newSlots.push({
        day: dayLabel,
        date: new Date(currentDate),
        slots: dailySlots,
      });
    }

    setHairdresserSlots(newSlots);
    setSelectedDay(newSlots[0]?.day);
  };

  useEffect(() => {
    if (hairdresserInfo) {
      getAvailableSlots();
    }
  }, [hairdresserInfo]);

  if (!hairdresserInfo) {
    return <p>Laddar eller frisör ej hittad...</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Frisörens bild och info */}
      <div className="flex flex-col sm:flex-row gap-4">
        <img
          className="sm:max-w-150 rounded-lg"
          src={hairdresserInfo.image}
          alt={hairdresserInfo.name}
        />

        <div className="flex-1 border border-gray-400 rounded-lg p-8 sm:max-w-200">
          <h2 className="text-3xl underline">{hairdresserInfo.name}</h2>
          <p>
            <strong>Specialitet:</strong> {hairdresserInfo.speciality}
          </p>
          <p>
            <strong>Erfarenhet:</strong> {hairdresserInfo.experience}
          </p>
          <p>
            <strong>Om:</strong> {hairdresserInfo.about}
          </p>
          <p>
            <strong>Adress:</strong> {hairdresserInfo.address.line1},{" "}
            {hairdresserInfo.address.line2}
          </p>
        </div>
      </div>

      {/* Tillgängliga tider */}
      <div className=" border border-gray-400 rounded-lg p-6 py-8">
        <p className="text-lg font-bold mb-2">Välj dag:</p>
        <div className="flex gap-2 overflow-x-auto">
          {hairdresserSlots.map((dayItem, index) => (
            <button
              key={index}
              className={`px-3 py-2 text-sm rounded-lg font-semibold 
                ${
                  selectedDay === dayItem.day
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-black"
                }`}
              onClick={() => setSelectedDay(dayItem.day)}
            >
              {dayItem.day}
            </button>
          ))}
        </div>

        {selectedDay && (
          <div>
            <p className="text-lg font-bold mt-4">Tillgängliga tider:</p>
            <div className="grid grid-cols-7 gap-2 mt-3 max-w-150 flex flex-">
              {hairdresserSlots
                .find((dayItem) => dayItem.day === selectedDay)
                ?.slots.map((slot, index) => (
                  <button
                    key={index}
                    className={`text-sm px-2 py-1 rounded-lg text-center 
                      ${
                        selectedTime === slot.start
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 border"
                      }`}
                    onClick={() => setSelectedTime(slot.start)}
                  >
                    {slot.start.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </button>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Appointments;
