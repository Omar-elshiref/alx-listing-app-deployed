export type ButtonProps = {
  text?: string; // Optional, as some buttons may not have text
  className?: string;
  onClick?: () => void;
  icon?: string;
  classNameIcon?: string;
};

export interface PropertyProps {
  id: string | number;
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string[];
  discount?: string; // Optional, as not all properties may have a discount
  description?: string; // Optional, as not all properties may have a description
  placeOffer?: {
      icon: string[],
      text: string[]
    }
  reviews?: {
    avatar: string;
    name: string;
    data: string;
    years: number;
    rating: number;
    comment: string;
  }[];
}

export interface PropertyType {
  name: string;
  icon: string;
}

export interface PillProps {
  filters: string[];
  activeFilter?: string;
  onClick?: (filter: string) => void;
  className?: string;
}
export interface ACCOMMODATIONProps {
 ACCOMMODATIONTYPES: PropertyType[];
  activeFilter?: string;
  onClick?: (type: PropertyType) => void;
  className?: string;
}

export interface Review  {
  avatar: string;
    name: string;
    data: string;
    years: number;
    rating: number;
    comment: string;
}

export interface  BookingDetails  {
  propertyName: string;
  startDate: string;
  totalNights: number;
  bookingFee: number;
  price: number;
  propertyId: string;
  image: string;
}

export interface FilterByCategory {
  (PROPERTYLISTINGSAMPLE: PropertyProps[], selected: string): PropertyProps[];
}