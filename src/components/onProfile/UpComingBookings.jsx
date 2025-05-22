import { UpComingBookingCard } from './UpComingBookingCard';
import CurrentBookingsSection from '../onManagerView/CurrentBookingsSection';
export function UpComingBookings() {
  return (
    <div className="w-full mt-10 mb-10">
      <h2>Upcoming Bookings</h2>

      <div className="grid grid-cols-1 mt-14 gap-4">
        <CurrentBookingsSection />
      </div>
    </div>
  );
}
