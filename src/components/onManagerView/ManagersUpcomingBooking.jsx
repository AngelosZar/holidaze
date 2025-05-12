import venuesStore from '../../stores/venuesStore';

function ManagersUpcomingBooking({ venue, loading, error }) {
  // console.log('venue:', venue);
  const { deleteVenue } = venuesStore();
  const handleEditVenue = () => {
    console.log('Edit venue');
  };
  const handleRemoveVenue = async () => {
    console.log('Remove venue');
    await deleteVenue(venue.id);
    console.log('Venue removed');
    // pop up message are you sure wou want to delete this venue ?
    // then confirm and delete the venue

    // then refresh and show a message that the venue was removed
  };
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-white shadow-lg rounded-lg max-w-md">
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
            <p className="font-semibold">{venue?.description}</p>
            <p>{venue?._count?.bookings}</p>
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
