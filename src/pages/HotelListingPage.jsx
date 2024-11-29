import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const HotelListingPage = () => {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    amenities: [],
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [showedFilter, setShowedFilter] = useState(false);

  const hotels = [
    { id: 1, name: 'Halal Resort & Spa', location: 'Maldives', price: 250, rating: 4.5, image: '../../public/assets/images/HomePage/bgHead.jpg', amenities: ['Prayer Room', 'Halal Food', 'Women-only Pool'] },
    { id: 2, name: 'Islamic Oasis Hotel', location: 'Dubai', price: 180, rating: 4.2, image: '../../public/assets/images/HomePage/bgHead.jpg', amenities: ['Prayer Room', 'Halal Food'] },
    { id: 3, name: 'Modest Haven', location: 'Turkey', price: 120, rating: 4.0, image: '../../public/assets/images/HomePage/bgHead.jpg', amenities: ['Halal Food', 'Women-only Pool'] },
    { id: 4, name: 'Crescent Moon Resort', location: 'Malaysia', price: 200, rating: 4.3, image: '../../public/assets/images/HomePage/bgHead.jpg', amenities: ['Prayer Room', 'Halal Food'] },
    { id: 5, name: 'Halal Harmony Inn', location: 'Indonesia', price: 150, rating: 4.1, image: '../../public/assets/images/HomePage/bgHead.jpg', amenities: ['Halal Food', 'Women-only Pool'] },
  ];

  useEffect(() => {
    filterHotels();
  }, [filters, searchQuery]);

  const filterHotels = () => {
    const filtered = hotels.filter(hotel => {
      const locationMatch = hotel.location.toLowerCase().includes(filters.location.toLowerCase());
      const priceMatch = filters.priceRange === '' || 
        (filters.priceRange === '0-100' && hotel.price <= 100) ||
        (filters.priceRange === '101-200' && hotel.price > 100 && hotel.price <= 200) ||
        (filters.priceRange === '201+' && hotel.price > 200);
      const amenitiesMatch = filters.amenities.length === 0 || 
        filters.amenities.every(amenity => hotel.amenities.includes(amenity));
      const searchMatch = hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchQuery.toLowerCase());

      return locationMatch && priceMatch && amenitiesMatch && searchMatch;
    });

    setFilteredHotels(filtered);
  };

  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFilters(prev => ({
        ...prev,
        amenities: checked
          ? [...prev.amenities, value]
          : prev.amenities.filter(item => item !== value)
      }));
    } else {
      setFilters(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const showFilter = () => {
    setShowedFilter(!showedFilter);
  }

  return (
    <>
      <Helmet>
        <title>HalalHolidayCheck - Browse Halal-Friendly Hotels</title>
        <meta name="description" content="Find and book halal-friendly hotels worldwide. Use our filters to find the perfect accommodation for your needs." />
      </Helmet>
      <div className="w-screen max-sm:w-[375px] max-sm:mx-auto">
        <div className="grid max-sm:block md:grid-cols-4 gap-8 w-[1440px] max-sm:w-screen mx-auto px-[165px] max-sm:px-[16px] pt-[56px] max-sm:pt-[24px] max-sm:pb-[0px] pb-[120px]">
          <div className="h-min max-sm:w-[375px] md:col-span-1 border border-[#D6D6C5] px-[16px] pb-[10px] space-y-[18px] rounded-[4px] max-sm:mb-[15px]">
            <h2 onClick={showFilter} className="text-[24px] py-[10px] px-[16px] font-semibold">Filters</h2>
            <div className={`${showedFilter ? 'max-sm:block' : 'max-sm:hidden'}`}>
              <label htmlFor="location" className="block mb-2">Location</label>
              <input
                type="text"
                id="location"
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded"
                placeholder="Enter location"
              />
            </div>
            <div className={`${showedFilter ? 'max-sm:block' : 'max-sm:hidden'}`}>
              <label htmlFor="priceRange" className="block mb-2">Price Range</label>
              <select
                id="priceRange"
                name="priceRange"
                value={filters.priceRange}
                onChange={handleFilterChange}
                className="w-full p-2 border rounded"
              >
                <option value="">All Prices</option>
                <option value="0-100">$0 - $100</option>
                <option value="101-200">$101 - $200</option>
                <option value="201+">$201+</option>
              </select>
            </div>
            <div className={`${showedFilter ? 'max-sm:block' : 'max-sm:hidden'}`}>
              <label className="block mb-2">Amenities</label>
              <div className="space-y-2">
                {['Prayer Room', 'Halal Food', 'Women-only Pool'].map(amenity => (
                  <label key={amenity} className="flex items-center">
                    <input
                      type="checkbox"
                      name="amenities"
                      value={amenity}
                      checked={filters.amenities.includes(amenity)}
                      onChange={handleFilterChange}
                      className="mr-2"
                    />
                    {amenity}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search hotels by name or location"
                value={searchQuery}
                onChange={handleSearchChange}
                className="w-full p-2 border rounded"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredHotels.length > 0 ? (
                filteredHotels.map(hotel => (
                  <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" loading="lazy" />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                      <p className="text-gray-600 mb-2">{hotel.location}</p>
                      <p className="text-green-600 font-bold mb-2">${hotel.price} per night</p>
                      <div className="flex items-center mb-4">
                        <span className="text-yellow-500 mr-1">★</span>
                        <span>{hotel.rating.toFixed(1)}</span>
                      </div>
                      <Link to={`/hotels/${hotel.id}`} className="block text-center bg-[#104D2D] text-white px-4 py-2 rounded hover:bg-green-700">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="md:col-span-3 text-center text-gray-600">
                  No hotels found matching your criteria. Please try adjusting your filters or search query.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelListingPage;

