import Layout from '../components/layout/Layout';
import { UserOnHeroSection } from '../components/onProfile/UserOnHeroSection';
import CurrentBookingsSection from '../components/onManagerView/CurrentBookingsSection';
//
import { EditVenueDropDown } from '../components/onManagerView/EditVenueDropDown';

function VenueManagerView() {
  return (
    <Layout>
      <UserOnHeroSection />
      <CurrentBookingsSection />
      <EditVenueDropDown />
    </Layout>
  );
}

export default VenueManagerView;
