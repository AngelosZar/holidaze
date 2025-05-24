export function UpComingBookingCard({ booking, loading, error }) {
  let venue = booking?.data;
  console.log('booking', booking);
  console.log(
    'booking?.data?.venue.media[0]',
    booking?.data?.venue.media[0].url[0]
  );
  // console.log('venue.venue', venue?.venue);
  // console.log('venueMedia', booking?.venue?.media?.[0]?.url);
  return (
    <div className="flex flex-row gap-4 p-4 bg-white shadow-lg rounded-lg max-w-md">
      <div>
        <img
          src={
            booking?.data?.venue.media[0]?.url ||
            'https://via.placeholder.com/150'
          }
          alt="img"
          className="w-full h-48 object-cover rounded-t-xl"
          style={{ aspectRatio: '1/1' }}
          loading="lazy"
          width="100%"
          height="auto"
        />
      </div>
      <div className="p-3 ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{venue.title}</p>
          <p className="">
            Check in: {new Date(venue?.dateFrom).toLocaleDateString('nb-NO')}
          </p>
          <p className="">
            Check out: {new Date(venue?.dateTo).toLocaleDateString('nb-NO')}
          </p>
          <p>Number of guests: {booking?.data?.guests}</p>
          <p className="">Amount prepaid: 0 nok</p>
          <div className="flex justify-between text-primary">
            <span className="mr-1">★ {venue?.venue?.owner?.rating}</span>
            <span>4 Reviews</span>
          </div>
        </div>
        <p className="text-sm font-medium mt-1">
          {venue?.venue?.price} kr per night
        </p>
        <div className="flex justify-between mt-1">
          <button className="text-red-500 hover:text-red-700">Cancel</button>
          <button className="text-primary hover:text-primary80">
            Change dates
          </button>
        </div>
      </div>
    </div>
  );
}
