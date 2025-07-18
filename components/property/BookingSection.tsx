import { useRouter } from 'next/router'
import Button from "../common/Button";
import {PropertyProps} from '@/interfaces/';


const BookingSection: React.FC<{ property: PropertyProps }> = ({property}) => {

  const router = useRouter()
  return (

    <div className="bg-white p-6 shadow-md rounded-lg lg:w-1/4 md:w-[35%] h-1/4 hidden md:block">
      <h3 className="text-xl font-bold border-b pb-2 border-gray-200">${property.price} <span className="text-gray-400 text-sm">/night</span></h3>
      <div className="mt-4 font-bold text-sm">
        <label htmlFor="checkin">Check-in</label>
        <input
          id="checkin"
          type="date"
          className="border p-2 w-full mt-2 border-gray-200 text-gray-800"
          lang="en"
        />
      </div>
      <div className="mt-4 font-bold text-sm">
        <label htmlFor="checkout">Check-out</label>
        <input
          id="checkout"
          type="date"
          className="border p-2 w-full mt-2 border-gray-200 text-gray-800"
          lang="en"
        />
      </div>

    <div className="mt-4 font-bold text-sm flex flex-col gap-3 border-b pb-4 border-gray-200">
      <div className="flex justify-between">
        <span className="text-gray-400">$50 x 7 nights</span>
        <span>$350</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Weekly discounts</span>
        <span>-$88</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-400">Service fee</span>
        <span>$33</span>
      </div>
    </div>

      {/* Total payment */}
      <div className="mt-4 flex justify-between font-bold text-sm">
        <span className="text-gray-400">Total payment</span> 
        <strong className="font-bold text-[#34967C]">${property.price * 7}</strong>
      </div>

      {/* Reserve button */}
      <Button text="Reserve now" className="mt-4 bg-[#34967C] text-white py-2 px-4 rounded-md w-full" onClick={() => {
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

  );
};

export default BookingSection;