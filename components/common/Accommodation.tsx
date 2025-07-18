import React from "react";
import { ACCOMMODATIONProps } from "@/interfaces/index";
import Image from "next/image";



const Accommodation: React.FC<ACCOMMODATIONProps> = ({ ACCOMMODATIONTYPES, activeFilter, onClick, }) => {
  return (
    <div className='my-4 border-t border-gray-100 pt-2 pl-5 pr-2 w-full'>
     <div className="flex gap-8 list-none justify-between items-center overflow-auto scroll-none" style={{ scrollbarWidth: "none" }}>
         {ACCOMMODATIONTYPES.map((ACCOMMODATION) => (
        <button
          key={ACCOMMODATION.name}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            if (onClick) {
              onClick(ACCOMMODATION);
            }
          }}
          className={`cursor-pointer font-medium text-gray-600 transition flex items-center justify-center flex-col text-center 
            ${activeFilter === ACCOMMODATION.name ? "border-b-2 border-green-600 " : "bg-white text-gray-600"}
            focus:outline-none transition`}
        >
            {
              <Image
                src={ACCOMMODATION.icon}
                alt={ACCOMMODATION.name}
                width={25}
                height={25}
                className="text-center"
              />
            }
          <span className="text-[12px] whitespace-nowrap">{ACCOMMODATION.name}</span>
        </button>
      ))}
     </div>
    </div>
  );
};

export default Accommodation;