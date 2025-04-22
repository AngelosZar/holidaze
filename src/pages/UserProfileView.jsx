import Layout from '../components/layout/Layout';
import { UserOnHeroSection } from '../components/onSingleVenue/onProfile/UserOnHeroSection';
import { UpComingBookingCard } from '../components/onSingleVenue/onProfile/UpComingBookingCard';
function UserProfileView() {
  return (
    <Layout>
      <>
        <UserOnHeroSection />
        <UpComingBookings />
      </>
    </Layout>
  );
}

export default UserProfileView;

function UpComingBookings() {
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
