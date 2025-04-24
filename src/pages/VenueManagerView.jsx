import Layout from '../components/layout/Layout';
import { UserOnHeroSection } from '../components/onProfile/UserOnHeroSection';
import CurrentBookingsSection from '../components/onManagerView/CurrentBookingsSection';
//
import { EditVenueDropDown } from '../components/onManagerView/EditVenueDropDown';
import ManageMyAccount from '../components/onManagerView/ManageMyAccount';

function VenueManagerView() {
  return (
    <Layout>
      <UserOnHeroSection />
      <CurrentBookingsSection />
      <EditVenueDropDown />
      <ManageMyAccount />
    </Layout>
  );
}

export default VenueManagerView;
