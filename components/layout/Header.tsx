import React from "react";
import Image from "next/image";
import Button from "../common/Button";


const Header = () => {
  return (
    <header>
        {/* top bar */}
        <div className="bg-[#34967c] flex justify-center items-center">
            <div className="flex items-center justify-center gap-2 sm:gap-1 p-2">
                <Image src="/assets/Case Minimalistic.svg" alt="Case Minimalistic" width={25} height={25} />
                <p className="text-sm text-white sm:text-left px-2">
                    Overseas trip? Get the latest information on travel guides
                </p>
                <Button
                    text="More Info"
                    className="bg-black text-white m-auto flex justify-center items-center cursor-pointer w-36 h-10 rounded-full px-2 py-4 sm:w-24 sm:h-8 sm:text-xs sm:px-1 sm:py-2"
                />
            </div>
        </div>

        {/* search bar mobile */}
        <div className="flex items-center justify-between p-4 shadow-md gap-1 md:hidden w-auto">
            <div className="flex items-center justify-evenly gap-8 bg-white rounded-full border border-gray-300 px-2.5 py-2  shadow-md">
                <div className="w-2/3">
                    <h2 className="pl-3 pb-1 w-fit">Where to</h2>
                    <div className="flex items-center gap-2 pl-3 width-[105%]">
                        <input
                            type="text"
                            id="locationMobile"
                            placeholder="Location"
                            className="rounded-full border-gray-300 text-sm w-[60%] outline-none border-0 "
                        />
                        <input
                            type="text"
                            id="dataMobile"
                            placeholder="Data"
                            className="rounded-full border-gray-300 text-sm w-1/3 outline-none border-0"
                        />
                        <input
                            type="text"
                            id="guestMobile"
                            placeholder="Add Guests"
                            className="rounded-full border-gray-300 text-sm w-[80%] outline-none border-0"
                        />
                    </div>
                </div>
            <div className="bg-[#FFA800] rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
                <Image src="/assets/Magnifer.png" alt="Case Minimalistic" width={35} height={35} />
            </div>
            </div>
            <div className="rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
                <Image src="/assets/profile 2.svg" alt="profile2" width={50} height={50} className="rounded-full bg-[#34967C] flex-shrink-0" />
            </div>
        </div>
        
        
         {/* Search Bar taplet */}
        <div className="hidden md:flex items-center justify-stretch p-5 shadow-md gap-5 xl:hidden">
            <Image src="/assets/logo.png" alt="logo" width={100} height={100} className="cursor-pointer" style={{width: "auto", height: "auto"}}/>
            <div className="flex items-center justify-between  bg-white rounded-full px-2.5 py-2 shadow-md w-[75%] gap-0">
                    <div className="flex items-center justify-between w-full text-nowrap">
                       <div className="flex flex-col w-[35%] pl-2">
                        <label htmlFor="locationTaplet">Location</label>
                        <input
                            type="text"
                            id="locationTaplet"

                            placeholder="Search for destination"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                       <div className="flex flex-col w-[19%] border-l-2 border-gray-300 pl-2">
                        <label htmlFor="CheckinTaplet">Check in</label>
                        <input
                            type="text"
                            id="CheckinTaplet"
                            placeholder="Add date"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-20 outline-none border-0 pl-0"
                        />
                       </div>
                       <div className="flex flex-col w-[19%] border-l-2 border-gray-300 pl-2">
                        <label htmlFor="CheckoutTaplet">Check out</label>
                        <input
                            type="text"
                            id="CheckoutTaplet"
                            placeholder="Add date"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-20 outline-none border-0 pl-0"
                        />
                       </div>
                       <div className="flex flex-col w-[19%] border-l-2 border-gray-300 pl-2">
                        <label htmlFor="PeopleTaplet">People</label>
                        <input
                            type="text"
                            id="PeopleTaplet"
                            placeholder="Add guest"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-20 outline-none border-0 pl-0"
                        />
                       </div>
                    </div>
                
            <div className="bg-[#FFA800] rounded-full w-14 h-14 flex items-center justify-center cursor-pointer flex-shrink-0">
                <Image src="/assets/Magnifer.png" alt="Case Minimalistic" width={35} height={35} />
            </div>
            </div>
            
                <div className="w-14 h-14 flex items-center justify-center shrink-0">
                  <Image src="/assets/profile 2.svg" alt="Case Minimalistic" width={20} height={20} className="rounded-full bg-[#34967C] cursor-pointer w-full" />
                </div>
            
        </div>

         {/* Search Bar desktop */}
        <div className="xl:flex items-center justify-between p-5 shadow-md hidden md:hidden">
            <Image src="/assets/logo.png" alt="logo" width={100} height={100} className="cursor-pointer" style={{width: "auto", height: "auto"}}/>
            <div className="flex items-center justify-between bg-white rounded-full px-2.5 py-2 shadow-md">
                    <div className="flex items-center justify-around w-full">
                       <div className="flex flex-col w-[40%] pl-5">
                        <label htmlFor="locationDesktop">Location</label>
                        <input
                            type="text"
                            id="locationDesktop"
                            placeholder="Search for destination"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                       <div className="flex flex-col w-[19%] border-l-2 border-gray-300 pl-5">
                        <label htmlFor="CheckinDesktop">Check in</label>
                        <input
                            type="text"
                            id="CheckinDesktop"
                            placeholder="Add date"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                       <div className="flex flex-col w-[19%] border-l-2 border-gray-300 pl-5">
                        <label htmlFor="CheckoutDesktop">Check out</label>
                        <input
                            type="text"
                            id="CheckoutDesktop"
                            placeholder="Add date"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                       <div className="flex flex-col w-[19%] border-l-2 border-gray-300 pl-5">
                        <label htmlFor="PeopleDesktop">People</label>
                        <input
                            type="text"
                            id="PeopleDesktop"
                            placeholder="Add guest"
                            className="px-3 py-2 rounded-full border-gray-300 text-sm w-40 outline-none border-0 pl-0"
                        />
                       </div>
                    </div>
                
            <div className="bg-[#FFA800] rounded-full w-14 h-14 flex items-center justify-center cursor-pointer shrink-0">
                <Image src="/assets/Magnifer.png" alt="Magnifer" width={35} height={35} />
            </div>
            </div>
            
  {/* Auth Buttons */}
                <div className=" flex items-center justify-center shrink-0">
        
          <button className="mr-3 py-2 px-4 rounded-full border-none bg-[#34967C] text-white cursor-pointer">
            Sign In
          </button>
          <button className="py-2 px-4 rounded-full  bg-white text-black cursor-pointer border border-gray-300 ">
            Sign Up
          </button>
        </div>
            
        </div>


  




        
        
    </header>
  );
};

export default Header;