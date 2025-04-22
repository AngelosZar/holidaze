import Layout from '../components/layout/Layout';
import { UserOnHeroSection } from '../components/onProfile/UserOnHeroSection';
import { UpComingBookings } from '../components/onProfile/UpComingBookings';
import SingleCard from '../components/SingleCard';
function UserProfileView() {
  return (
    <Layout>
      <>
        <UserOnHeroSection />
        <UpComingBookings />
        <PreviousBookings />
      </>
    </Layout>
  );
}

export default UserProfileView;

function PreviousBookings() {
  return (
    <div className="w-full mt-10 mb-10">
      <h2>Previous Bookings</h2>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    </div>
  );
}
