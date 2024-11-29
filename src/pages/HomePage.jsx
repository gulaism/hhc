import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { MdOutlinePool } from "react-icons/md";



const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>HalalHolidayCheck - Halal-Friendly Hotel Reservations</title>
        <meta
          name="description"
          content="Book halal-friendly hotels, airport transfers, and special offers for your perfect holiday."
        />
      </Helmet>
      <div>
        <section className="relative bg-[url('../../public/assets/images/HomePage/bgHead.jpg')] w-screen bg-cover h-[800px] max-sm:h-[276px] mb-[80px] max-sm:mb-[32px]">
          <div className="absolute z-10 inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-20 w-[1440px] max-sm:w-screen mx-auto pl-[165px] max-sm:pl-[16px] pt-[90px] max-sm:pt-[48px]">
            <h1 className="text-[70px] max-sm:text-[24px] w-[726px] max-sm:w-[180px] text-white font-bold mb-[36px] max-sm:mb-[14px]">
              Welcome to HalalHolidayCheck
            </h1>
            <p className="mb-[48px] max-sm:mb-[24px] text-[24px] max-sm:text-[12px] text-gray-100">
              Your gateway to halal-friendly holidays
            </p>
            <button
              className="h-[52px] max-sm:h-[34px] font-medium text-[18px] max-sm:text-[9px] py-[12px] max-sm:py-[10px] px-[48px] max-sm:px-[24px] rounded-[2px] text-white"
              style={{
                backgroundImage: "linear-gradient(to right top, #051910, #0a2216, #0b2b1c, #0c3521, #0e3f26, #215037, #336149, #45735b, #6b907e, #93aea3, #bdcdc7, #e9eceb)"}}
            >
              LEARN MORE
            </button>
          </div>
        </section>

        <section className="w-[1440px] max-sm:w-auto px-[165px] max-sm:px-[16px] mx-auto mb-[80px] max-sm:mb-[20px]">
          <div className="mb-[40px] max-sm:mb-[16px] font-bold text-[32px] max-sm:text-[20px] text-[#1C3A2D]">
            Services
          </div>
          <div className="grid max-sm:block md:grid-cols-3 gap-8 max-sm:gap-4">
            <div className="max-sm:w-[300px] mb-[30px] bg-white p-[12px] rounded-lg shadow-md">
              <div className="h-[180px] max-sm:h-[132px] mb-[16px]">
                <img
                  className="size-full object-cover"
                  src="../../public/assets/images/HomePage/hotelReservationPic.jpg"
                  alt="hotel reservation"
                />
              </div>
              <h2 className="text-2xl max-sm:text-lg font-semibold mb-[12px] max-sm:mb-[8px]">
                Hotel Reservations
              </h2>
              <p>Find and book halal-friendly hotels worldwide.</p>
              <Link
                to="/hotels"
                className="mt-4 inline-block bg-[#104D2D] text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Browse Hotels
              </Link>
            </div>
            <div className="max-sm:w-[300px] mb-[30px] bg-white p-[12px] rounded-lg shadow-md">
              <div className="h-[180px] max-sm:h-[132px] mb-[16px]">
                <img
                  className="size-full object-cover"
                  src="../../public/assets/images/HomePage/airportPic.jpg"
                  alt="airport transfers"
                />
              </div>
              <h2 className="max-sm:text-lg max-sm:mb-[8px] text-2xl font-semibold mb-[12px]">Airport Transfers</h2>
              <p>Convenient and reliable airport transfer services.</p>
              <button className="mt-4 bg-[#104D2D] text-white px-4 py-2 rounded hover:bg-green-700">
                Book Transfer
              </button>
            </div>
            <div className="max-sm:w-[300px] mb-[30px] bg-white p-[12px] rounded-lg shadow-md">
              <div className="h-[180px] max-sm:h-[132px] mb-[16px]">
                <img
                  className="size-full object-cover"
                  src="../../public/assets/images/HomePage/specialOffers.jpg"
                  alt="special offers"
                />
              </div>
              <h2 className="max-sm:text-lg max-sm:mb-[8px] text-2xl font-semibold mb-[12px]">Special Offers</h2>
              <p>Exclusive deals and packages for your halal holiday.</p>
              <button className="mt-4 bg-[#104D2D] text-white px-4 py-2 rounded hover:bg-green-700">
                View Offers
              </button>
            </div>
          </div>
        </section>

        <section className="w-[1440px] max-sm:w-auto px-[165px] max-sm:px-[16px] mx-auto rounded-lg mb-[120px] max-sm:mb-[72px]">
          <h2 className="mb-[56px] max-sm:mb-[24px] font-bold text-[32px] max-sm:text-[20px] text-[#1C3A2D]">
            Our Features
          </h2>
          <div className="grid md:grid-cols-2 max-sm:block gap-[30px]">
            <div className="max-sm:mb-[15px] border bg-white rounded-lg shadow-md py-[32px] max-sm:py-[24px] px-[34px] max-sm:px-[20px]">
              <MdOutlinePool size={80} className="mb-[16px] max-sm:mb-[12px] mx-auto max-sm:size-[48px]" />
              <h3 className="text-[18px] max-sm:text-[14px] font-bold mb-[12px]">
                Separate Pools for Women
              </h3>
              <p className="text-grey-100 text-[14px] max-sm:text-[10px]">
                Enjoy privacy and comfort with our selection of hotels offering
                separate pool facilities for women.
              </p>
            </div>
            <div className="border bg-white rounded-lg shadow-md py-[32px] max-sm:py-[24px] px-[34px] max-sm:px-[20px]">
              <div className="size-[80px] max-sm:size-[48px] mx-auto mb-[16px] max-sm:mb-[12px]"><img className="size-full object-cover" src="../../public/assets/images/HomePage/no-alcohol.svg" alt="alcohol-free" /></div>
              <h3 className="text-[18px] max-sm:text-[14px] font-bold mb-[12px]">
                Alcohol-Free Packages
              </h3>
              <p className="text-grey-100 text-[14px] max-sm:text-[10px]">
                Experience a truly halal environment with our alcohol-free
                holiday packages.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
