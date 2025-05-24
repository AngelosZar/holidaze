function ManagersUpcomingBooking({
  booking,
  handleEditVenue,
  handleRemoveVenue,
}) {
  // console.log('venue on line 6:', booking);
  // console.log('venue on line 7:', booking);
  console.log('venueMedia', booking?.venue?.media?.[0]?.url);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto w-full">
      <div>
        <img
          src={
            booking?.data?.venue.media[0]?.url ||
            'https://via.placeholder.com/150'
          }
          alt={booking?.data?.venue.media[0]?.alt || 'Venue Image'}
          className="w-full h-48 object-cover rounded-t-xl"
          style={{ aspectRatio: '1/1' }}
          loading="lazy"
          width="100%"
          height="auto"
        />
      </div>
      <div className="p-3 ">
        <div className="mt-1 text-start flex flex-col justify-between w-full h-full">
          <div>
            {/* <p className="font-semibold">{booking?.venue?.name}</p> */}

            {/* {/* <p>{venue?._count?.bookings}</p> */}
          </div>
          <div className="flex flex-row gap-4 mt-4 text-start">
            <button
              className="text-primary hover:text-primary80"
              // onClick={() => handleEditVenue(venue.id)}
            >
              Edit venue / edit dates
            </button>
            <button
              className="text-red-500 hover:text-red-700 rounded-lg px-2 py-1"
              // onClick={() => handleRemoveVenue(venue.id)}
            >
              Remove Venue/ cancel booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ManagersUpcomingBooking;
