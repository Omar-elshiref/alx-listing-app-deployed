import { PropertyProps } from "@/interfaces";
import Image from "next/image";
import { useRouter } from 'next/router';


type Props = {
  property: PropertyProps;
};

const Card = ({ property }: Props) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/property/${property.id}`); // غيّر المسار حسب هيكل مشروعك
  };

  return (
    <div className="p-0 rounded-2xl w-full cursor-pointer" onClick={handleClick}>
    <div className="relative">
      <Image
        src={property.image[0]}
        alt={property.name}
        width={400}
        height={300}
        className="w-full h-64 object-cover rounded-2xl"
        priority
      />
      {property.discount && property.discount !== "0" && (
        <span className="absolute top-3 -left-1 bg-emerald-400 text-white px-2 py-1 rounded-lg text-sm flex items-center gap-1">
          <Image src="/assets/DIscount.svg" alt="Discount Icon" width={20} height={20} /> {property.discount}% Off
        </span>
      )}
      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === 3 ? "bg-gray-800" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
    <div className="py-6">
      {/* Categories */}
      <div className="flex gap-2 mb-4 w-full">
        {property.category.map((cat) => (
          <span
            key={cat}
            className="bg-gray-100 text-gray-700 px-2 py-1 text-nowrap rounded-full text-sm"
          >
            {cat}
          </span>
        ))}
      </div>
      {/* Title & Rating */}
      <div className="flex items-center justify-between mb-1">
        <h2 className="text-xl font-semibold">{property.name}</h2>
        <span className="flex items-center gap-1 font-bold">
          <Image
            src="/assets/Star2.svg"
            alt="Star Icon"
            width={20}
            height={20}
            style={{ width: "1.2rem", height: "1.2rem" }}
          />
          {property.rating}
        </span>
      </div>
      {/* Address */}
      <div className="text-gray-400 mb-4 text-base">
        {property.address.state}, {property.address.city}, {property.address.country}
      </div>
      {/* Offers */}
      <div className="flex justify-between items-center gap-8 mb-4">
       <div className="flex justify-between gap-5 items-center text-nowrap border border-gray-300 rounded-full px-4 py-2">
         <span className="flex items-center gap-1.5 text-black text-md">
          <Image
            src="/assets/bed 1.svg"
            alt="Bed Icon"
            width={20}
            height={20}
          />
          {property.offers.bed}
        </span>
        <span className="flex items-center gap-1 text-black text-md">
          <Image
            src="/assets/bathtub 1.svg"
            alt="bathtub Icon"
            width={20}
            height={20}
          /> 
          {property.offers.shower}
        </span>
        <span className="flex items-center gap-1 text-black text-md">
          <Image
            src="/assets/people 1.svg"
            alt="people"
            width={20}
            height={20}
          /> 
          {property.offers.occupants}
        </span>
       </div>
      {/* Price */}
      <div className="flex items-center justify-end">
        <span className="text-2xl font-bold">${property.price.toLocaleString("en-US")}</span>
        <span className="text-gray-400 text-lg ml-1">/n</span>
      </div>
      </div>
    </div>
  </div>
  );
};

export default Card;