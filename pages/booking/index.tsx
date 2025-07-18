import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import Button from "@/components/common/Button";

interface BookingDetails {
  propertyName: string;
  price: number;
  bookingFee: number;
  totalNights: number;
  startDate: string;
  propertyId: string;
  image: string;
}

export default function BookingPage() {
  const router = useRouter();
  const { name, price, id, image } = router.query;

  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);

  useEffect(() => {
    if (router.isReady && name && price && id && image) {
      setBookingDetails({
        propertyName: String(name),
        price: Number(price),
        bookingFee: 65,
        totalNights: 3,
        startDate: "24 August 2024",
        propertyId: String(id),
        image: String(image),
      });
    }
  }, [router.isReady, name, price, id, image]);

  if (!bookingDetails) return <p className="text-center py-10">Loading booking info...</p>;

  return (
    <div className="container mx-auto py-2">
       <Button
                icon='/assets/Arrow Right.svg'
                text='Booking'
                className='flex items-center justify-center gap-2 py-1.5 bg-white cursor-pointer font-bold md:text-xl text-sm text-[#34967C] border-b-2 border-[#34967C] '
                onClick={() => {
                  router.push("/property/" + bookingDetails.propertyId);
                }}
                classNameIcon='rotate-180 md:w-8 md:h-8'
              />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>
    </div>
  );
}
