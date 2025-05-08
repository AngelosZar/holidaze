import Layout from '../components/layout/Layout';
import { UserOnHeroSection } from '../components/onProfile/UserOnHeroSection';
import CurrentBookingsSection from '../components/onManagerView/CurrentBookingsSection';
//
import { EditVenueDropDown } from '../components/onManagerView/EditVenueDropDown';
import ManageMyAccount from '../components/onManagerView/ManageMyAccount';
import CreateAVenue from '../components/onManagerView/CreateAVenue';

function VenueManagerView() {
  return (
    <Layout>
      <UserOnHeroSection />
      {/* <CurrentBookingsSection /> */}
      {/* <EditVenueDropDown /> */}
      <CreateAVenue />
      {/* <ManageMyAccount /> */}
    </Layout>
  );
}

export default VenueManagerView;
