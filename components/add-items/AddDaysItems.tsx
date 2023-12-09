import React, { useState } from "react";
const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function AddDaysItems({days, setDays}) {
  const toggleDay = (day) => {
    const currentState = days[day];
    let newState;

    if (currentState === undefined) {
      newState = true; // Undefined to true
    } else newState = !currentState;

    setDays({ ...days, [day]: newState });

  };

  const getColor = (state) => {
    switch (state) {
      case true:
        return "bg-green-500";
      case false:
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className={`w-full`}>
      <h3 className="text-xl font-bold mb-4">Define inspection date range</h3>
      <form className={`w-full`}>
        <div className={`grid grid-cols-7 gap-2`}>
          {DAYS.map((day) => (
            <div key={day} className="mb-2 w-full">
              <label htmlFor={`day-${day}`} className="block text-center mb-1">
                {day}
              </label>
              <div
                onClick={() => toggleDay(day)}
                className={`w-full h-10 rounded border-2 cursor-pointer ${getColor(
                  days[day]
                )} flex justify-center items-center`}
              >
                {days[day] === undefined ? "?" : days[day] ? "✓" : "✕"}
              </div>
              <input
                type="checkbox"
                id={`day-${day}`}
                name={day}
                value={day}
                checked={days[day] === true}
                onChange={() => {}}
                className="hidden"
              />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
