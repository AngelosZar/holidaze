import Layout from '../components/layout/Layout';
import { UserOnHeroSection } from '../components/onProfile/UserOnHeroSection';
import CurrentBookingsSection from '../components/onManagerView/CurrentBookingsSection';
//
import { EditVenueDropDown } from '../components/onManagerView/EditVenueDropDown';
import ManageMyAccount from '../components/onManagerView/ManageMyAccount';
import CreateAVenue from '../components/onManagerView/CreateAVenue';
import ManagersUpcomingBooking from '../components/onManagerView/ManagersUpcomingBooking';
import UsersVenueSection from '../components/onManagerView/UsersVenueSection';

function VenueManagerView() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  return (
    <Layout>
      <UserOnHeroSection />
      {/* <UsersVenueSection /> */}
      <CurrentBookingsSection />
      {/* <EditVenueDropDown /> */}
      {/* <CreateAVenue /> */}
      {/* <ManageMyAccount /> */}
    </Layout>
  );
}

export default VenueManagerView;
