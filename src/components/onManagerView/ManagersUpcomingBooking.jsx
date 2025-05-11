function ManagersUpcomingBooking({ venue, loading, error }) {
  // console.log('venue:', venue);
  const handleEditVenue = () => {
    console.log('Edit venue');
  };
  const handleRemoveVenue = () => {
    console.log('Remove venue');
  };
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-white shadow-lg rounded-lg max-w-md">
      <div>
        <img
          src={venue?.media?.url || 'https://via.placeholder.com/150'}
          alt={venue?.media?.url || ' Image'}
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
            <p className="font-semibold">{venue?.description}</p>
            <p>{venue?._count.bookings}</p>
          </div>
          <div>
            <button
              className="text-primary hover:text-primary80"
              onClick={handleEditVenue}
            >
              Edit venue
            </button>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={handleRemoveVenue}
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
