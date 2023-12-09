import React, { useState } from "react";


export default function AddChecklistItems({ checklistItems, setChecklistItems }: any) {

  const addChecklistItem = () => {
    setChecklistItems([...checklistItems, { name: '' }]);
  };

  const updateItemName = (index: any, newName: any) => {
    const newItems = [...checklistItems];
    newItems[index].name = newName;
    setChecklistItems(newItems);
  };

  return (
    <div className={`w-full`}>
      <h2 className="text-2xl font-bold mb-4">Define pre-use inspection form</h2>
      <form className={`w-full`}>
        {checklistItems.map((item: any, index: number) => (
          <div key={index} className="mb-2 w-full">
            <input
              type="text"
              value={item.name}
              onChange={(e) => updateItemName(index, e.target.value)}
              className="border p-2 mr-2 w-full"
              placeholder="Checklist item"
            />
          </div>
        ))}
        <button type="button" onClick={addChecklistItem} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add inspection mark
        </button>
      </form>
    </div>
  )
}