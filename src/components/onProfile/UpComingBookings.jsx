import { UpComingBookingCard } from './UpComingBookingCard';

export function UpComingBookings() {
  return (
    <div className="w-full mt-10 mb-10">
      <h2>Upcoming Bookings</h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> */}
      <div className="grid grid-cols-1 mt-14 gap-4">
        <UpComingBookingCard />
        <UpComingBookingCard />
        <UpComingBookingCard />
      </div>
    </div>
  );
}
