import Image from "next/image"
import {ACCOMMODATIONTYPES} from "@/constants/index";
import React from "react"
import Button from "@/components/common/Button";
import { useState } from "react"
import Pill from "@/components/common/Pill"; 
import Accommodation from "@/components/common/Accommodation";
import { PROPERTYLISTINGSAMPLE, filters } from "@/constants";
import PropertyCard from "@/components/common/Card";
import { FilterByCategory } from "@/interfaces/index";

const Home = () => {


    const [showDropdown, setShowDropdown] = useState(false);
    const [selected, setSelected] = useState(filters[0]);
    const [ACCOMMODATIONSelected, setACCOMMODATIONSelected] = useState(ACCOMMODATIONTYPES[0]);

  

const filterByCategory: FilterByCategory = (PROPERTYLISTINGSAMPLE, selected) => {
  if (selected.toLowerCase() === "all") {
    return PROPERTYLISTINGSAMPLE;
  }
  const keywords = selected.toLowerCase().split(" ");
  return PROPERTYLISTINGSAMPLE.filter(item =>
    item.category &&
    item.category.some(cat =>
      keywords.some(word => cat.toLowerCase().includes(word))
    )
  );
};

const filteredArray = filterByCategory(PROPERTYLISTINGSAMPLE, selected);


  
  return (
    <section >
      {/* Accommodation Types */}
      <Accommodation ACCOMMODATIONTYPES={ACCOMMODATIONTYPES} activeFilter={ACCOMMODATIONSelected.name} onClick={setACCOMMODATIONSelected} />

      {/* image hero section in desktop and tablet */}
      <div className="rounded-2xl overflow-hidden mb-8 hidden md:block">
        <Image
        src="/assets/Image1.png"
        alt="Beautiful landscape"
        width={1920}
        height={1080}
        priority
      />
      </div>

      {/* Filter & Sort Bar */}
          {/* mobile view */}
          <div className="flex gap-2 justify-between items-center md:hidden pl-3 my-5 ">
            <Image src="/assets/Filter.svg" alt="filter Icon" width={35} height={35} className="flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 p-1.5 cursor-pointer" />
       <div className="flex overflow-auto gap-3 justify-between items-center text-nowrap md:hidden " style={{ scrollbarWidth: "none" }}>
          <Pill filters={filters} activeFilter={selected} onClick={setSelected} />
           </div>
          </div>

      {/* tablet view */}
        <div className="hidden md:flex gap-2 justify-between mb-8 px-2 items-start xl:hidden ">
          <div className="flex gap-2 flex-wrap flex-col relative">
            <div className="flex items-center gap-2">
                      <Pill filters={filters.slice(0,3)} activeFilter={selected} onClick={setSelected} />

            <Image src="/assets/Alt Arrow Down.svg" alt="arrow Icon" onClick={() => setShowDropdown(!showDropdown)} width={35} height={35}                 style={{ transition: "transform 0.2s", transform: showDropdown ? "rotate(180deg)" : "rotate(0deg)" }}
              className="flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 p-1.5 cursor-pointer"  />
            </div>
            {showDropdown && (
               <div className="flex flex-col absolute top-12 right-0 z-10 gap-2 ">
                <Pill filters={filters.slice(3,6)} activeFilter={selected} onClick={setSelected} className= {"flex flex-col gap-2"} />
            </div>
            )}
          </div>
          <div className="flex gap-2 items-center mt-2 md:mt-0">
            <Image src="/assets/Filter.svg" alt="filter Icon" width={35} height={35} className="flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 p-1.5 cursor-pointer" />
            <Button text="Sort by: Highest Price" className="flex items-center px-4 py-1 rounded-full border border-gray-300 text-sm font-medium bg-white text-gray-600 hover:bg-gray-100" />
          </div>
        </div>

          {/* desktop view */}
      <div className="xl:flex flex-wrap gap-2 justify-between items-center mb-8 px-2 hidden md:hidden">
        <div className="flex gap-2 md:gap-3 flex-wrap">
          <Pill filters={filters} activeFilter={selected} onClick={setSelected} />
        </div>
        <div className="flex gap-2 items-center mt-2 md:mt-0">
          <div className="flex items-center px-4 py-1 rounded-full border border-gray-300 text-sm font-medium bg-white text-gray-600 hover:bg-gray-100">
            <Button text="Filter" className="flex items-center px-2 py-1 text-sm font-medium bg-white text-black hover:bg-gray-100" />
            <Image src="/assets/Filter.svg" alt="filter Icon" width={20} height={20} className="ml-2" />
          </div>
          <Button text="Sort by: Highest Price" className="flex items-center px-4 py-1 rounded-full border border-gray-300 text-sm font-medium bg-white text-gray-600 hover:bg-gray-100" />
        </div>
      </div>

         {/* image hero section in mobile */}
      <div className="rounded-2xl overflow-hidden mb-8 md:hidden">
        <Image
        src="/assets/Image-1-mobile.png"
        alt="Beautiful landscape"
        width={1920}
        height={1080}
        priority
      />
      </div>

          {/* property cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 px-2">
         {filteredArray.map((property, id) => (
        <PropertyCard key={id} property={property} />
      ))}
      </div>

      {/* show more button */}
      <div className="flex justify-center items-center flex-col gap-4 py-8">
        <Button text="Show more" className="px-6 py-2 bg-black text-white rounded-full" />
        <p className="text-black text-xl font-semibold">Click to see more listings</p>
      </div>

      
    </section>
  )
}

export default Home