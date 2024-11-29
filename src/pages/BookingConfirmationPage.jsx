import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const BookingConfirmationPage = () => {
  const [addTransfer, setAddTransfer] = useState(false);

  const location = useLocation();
  const booking = location.state?.booking || {
    hotel: 'N/A',
    roomType: 'N/A',
    checkIn: 'N/A',
    checkOut: 'N/A',
    guests: 0,
    totalCost: 0,
  };

  const handleAlert = () => {
    alert('Your booking has been confirmed!');
  }

  return (
    <>
      <Helmet>
        <title>Booking Confirmation - HalalHolidayCheck</title>
        <meta name="description" content="Confirm your halal-friendly hotel booking and add optional airport transfers." />
        <meta name="robots" content="noindex" /> {/* Prevent indexing of personal booking information */}
      </Helmet>
      <div className="w-screen">
        <div className="w-[1440px] mx-auto w-max space-y-8">
        <h1 className="text-3xl font-bold">Booking Confirmation</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Booking Summary</h2>
          <div className="space-y-2">
            <p><strong>Hotel:</strong> {booking.hotel}</p>
            <p><strong>Room Type:</strong> {booking.roomType}</p>
            <p><strong>Check-in:</strong> {booking.checkIn}</p>
            <p><strong>Check-out:</strong> {booking.checkOut}</p>
            <p><strong>Guests:</strong> {booking.guests}</p>
            <p><strong>Total Cost:</strong> ${booking.totalCost}</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Add Airport Transfer</h2>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="addTransfer"
              checked={addTransfer}
              onChange={() => setAddTransfer(!addTransfer)}
              className="mr-2"
            />
            <label htmlFor="addTransfer">Yes, I would like to add airport transfer</label>
          </div>
          {addTransfer && (
            <div className="space-y-4">
              <div>
                <label className="block mb-2">Arrival Flight Number</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="Enter flight number" />
              </div>
              <div>
                <label className="block mb-2">Arrival Date and Time</label>
                <input type="datetime-local" className="w-full p-2 border rounded" />
              </div>
              <button className="bg-[#104D2D] text-white px-4 py-2 rounded hover:bg-green-700">
                Add Transfer
              </button>
            </div>
          )}
        </div>

        <div className="text-center">
          <button onClick={handleAlert} className="bg-[#104D2D] text-white px-6 py-3 rounded-lg hover:bg-green-700 text-lg mb-[120px]">
            Confirm Booking
          </button>
        </div>
        </div>
      </div>
    </>
  );
};

export default BookingConfirmationPage;

