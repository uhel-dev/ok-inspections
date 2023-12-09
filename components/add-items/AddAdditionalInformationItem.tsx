import React, { useState } from "react";

export default function AddAdditionalInformationItem({ bulletPoints, updateBulletPoints }: any) {

  const handleUpdate = (event: any) => {
    updateBulletPoints(event.target.value);
  };

  return (
    <div className={`w-full`}>
      <h3 className="text-xl font-bold">AND REMEMBER TO FOLLOW THE FOLLOWING:</h3>
      <textarea
        className="w-full h-40 p-2 border-2 border-gray-300"
        value={bulletPoints}
        onChange={handleUpdate}
        placeholder="Enter bullet points or notes here"
      ></textarea>
    </div>
  );
}
