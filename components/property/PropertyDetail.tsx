import { PropertyProps } from "@/interfaces/index";
import Image from "next/image";
import BookingSection from "./BookingSection";
import Button from "../common/Button";
import React, { useState, useRef } from "react";
import ReviewSection from "./ReviewSection";
import { useRouter } from "next/router";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper/modules";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({property}) => {
  const [activeTab, setActiveTab] = useState("Description");
  const [showMore, setShowMore] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const icons = property.placeOffer?.icon || [];
  const texts = property.placeOffer?.text || [];

  // Refs for sections
  const descriptionRef = useRef<HTMLDivElement>(null);
  const offersRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Scroll handler
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    let ref;
    if (tab === "Description") ref = descriptionRef;
    else if (tab === "What we offer") ref = offersRef;
    else if (tab === "Reviews") ref = reviewsRef;
    else if (tab === "About host") ref = hostRef;
    ref?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='container mx-auto md:p-6 mt-4'>
      {/* top Section for desktop and tablet */}
      <div className='hidden md:flex justify-between items-center'>
        <div>
          <h1 className='text-4xl font-bold'>{property.name}</h1>
          <div className='flex items-center space-x-3 mt-2 text-sm text-gray-500'>
            <span className='flex items-center gap-2'>
              {
                <Image
                  src='/assets/Star2.svg'
                  alt='Star'
                  width={20}
                  height={20}
                  className='w-5 h-5'
                />
              }
              {property.rating}
            </span>
            <span>( 345 reviews )</span>
            <span className='flex items-center gap-1'>
              {
                <Image
                  src='/assets/Map Point.svg'
                  alt='Location'
                  width={20}
                  height={20}
                  className='w-5 h-5'
                />
              }
              {property.address.state}, {property.address.city},{" "}
              {property.address.country}
            </span>
            <span className='flex items-center gap-1'>
              {
                <Image
                  src='/assets/profile 1.svg'
                  alt='profile'
                  width={20}
                  height={20}
                  className='w-5 h-5'
                />
              }
              Mainstream
            </span>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <Button
            icon='/assets/Heart.svg'
            text='Save'
            className='flex items-center justify-center gap-2 py-1.5 px-3 rounded-full bg-white text-black cursor-pointer border border-gray-300 font-semibold text-sm'
            onClick={() => {}}
          />
          <Button
            icon='/assets/Share.svg'
            text='Share'
            className='flex items-center justify-center gap-2 py-1.5 px-3 rounded-full bg-white text-black cursor-pointer border border-gray-300 font-semibold text-sm '
            onClick={() => {}}
          />
        </div>
      </div>

      {/* top Section for mobile */}
      <div className='flex items-center gap-2 justify-between md:hidden mb-4'>
        <Button
          icon='/assets/Arrow Left.svg'
          text='Return'
          className='flex items-center justify-center gap-2 py-1.5 px-3 bg-white text-black cursor-pointer font-bold text-sm'
          onClick={() => {
            router.push("/");
          }}
        />

        <div className='flex gap-8 items-center'>
          <Button
            icon='/assets/Heart.svg'
            className='flex items-center justify-center gap-2 text-black cursor-pointer'
            onClick={() => {}}
          />
          <Button
            icon='/assets/Share.svg'
            className='flex items-center justify-center gap-2  text-black cursor-pointer'
            onClick={() => {}}
          />
        </div>
      </div>

      {/* Image Grid for disktop and tablet */}
      <div className='hidden md:grid grid-cols-4 grid-rows-2 gap-4 mt-4'>
        <Image
          src={property.image[0]}
          alt={property.name}
          className='col-span-2 row-span-2 w-full h-full rounded-lg'
          width={400}
          height={400}
          priority
        />
        <Image
          src={property.image[1]}
          alt={property.name}
          className='col-span-2 row-span-1 w-full   rounded-lg'
          width={400}
          height={300}
        />
        <Image
          src={property.image[2]}
          alt={property.name}
          className='col-span-1 row-span-1 w-full   rounded-lg'
          width={400}
          height={400}
        />
        <Image
          src={property.image[3]}
          alt={property.name}
          className='col-span-1 row-span-1 w-full   rounded-lg'
          width={400}
          height={400}
        />
        {/* Add more images */}
      </div>

      {/* Images for mobile */}
      <div className='md:hidden'>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination]}
          className='mySwiper w-full h-[300px] mt-4'>
          {property.image.map((img, index) => (
            <SwiperSlide key={index}>
              <Image
                src={img}
                alt={`Property Image ${index + 1}`}
                className='w-full h-full object-cover rounded-lg'
                width={400}
                height={300}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* title section for mobile */}
      <div className='flex justify-between items-center md:hidden my-4 text-nowrap'>
        <div>
          <h1 className='text-3xl font-bold'>{property.name}</h1>
          <div className='flex items-center space-x-3 mt-2 text-sm text-gray-500 flex-wrap gap-3'>
            <span className='flex items-center '>
              {
                <Image
                  src='/assets/Star2.svg'
                  alt='Star'
                  width={20}
                  height={20}
                  className='w-5 h-5'
                />
              }
              {property.rating} ( 345 reviews )
            </span>

            <span className='flex items-center gap-1'>
              {
                <Image
                  src='/assets/Map Point.svg'
                  alt='Location'
                  width={20}
                  height={20}
                  className='w-5 h-5'
                />
              }
              {property.address.state}, {property.address.city},{" "}
              {property.address.country}
            </span>
            <span className='flex items-center gap-1'>
              {
                <Image
                  src='/assets/profile 1.svg'
                  alt='profile'
                  width={20}
                  height={20}
                  className='w-5 h-5'
                />
              }
              Mainstream
            </span>
          </div>
        </div>
      </div>

      {/* guests and bedrooms section */}
      <div className='flex justify-between items-center gap-3 my-4 flex-wrap text-sm'>
        <div className='flex justify-between gap-2 items-center text-nowrap '>
          <span className='flex items-center gap-1.5 text-black text-sm border border-gray-300 rounded-full px-2 py-2'>
            <Image
              src='/assets/bed 1.svg'
              alt='Bed Icon'
              width={20}
              height={20}
            />
            {property.offers.bed} Bedrooms
          </span>
          <span className='flex items-center gap-1 text-black text-sm border border-gray-300 rounded-full px-2 py-2'>
            <Image
              src='/assets/bathtub 1.svg'
              alt='bathtub Icon'
              width={20}
              height={20}
            />
            {property.offers.shower} Bathroom
          </span>
          <span className='flex items-center gap-1 text-black text-sm border border-gray-300 rounded-full px-2 py-2'>
            <Image
              src='/assets/people 1.svg'
              alt='people'
              width={20}
              height={20}
            />
            {property.offers.occupants} guests
          </span>
        </div>
      </div>

      {/* Tabs for Description, What we offer, Reviews, About host */}
      <div className='flex justify-between  mb-4 '>
        <div className='flex flex-col gap-2 lg:w-[70%] md:w-[60%] w-full'>
          <div className='flex justify-between items-center mb-4 border-y border-gray-200 pt-3 font-semibold text-[16px] overflow-scroll md:overflow-visible '>
            <ul className='list-none mt-2 flex lg:gap-10 md:gap-5 gap-8 text-gray-500 text-nowrap '>
              <li>
                <Button
                  text='Description'
                  className={` ${
                    activeTab === "Description"
                      ? "text-green-500 border-green-500 border-b-2 pb-2 "
                      : ""
                  }`}
                  onClick={() => handleTabClick("Description")}
                />
              </li>
              <li>
                <Button
                  text='What we offer'
                  className={` ${
                    activeTab === "What we offer"
                      ? "text-green-500 border-green-500 border-b-2 pb-2 "
                      : ""
                  }`}
                  onClick={() => handleTabClick("What we offer")}
                />
              </li>
              <li>
                <Button
                  text='Reviews'
                  className={`${
                    activeTab === "Reviews"
                      ? "text-green-500 border-green-500 border-b-2 pb-2 "
                      : ""
                  }`}
                  onClick={() => handleTabClick("Reviews")}
                />
              </li>
              <li>
                <Button
                  text='About host'
                  className={`${
                    activeTab === "About host"
                      ? "text-green-500 border-green-500 border-b-2 pb-2 "
                      : ""
                  }`}
                  onClick={() => handleTabClick("About host")}
                />
              </li>
            </ul>
            <span className='text-gray-400 pl-5 hidden lg:block'>
              Published July 01, 2024
            </span>
          </div>

          {/* Description */}
          <div
            ref={descriptionRef}
            className='mt-4 text-xl text-[#161117]  w-full border-b pb-4 border-gray-200'>
            <div>
              <p
                className={`whitespace-pre-line ${
                  !showMore ? "line-clamp-3" : ""
                }`}>
                {property.description}
              </p>
              {property.description && property.description.length > 200 && (
                <button
                  className='text-green-500 cursor-pointer  mt-2'
                  onClick={() => setShowMore((prev) => !prev)}>
                  {showMore ? "Read less" : "Read more"}
                </button>
              )}
            </div>
          </div>

          {/* What we offer */}
          <div
            ref={offersRef}
            className='mt-4 text-xl text-[#161117]  w-full border-b pb-4 border-gray-200'>
            <h2 className='text-2xl font-semibold mb-2'>
              What this place offer
            </h2>
            <p>
              Each home is fully equipped to meet your needs, with ample space
              and privacy.
            </p>
            <div className='md:flex justify-between items-start mt-4 hidden'>
              <ul className='list-none'>
                {property.placeOffer?.icon?.slice(0, 5).map((icon, index) => (
                  <li key={index} className='mb-4 flex gap-2 items-center'>
                    {Image && (
                      <Image
                        src={icon}
                        alt={`Icon ${index}`}
                        width={25}
                        height={25}
                        className='w-5 h-5'
                      />
                    )}
                    {property.placeOffer?.text[index]}
                  </li>
                ))}
              </ul>
              <ul className='list-none pl-6'>
                {property.placeOffer?.icon?.slice(5, 10).map((icon, index) => (
                  <li key={index} className='mb-4 flex gap-2 items-center'>
                    {Image && (
                      <Image
                        src={icon}
                        alt={`Icon ${index}`}
                        width={25}
                        height={25}
                        className='w-5 h-5'
                      />
                    )}
                    {property.placeOffer?.text[index]}
                  </li>
                ))}
              </ul>
            </div>

            {/* for mobile */}
            <div className='md:hidden'>
              <ul className='list-none'>
                {icons.slice(0, 5).map((icon: string, index: number) => (
                  <li key={index} className='my-4 flex gap-2 items-center'>
                    <Image
                      src={icon}
                      alt={`Icon ${index}`}
                      width={25}
                      height={25}
                      className='w-8 h-8'
                    />
                    {texts[index]}
                  </li>
                ))}
              </ul>

              {/* باقي العناصر في div collapsible */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expanded ? "max-h-[1000px]" : "max-h-0"
                }`}>
                <ul className='list-none'>
                  {icons.slice(3).map((icon: string, index: number) => (
                    <li
                      key={index + 3}
                      className='mb-4 flex gap-2 items-center'>
                      <Image
                        src={icon}
                        alt={`Icon ${index + 3}`}
                        width={25}
                        height={25}
                        className='w-8 h-8'
                      />
                      {texts[index + 3]}
                    </li>
                  ))}
                </ul>
              </div>

              {icons.length > 3 && (
                <button
                  onClick={() => setExpanded(!expanded)}
                  className='mt-2 px-4 py-2 rounded  transition w-full border border-gray-400 text-black font-semibold cursor-pointer'>
                  {expanded ? "Show Less" : "Show all amenities"}
                </button>
              )}
            </div>
          </div>

          {/* Reviews */}
          <div ref={reviewsRef} className='mt-4 w-full'>
            <div className='flex items-center gap-2 mb-4 text-2xl '>
              <span className='flex items-center gap-2 text-black text-md font-semibold'>
                {
                  <Image
                    src='/assets/Star2.svg'
                    alt='Star'
                    width={20}
                    height={20}
                    className='w-7 h-7'
                  />
                }
                {property.rating}
              </span>
              <span className='text-gray-500'>( 345 reviews )</span>
            </div>
            <ReviewSection reviews={property.reviews || []} />
          </div>

          {/* About host */}
          {/* <div ref={hostRef} className='mt-4 text-xl line text-[#161117] w-[90%]'>
            <h2 className='text-2xl font-semibold mb-2'>About host</h2>
            <p>{property.host}</p>
          </div>
        </div> */}
        </div>
        <BookingSection property={property} />
      </div>
      
      {/* booking section for mobile */}
      <div className='md:hidden w-full border-t-4 border-gray-200  py-4 px-4 rounded-lg mt-4 fixed bottom-0 left-0 bg-white flex justify-between items-center'>
              <div>
                <h3 className="text-xl font-bold">${property.price} <span className="text-gray-400 text-sm">/night</span></h3>
                <div className="font-bold text-sm">
                  <input
                    id="checkin"
                    type="text"
                    className="p-2 w-full mt-2 text-gray-800 outline-none"
                    lang="en"
                    placeholder="Add date"
                  />
              </div>
            

      </div>
              <Button text="Reserve now" className=" bg-[#34967C] text-white py-2 px-4 rounded-md " onClick={() => {
    router.push({
      pathname: "/booking",
      query: {
        name: property.name,
        price: property.price,
        id: property.id,
        image: property.image[0],
      },
    });
  }} />
      </div>
    </div>
  );
};

export default PropertyDetail;
