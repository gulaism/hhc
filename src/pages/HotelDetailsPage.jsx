import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const HotelDetailsPage = () => {
  const { id } = useParams();
  const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: "",
  });
  const navigate = useNavigate();

  // Mock hotel data
  const hotel = {
    id: 1,
    name: "Halal Resort & Spa",
    location: "Maldives",
    description: "Experience luxury and comfort in our halal-friendly resort.",
    rating: 4.5,
    price: 250,
    images: ["../../public/assets/images/HomePage/bgHead.jpg", "../../public/assets/images/HomePage/bgHead.jpg", "../../public/assets/images/HomePage/bgHead.jpg"],
    roomTypes: [
      { id: 1, name: "Standard Room", price: 250 },
      { id: 2, name: "Deluxe Room", price: 350 },
      { id: 3, name: "Family Suite", price: 500 },
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedRoom = hotel.roomTypes.find(
      (room) => room.id === parseInt(booking.roomType)
    );
    const totalCost =
      (selectedRoom.price *
        (new Date(booking.checkOut) - new Date(booking.checkIn))) /
      (1000 * 60 * 60 * 24);
    const bookingDetails = {
      ...booking,
      hotel: hotel.name,
      roomType: selectedRoom.name,
      totalCost: totalCost,
    };
    navigate("/booking-confirmation", { state: { booking: bookingDetails } });
  };

  return (
    <>
      <Helmet>
        <title>{`${hotel.name} - HalalHolidayCheck`}</title>
        <meta
          name="description"
          content={`Book your stay at ${hotel.name}. ${hotel.description}`}
        />
      </Helmet>
      <div className="w-screen">
        <div className="w-[1440px] max-sm:w-screen mx-auto px-[165px] max-sm:px-[16px] pt-[56px] max-sm:pt-[24px] pb-[120px] max-sm:pb-[48px]">
          <h1 className="text-3xl font-bold">{hotel.name}</h1>
          <div className="grid md:grid-cols-2 gap-8 mb-[56px]">
            <div>
              <img
                src={hotel.images[0]}
                alt={hotel.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                {hotel.images.slice(1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Room ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-gray-600">{hotel.location}</p>
              <p>{hotel.description}</p>
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">★</span>
                <span>{hotel.rating.toFixed(1)}</span>
              </div>
              <p className="text-green-600 font-bold">
                Starting from ${hotel.price} per night
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Book Your Stay</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Check-in Date</label>
                <input
                  type="date"
                  name="checkIn"
                  value={booking.checkIn}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Check-out Date</label>
                <input
                  type="date"
                  name="checkOut"
                  value={booking.checkOut}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Number of Guests</label>
                <input
                  type="number"
                  name="guests"
                  value={booking.guests}
                  onChange={handleInputChange}
                  min="1"
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Room Type</label>
                <select
                  name="roomType"
                  value={booking.roomType}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="">Select a room type</option>
                  {hotel.roomTypes.map((room) => (
                    <option key={room.id} value={room.id}>
                      {room.name} - ${room.price}/night
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Book Now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HotelDetailsPage;
