import CancellationPolicy from "./CancellationPolicy";
import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
   city: "",
  state: "",
  zipCode: "",
  country: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
const [success, setSuccess] = useState<string | null>(null);
  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!isFormValid()) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("/api/bookings", formData);
      setSuccess("Booking confirmed!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
        city: "",
  state: "",
  zipCode: "",
  country: "",
      });
    } catch (error: unknown) {
     if (error instanceof Error) {
    setError(`Failed to submit booking: ${error.message}`);
  } else {
    setError('An unknown error occurred');
  }
    } finally {
      setLoading(false);
    }
  };
  
  return (
  <div className="bg-white p-6 shadow-md rounded-lg xl:col-span-2 order-2 md:order-1">
    <h2 className="text-xl font-semibold">Contact Detail</h2>
    <form onSubmit={handleSubmit}>
      {/* Contact Information */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>First Name</label>
          <input type="text" className="border p-2 w-full mt-2" name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}/>
        </div>

        <div>
          <label>Last Name</label>
          <input type="text" className="border p-2 w-full mt-2" name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange} />
        </div>

      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Email</label>
          <input type="email" className="border p-2 w-full mt-2" name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}/>
        </div>

        <div>
          <label>Phone Number</label>
          <input type="text" className="border p-2 w-full mt-2" name="phoneNumber"
        placeholder="Phone Number"
        value={formData.phoneNumber}
        onChange={handleChange}/>
        </div>

      </div>

      {/* Payment Information */}
      <h2 className="text-xl font-semibold mt-6">Pay with</h2>
      <div className="mt-4">
        <label>Card Number</label>
        <input type="text" className="border p-2 w-full mt-2"  name="cardNumber"
        placeholder="Card Number"
        value={formData.cardNumber}
        onChange={handleChange}/>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Expiration Date</label>
          <input type="text" className="border p-2 w-full mt-2" name="expirationDate"
        placeholder="Expiration Date"
        value={formData.expirationDate}
        onChange={handleChange}/>
        </div>
        <div>
          <label>CVV</label>
          <input type="text" className="border p-2 w-full mt-2" name="cvv"
        placeholder="CVV"
        value={formData.cvv}
        onChange={handleChange}/>
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="text-xl font-semibold mt-6">Billing Address</h2>
      <div className="mt-4">
        <label>Street Address</label>
        <input type="text" className="border p-2 w-full mt-2" name="billingAddress"
        placeholder="Billing Address"
        value={formData.billingAddress}
        onChange={handleChange}/>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>City</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="City"
        value={formData.city}
        onChange={handleChange} 
        name="city"/>
        </div>
        <div>
          <label>State</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="State"
        value={formData.state}
        onChange={handleChange}
        name="state"/>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label>Zip Code</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="Zip Code"
        value={formData.zipCode}
        onChange={handleChange}
        name="zipCode"/>
        </div>
        <div>
          <label>Country</label>
          <input type="text" className="border p-2 w-full mt-2" placeholder="Country"
        value={formData.country}
        onChange={handleChange}
        name="country"/>
        </div>
      </div>

      {/* Submit Button */}
<button
        type="submit"
        disabled={loading}
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md w-full cursor-pointer hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>  
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}  
      </form>
    <CancellationPolicy />
  </div>
)}
