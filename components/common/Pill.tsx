import React from "react";
import { PillProps } from "@/interfaces/index";



const Pill: React.FC<PillProps> = ({ filters, activeFilter, onClick, className }) => {
  return (
    <div className={`flex gap-2  ${className || ""}`}>
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onClick?.(filter);
          }}
          className={`px-4 py-1 cursor-pointer rounded-full border border-gray-300 text-sm font-medium 
            ${activeFilter === filter ? "bg-green-50 text-green-600" : "bg-white text-gray-600 hover:bg-gray-100"}
            focus:outline-none transition`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Pill;