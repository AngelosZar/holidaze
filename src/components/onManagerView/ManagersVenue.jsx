import React, { useState } from 'react';
// No need to import a separate CSS file for the component anymore

function ManagersVenue({ venue, handleEditVenue, handleRemoveVenue }) {
  const [selectedBookingData, setSelectedBookingData] = useState(null);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false); // You might not need this if using flip only
  const [isFlipped, setIsFlipped] = useState(false); // State for flip

  const bookings = venue?.bookings || [];
  console.log('bookings', bookings);

  const handleShowMore = bookings => {
    setSelectedBookingData(bookings);

    setIsFlipped(true);
  };

  const handleGoBack = () => {
    setIsFlipped(false);
    setSelectedBookingData(null);
  };

  return (
    // fix padding and margin between img and text h-full?
    <div className="flip-card p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto w-full overflow-hidden">
      <div
        className={`flip-card-inner relative w-full h-full text-center transition-transform duration-800 ${
          isFlipped ? 'is-flipped' : ''
        }`}
      >
        <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg bg-white shadow-lg flex flex-col justify-between">
          <div className="h-full overflow-hidden rounded-t-xl">
            <img
              src={venue?.media?.[0]?.url || 'https://via.placeholder.com/150'}
              alt={venue?.name || 'Venue Image'}
              // className="w-full h-48 object-cover rounded-t-xl"
              className="w-full h-full object-cover rounded-t-xl"
              style={{ aspectRatio: '1/1' }}
              loading="lazy"
              width="100%"
              height="auto"
            />
          </div>
          <div className="p-3 ">
            <div className="mt-1 text-start flex flex-col justify-between w-full h-full">
              <div>
                <p className="font-semibold">{venue?.name}</p>
                <p className="font-semibold">${venue?.price}</p>
                <p className="text-sm text-gray-600">
                  Bookings: {venue?._count?.bookings || 0}
                </p>
              </div>
              <div className="flex flex-row gap-4 mt-4 text-start">
                <button
                  className="text-primary hover:text-primary60 font-medium"
                  onClick={() => handleEditVenue(venue.id)}
                >
                  Edit venue
                </button>
                <button
                  className="text-red-500 hover:text-red-700 font-medium"
                  onClick={() => handleRemoveVenue(venue.id)}
                >
                  Remove Venue
                </button>
                <button
                  onClick={() => handleShowMore(bookings)}
                  className="text-primary hover:text-primary60 font-medium"
                >
                  Show Bookings
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* back of card  */}
        <div className="flip-card-back absolute w-full h-full backface-hidden rounded-lg bg-white shadow-lg flex flex-col p-4 transform rotate-y-180">
          <p className="text-xl font-bold mb-3 text-center">
            Bookings for {venue?.name}
          </p>
          {bookings.length > 0 ? (
            <div className="overflow-y-auto flex-grow w-full flex flex-col gap-2">
              {bookings.map(booking => (
                <div
                  key={booking.id}
                  className="mb-3 p-2 border border-gray-200 rounded-md text-sm text-start"
                >
                  <p>
                    <span className="font-semibold">Customer: </span>
                    {booking.customer?.name || 'N/A'}
                  </p>
                  <p>
                    <span className="font-semibold">From: </span>
                    {booking.dateFrom}
                  </p>
                  <p>
                    <span className="font-semibold">To: </span> {booking.dateTo}
                  </p>
                  <p>
                    <span className="font-semibold">Guests: </span>
                    {booking.guests}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-primary flex-grow flex items-center justify-center">
              No bookings found for this venue.
            </p>
          )}
          <button
            onClick={handleGoBack}
            className="text-primary hover:text-primary40 font-medium mt-4 self-center"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default ManagersVenue;
