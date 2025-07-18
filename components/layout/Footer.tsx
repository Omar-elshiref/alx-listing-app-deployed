const Footer = () => {
  return (
    <footer className="bg-[#232624] text-white font-sans border-t-20 border-[#34967c]">
      <div className="flex flex-wrap justify-between px-8 py-10 md:py-12 gap-y-8">
        {/* Logo & Description */}
        <div className="flex-1 min-w-[250px] mb-4">
          <div className="font-bold text-3xl mb-4">alx</div>
          <div className="text-[#bdbdbd] text-[15px] leading-relaxed">
            ALX is a platform where travelers can discover and book unique, comfortable, and affordable lodging options worldwide. From cozy city apartments and tranquil countryside retreats to exotic beachside villas, ALX connects you with the perfect place to stay for any trip.
          </div>
        </div>
        {/* Explore */}
        <div className="flex-1 min-w-[180px] md:ml-10 mb-4">
          <div className="font-bold text-lg mb-4">Explore</div>
          <ul className="text-[#bdbdbd] text-[15px] space-y-2">
            <li><a href="#" className="hover:underline">Apartments in Dubai</a></li>
            <li><a href="#" className="hover:underline">Hotels in New York</a></li>
            <li><a href="#" className="hover:underline">Villa in Spain</a></li>
            <li><a href="#" className="hover:underline">Mansion in Indonesia</a></li>
          </ul>
        </div>
        {/* Company */}
        <div className="flex-1 min-w-[180px] md:ml-10 mb-4">
          <div className="font-bold text-lg mb-4">Company</div>
          <ul className="text-[#bdbdbd] text-[15px] space-y-2">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Career</a></li>
            <li><a href="#" className="hover:underline">Customers</a></li>
            <li><a href="#" className="hover:underline">Brand</a></li>
          </ul>
        </div>
        {/* Help */}
        <div className="flex-1 min-w-[180px] md:ml-10 mb-4">
          <div className="font-bold text-lg mb-4">Help</div>
          <ul className="text-[#bdbdbd] text-[15px] space-y-2">
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Cancel booking</a></li>
            <li><a href="#" className="hover:underline">Refunds Process</a></li>
          </ul>
        </div>
      </div>
      {/* Divider */}
      <div className="border-t border-[#393c39] mx-8 my-4" />
      {/* Notice & Links */}
      <div className="flex flex-col md:flex-row justify-between items-center px-8 pb-4 text-[14px] text-[#bdbdbd] gap-y-2">
        <div>
          Some hotel requires you to cancel more than 24 hours before check-in. Details{" "}
          <a href="#" className="text-[#3bb89f] hover:underline">here</a>
        </div>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Policy service</a>
          <a href="#" className="hover:underline">Cookies Policy</a>
          <a href="#" className="hover:underline">Partners</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;