function ManagersUpcomingBooking({
  venue,
  handleEditVenue,
  handleRemoveVenue,
}) {
  // console.log('venue:', venue);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-md mx-auto w-full">
      <div>
        <img
          src={venue?.media?.[0]?.url || 'https://via.placeholder.com/150'}
          alt={venue?.name || 'Venue Image'}
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
            <p className="font-semibold">{venue?.name}</p>
            {/* <p className="font-semibold">{venue?.description}</p> */}
            <p className="font-semibold">{venue?.price}</p>
            <p>{venue?._count?.bookings}</p>
          </div>
          <div className="flex flex-row gap-4 mt-4 text-start">
            <button
              className="text-primary hover:text-primary80"
              onClick={() => handleEditVenue(venue.id)}
            >
              Edit venue
            </button>
            <button
              className="text-red-500 hover:text-red-700 rounded-lg px-2 py-1"
              onClick={() => handleRemoveVenue(venue.id)}
            >
              Remove Venue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ManagersUpcomingBooking;
