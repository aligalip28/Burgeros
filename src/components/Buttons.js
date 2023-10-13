import React from "react";
import { Data } from "../Helper/Data";
const Buttons = ({ setItem, menuItems, filterItem }) => {
  return (
    <>
      <div className="container bg-gray-800 p-5 md:w-7/12 w-11/12 rounded-2xl mx-auto flex justify-center flex-wrap gap-5 mt-12">
        <button
          className="bg-yellow-500 text-black rounded-2xl text-lg px-4 py-1 font-bold"
          onClick={() => setItem(Data)}
        >
          Tüm Ürünler
        </button>
        {menuItems.map((Val, id) => {
          return (
            <button
              className="bg-yellow-500 text-black rounded-2xl text-lg px-4 py-1 font-bold"
              onClick={() => filterItem(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Buttons;
