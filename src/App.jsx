import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HotelListingPage from "./pages/HotelListingPage";
import HotelDetailsPage from "./pages/HotelDetailsPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hotels" element={<HotelListingPage />} />
        <Route path="/hotels/:id" element={<HotelDetailsPage />} />
        <Route path="/booking-confirmation" element={<BookingConfirmationPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
