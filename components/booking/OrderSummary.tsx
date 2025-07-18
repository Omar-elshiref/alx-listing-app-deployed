import Image from 'next/image';
import { BookingDetails } from '@/interfaces/index';


const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => (
  <div className="bg-white p-6 shadow-md rounded-lg h-fit order-1 md:order-2">
    <h2 className="text-xl font-semibold">Review Order Details</h2>
    <div className="flex flex-col mt-4">
      <div className="w-full xl:h-70">
              <Image src={bookingDetails.image} alt={bookingDetails.propertyName} className="w-full h-full  aspect-square rounded-md" width={400} height={400} />
      </div>
      <div className="flex flex-col mt-4  gap-2">
        <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
        <div className="text-sm text-gray-500 flex items-center gap-2">
          <span>{
                        <Image
                          src='/assets/Star2.svg'
                          alt='Star'
                          width={20}
                          height={20}
                          className='w-5 h-5'
                        />}</span>  <span>4.76 (345 reviews)</span></div>
        <p className="text-sm text-gray-500">{bookingDetails.startDate} • {bookingDetails.totalNights} Nights</p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;